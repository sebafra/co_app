templates.conversationNewView = "app/views/ConversationNewView.html";

window.ConversationNewView = Backbone.View.extend({

    //destructionPolicy:'never',
    title: "Conversacion",
    backLabel: "Volver",
    messageSubject:undefined,
    messageMessage:undefined,

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #btnNewMessage":"sendNewMessage"
    },

    render:function (eventName) {
        var template = _.template(templates.conversationNewView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));

//    	this.$el.html(templates.conversationNewView);
        this.messageSubject = this.$('#messageSubject');
        this.messageMessage = this.$('#messageMessage');

//        if(App.role == Constants.ROLE_ADMINISTRATOR)
	        this.users = this.$el.find("#users");
//	        var idx = 0;
	        _.each(App.users, function (user) {
//	        	if(idx == 0) App.userSelected = user;
	        	this.users.append("<option value=" + user.userId + ">" + user.name + "</option>");
//	        	idx++;
	        }, this);
//    	} 
    
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
    	  alert("userId:" + userId);
    	  ServiceMessage.register(self.messageMessage.val(), self.messageSubject.val(), "-1" , userId, self.onSendNewMessageOk, self.onSendNewMessageFail);
      }
  },
  
  sendNewMessageOk:function(message){
	  this.sending = false;
      var view = new LoadConversationsView({message:message});
      window.ViewNavigatorUtil.replaceView( view );
  },
  sendNewMessageFail:function(message){
	  this.sending = false;
	  alert(message);
  }

});