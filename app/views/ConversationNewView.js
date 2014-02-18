templates.conversationNewView		= "app/views/ConversationNewView.html";
templates.conversationNewVisitView	= "app/views/ConversationNewVisitView.html";
templates.conversationNewBookingView= "app/views/ConversationNewBookingView.html";

window.ConversationNewView = Backbone.View.extend({

    //destructionPolicy:'never',
    title: "Conversacion",
    backLabel: "Volver",
    messageDateFrom:undefined,
    messageDateTo:undefined,
    messageSubject:undefined,
    messageMessage:undefined,
    template:undefined,

    initialize: function(options) {
        this.render();
        this.view = this.$el;
        this.addingVisitor = false;
    },

    events:{
        "click #btnNewMessage":"sendNewMessage",
        "click #btnAddVisitor":"addVisitor"
    },

    visitorCount:0,
    
    addingVisitor: false,
    
    addVisitor:function () {
    	if(this.addingVisitor)return;
    	this.addingVisitor = true;
    	
    	var newVisitorHTML = 
    	'<div id="nv' + this.visitorCount.toString() + '" class="row">' +
	    '	<div class="col-xs-10">' +
	    '		<div class="form-group">' +
	    '			<input type="text" name="" id="nvtxt' + this.visitorCount.toString() + '" class="form-control" required="required" value="' +  this.$('#nvtxt').val() + '">' +
	    '		</div>' +
	    '	</div>' +
	    '	<div class="col-xs-2">' +
	    '		<span id="removeVisitorButton" class="icon ion-ios7-minus" onclick="setTimeout(function(){$( \'#nv' + this.visitorCount.toString() + '\' ).remove();}, 401); "></span>' +
	    //'		<span id="removeVisitorButton" class="icon ion-ios7-minus" onclick="$( \'#nv' + this.visitorCount.toString() + '\' ).remove();"></span>' +
	    //'		<span id="removeVisitorButton" class="icon ion-ios7-minus" onclick="alert(\'nv' + this.visitorCount.toString() + '\' )"></span>' +
	    '	</div>' +
    	'</div>';

    	this.$('#newVisitor').after(newVisitorHTML);
    	this.visitorCount++;
    	window.viewNavigator.refreshScroller();

    	var self = this;
    	
        setTimeout(function(){
        	self.addingVisitor = false;
        }, 401 ); 
    	
    },
    
    render:function (eventName) {
    	if(App.messageTypeId == Constants.MESSAGE_TYPE_ID_AUTHORIZATION){

    		this.template = _.template( templates.conversationNewVisitView);
            var model = {isTablet:NativeUtil.isTablet()};
            this.$el.html(this.template(model));
            this.title= "Autorizacion";

            this.messageDateTo 	= this.$('#messageDateTo');
            this.messageDateFrom= this.$('#messageDateFrom');

    	} else if(App.messageTypeId == Constants.MESSAGE_TYPE_ID_BOOKING) {
        	this.template = _.template( templates.conversationNewBookingView);

            var model = {isTablet:NativeUtil.isTablet()};
            this.$el.html(this.template(model));

            this.messageDateTo 	= this.$('#messageDateTo');
            this.messageDateFrom= this.$('#messageDateFrom');

            this.amenities = this.$el.find("#amenities");
	        _.each(App.country.amenities, function (amenity) {
	        	this.amenities.append("<option value=" + amenity.amenityId + ">" + amenity.amenityName + "</option>");
	        }, this);

    	} else {

    		this.template = _.template( templates.conversationNewView);

            var model = {isTablet:NativeUtil.isTablet()};
            this.$el.html(this.template(model));

            this.messageSubject = this.$('#messageSubject');
            this.messageMessage = this.$('#messageMessage');

            if(App.role == Constants.ROLE_ADMINISTRATOR){
    	        this.users = this.$el.find("#users");
    	        _.each(App.users, function (user) {
    	        	this.users.append("<option value=" + user.userId + ">" + user.name + "</option>");
    	        }, this);
        	} 

    	}
    	
    	return this;
    },
    sending:false,
    sendNewMessage:function(){
      var self = this;

      this.onSendNewMessageOk = function(message){
          self.sendNewMessageOk(message);
      };

      this.onSendNewMessageFail = function(message){
          self.sendNewMessageFail(message);
      };

      if(!this.sending){
    	  this.sending = true;
    	  var userId = App.getUserId();
    	  if(App.role == Constants.ROLE_ADMINISTRATOR)
    		userId = self.users.val();  

    	 
    	  var messageMessage;
    	  var messageSubject;
    	  var messageDateTo;
    	  var messageDateFrom;
    	  
    	  if(App.messageTypeId == Constants.MESSAGE_TYPE_ID_AUTHORIZATION){
    		  
    		  messageDateFrom	= self.messageDateFrom.val();
    		  messageDateTo 	= self.messageDateTo.val();	
      		  messageSubject  = "Autorizacion";
      		  messageMessage  = "Autorizacion para: ";
   
    		  if($.trim(messageDateFrom) == ''){
    			  alert("Debe ingresar la fecha desde.");
    	    	  this.sending = false;
    			  return;
    		  }

    		  if($.trim(messageDateTo) == ''){
    			  alert("Debe ingresar la fecha hasta.");
    	    	  this.sending = false;
    			  return;
    		  }

    		  var from = messageDateFrom.split("-");
    		  var dateFrom = new Date(from[0], from[1] - 1, from[2]);
    		  var to = messageDateTo.split("-");
    		  var dateTo = new Date(to[0], to[1] - 1, to[2]);
    		  if(dateTo.toLocaleString() < dateFrom.toLocaleString()) {
    			  alert("La fecha hasta debe ser mayor o igual a la fecha desde.");
    	    	  this.sending = false;
    			  return;
    		  }
    		  
    		  var dateNow = new Date();
    		  dateNow.setHours(0);
    		  dateNow.setMilliseconds(0);
    		  dateNow.setMinutes(0);
    		  dateNow.setMonth(0);
    		  dateNow.setSeconds(0);
    		  if(dateFrom.toLocaleString() < dateNow.toLocaleString()) {
    			  alert("La fecha desde debe ser mayor o igual a la fecha actual.");
    	    	  this.sending = false;
    			  return;
    		  }

    		  var visitorAdded = false;
      		  for(var i = 0 ; i < this.visitorCount ; i++){
          		  try{
          			  var txt = this.$('#nvtxt' + i.toString()).val();
          			  if((txt != undefined) && ($.trim(txt) != '' ) ){
          				  if( visitorAdded ) messageMessage += "; "; 
          				  //messageMessage += this.$('#nvtxt' + i.toString()).val();
          				  messageMessage += txt;
          				  visitorAdded = true;
          			  }
          		  }catch(e){        	
          		  }
      		  }	
      		  
    		  if(!visitorAdded){
    			  alert("Debe ingresar el nombre de un visitante.");
    	    	  this.sending = false;
    			  return;
    		  }

    	  } else if(App.messageTypeId == Constants.MESSAGE_TYPE_ID_BOOKING) {
    		  messageDateFrom = self.messageDateFrom.val();
    		  messageDateTo   = self.messageDateTo.val();	
      		  messageSubject  = "Reserva";
      		  messageMessage  = $.trim(this.$('#amenities option:selected').text());
      		  
    		  if($.trim(messageDateFrom) == ''){
    			  alert("Debe ingresar la fecha desde.");
    	    	  this.sending = false;
    			  return;
    		  }

    		  if($.trim(messageDateTo) == ''){
    			  alert("Debe ingresar la fecha hasta.");
    	    	  this.sending = false;
    			  return;
    		  }

    		  var from = messageDateFrom.split("-");
    		  var dateFrom = new Date(from[0], from[1] - 1, from[2]);
    		  var to = messageDateTo.split("-");
    		  var dateTo = new Date(to[0], to[1] - 1, to[2]);
    		  if(dateTo.toLocaleString() < dateFrom.toLocaleString()) {
    			  alert("La fecha hasta debe ser mayor o igual a la fecha desde.");
    	    	  this.sending = false;
    			  return;
    		  }
    		  
    		  var dateNow = new Date();
    		  dateNow.setHours(0);
    		  dateNow.setMilliseconds(0);
    		  dateNow.setMinutes(0);
    		  dateNow.setMonth(0);
    		  dateNow.setSeconds(0);
    		  if(dateFrom.toLocaleString() < dateNow.toLocaleString()) {
    			  alert("La fecha desde debe ser mayor o igual a la fecha actual.");
    	    	  this.sending = false;
    			  return;
    		  }

      		  
      	  } else {
      		  	messageMessage = $.trim(self.messageMessage.val());
      		  	messageSubject = $.trim(self.messageSubject.val());
      		  	
      		  if($.trim(messageSubject) == ''){
    			  alert("Debe ingresar el asunto.");
    	    	  this.sending = false;
    			  return;
    		  }

      		  if($.trim(messageMessage) == ''){
    			  alert("Debe ingresar el mensaje.");
    	    	  this.sending = false;
    			  return;
    		  }

      		  	
      	  }
    	  
    	  ServiceMessage.register(self.onSendNewMessageOk, self.onSendNewMessageFail, messageMessage, messageSubject, "-1" , userId, messageDateFrom, messageDateTo);
      }
  },
  
  sendNewMessageOk:function(message){
	  this.sending = false;
	  window.viewNavigator.popView( );
  },
  sendNewMessageFail:function(message){
	  this.sending = false;
	  alert(message);
  },
  showCallback:function(){
  }

});

