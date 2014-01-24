templates.conversationNewView = "app/views/ConversationNewView.html";

window.ConversationNewView = Backbone.View.extend({

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
        this.$el.html(templates.conversationNewView);
        this.messageSubject = this.$('#messageSubject');
        this.messageMessage = this.$('#messageMessage');

        return this;
    },
    
    sendNewMessage:function(){
      var self = this;

      this.onSendNewMessageOk = function(message){
          self.sendNewMessageOk(message);
      };

      this.onSendNewMessageFail = function(message){
          self.sendNewMessageFail(message);
      };

  	  ServiceMessage.register(self.messageMessage.val(), self.messageSubject.val(), "-1" , self.onSendNewMessageOk, self.onSendNewMessageFail);
  },
  
  sendNewMessageOk:function(message){
      var view = new LoadConversationsView({message:message});
      window.ViewNavigatorUtil.replaceView( view );
  },
  sendNewMessageFail:function(message){
  	alert(message);
  }    

});