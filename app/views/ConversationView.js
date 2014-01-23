templates.conversationView = "app/views/ConversationView.html";

window.ConversationView = Backbone.View.extend({

    template:undefined,
    backLabel: "Volver",
    // backLabel: "<span class='icon ion-location'></span>",
    title:"",
    messagesContainer:undefined,
    
    initialize: function(options) {

//        this.model = options.model;
        App.message = options.message;
        this.message = options.message;
        this.title = "Administrador";
        this.template = _.template( templates.conversationView );
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #btnNewMessage":"sendNewMessage"
    },

    render:function (eventName) {
        this.title = this.message.messageSubject;
        this.$el.html( this.template( this.message ));
        this.messagesContainer = this.$el.find(".container");
        this.messageMessage = this.$('#messageMessage');

    	App.lastMessageRoot = this.message;
        this.drawMessage(this.messagesContainer, this.message);

        return this;
    },
    
    
    drawMessage:function(container, message){
    	
    	if(message.messageOrigin == Constants.MESSAGE_ORIGIN_USER){
            container.append("<div class='row'><div class='col-xs-2'></div><div class='col-xs-10 messageContainer messageContainerRight'><div class='messageDate'>Yo</div><div class='messageText'>" + message.messageMessage + "</div></div></div>");
    	} else {
            container.append("<div class='row'><div class='col-xs-10 messageContainer messageContainerLeft'><div class='messageDate'>Administrador</div><div class='messageText'>" + message.messageMessage + "</div></div><div class='col-xs-2'></div></div>");
    	}
    	
    	App.lastMessage = message;
    	
        _.each(message.messages, function (message) {
            this.drawMessage(container, message);
        }, this);        
    },
    
    sendNewMessage:function(){
//        var $container = this.$el.find(".container");
//        var messageMessage = this.$('#messageMessage');

//        var newMessage = {
//	 			messageId:"xxxx",
//	 			messageSubject:App.message.messageSubject,
//	 			messageUserName:App.userName,
//	 			messageDate:"1/12/2014",
//	 			messageMessage:messageMessage.val(),
//		 		messageOrigin:Constants.MESSAGE_ORIGIN_USER
//	 	};
//        this.drawMessage($container, newMessage);
    	
        var self = this;

        this.onSendNewMessageOk = function(message){
            self.sendNewMessageOk(message);
        };

        this.onSendNewMessageFail = function(message){
            self.sendNewMessageFail(message);
        };

    	ServiceMessage.register(self.messageMessage.val(), App.lastMessage.messageSubject, App.lastMessage.messageId, self.onSendNewMessageOk, self.onSendNewMessageFail);
    },
    
    sendNewMessageOk:function(message){
        this.drawMessage(this.messagesContainer, message);
        this.messageMessage.val("");
    },
    sendNewMessageFail:function(message){
    	alert(message);
    }    
    
});