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
    },

    events:{
        "click #btnNewMessage":"sendNewMessage",
        "click #btnAddVisitor":"addVisitor"
    },

    visitorCount:0,
    
    addVisitor:function () {
    	
    	var newVisitorHTML = 
    	'<div id="nv' + this.visitorCount.toString() + '" class="row">' +
	    '	<div class="col-xs-10">' +
	    '		<div class="form-group">' +
	    '			<input type="text" name="" id="nvtxt' + this.visitorCount.toString() + '" class="form-control" value="" required="required">' +
	    '		</div>' +
	    '	</div>' +
	    '	<div class="col-xs-2">' +
	    '		<span id="removeVisitorButton" class="icon ion-ios7-minus" onclick="$( \'#nv' + this.visitorCount.toString() + '\' ).remove();"></span>' +
	    //'		<span id="removeVisitorButton" class="icon ion-ios7-minus" onclick="alert(\'nv' + this.visitorCount.toString() + '\' )"></span>' +
	    '	</div>' +
    	'</div>';

    	
    	this.$('#newVisitor').after(newVisitorHTML);
    	this.visitorCount++;
    	window.viewNavigator.refreshScroller();

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
   
      		  for(var i = 0 ; i < this.visitorCount ; i++){
          		  try{
           			if(this.$('#nvtxt' + i.toString()).val() != undefined){
               			if( i > 0 ) messageMessage += "; "; 
           				messageMessage += this.$('#nvtxt' + i.toString()).val();
           			}
          		  }catch(e){        	
          		  }
      		  }	
      		  
      	  } else if(App.messageTypeId == Constants.MESSAGE_TYPE_ID_BOOKING) {
    		  messageDateFrom = self.messageDateFrom.val();
    		  messageDateTo   = self.messageDateTo.val();	
      		  messageSubject  = "Reserva";
      		  messageMessage  = this.$('#amenities option:selected').text();
      	  } else {
      		  	messageMessage = self.messageMessage.val();
      		  	messageSubject = self.messageSubject.val();
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
  }    

});