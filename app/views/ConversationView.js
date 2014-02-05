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

        this.moveToLastMessage();
        
        return this;
    },


    drawMessageIdx:0,
    drawMessage:function(container, message){

		//alert("<div class='row' id='msg_" + this.drawMessageIdx.toString() + "'>");
    	if(App.role == Constants.ROLE_USER){
	    	if(message.messageOrigin == Constants.MESSAGE_ORIGIN_USER){
	            container.append("<div class='row' id='msg_" + this.drawMessageIdx.toString() + "'><div class='col-xs-2'></div><div class='col-xs-10 messageContainer messageContainerRight'><div class='messageDate'>Yo</div><div class='messageText'>" + message.messageMessage + "</div></div></div>");
	    	} else {
	            container.append("<div class='row' id='msg_" + this.drawMessageIdx.toString() + "'><div class='col-xs-10 messageContainer messageContainerLeft'><div class='messageDate'>Administrador</div><div class='messageText'>" + message.messageMessage + "</div></div><div class='col-xs-2'></div></div>");
	    	}
    	} else {
	    	if(message.messageOrigin == Constants.MESSAGE_ORIGIN_USER){
	            container.append("<div class='row' id='msg_" + this.drawMessageIdx.toString() + "'><div class='col-xs-10 messageContainer messageContainerLeft'><div class='messageDate'>" + message.messageUserName + "</div><div class='messageText'>" + message.messageMessage + "</div></div><div class='col-xs-2'></div></div>");
	    	} else {
	            container.append("<div class='row' id='msg_" + this.drawMessageIdx.toString() + "'><div class='col-xs-2'></div><div class='col-xs-10 messageContainer messageContainerRight'><div class='messageDate'>Yo</div><div class='messageText'>" + message.messageMessage + "</div></div></div>");
	    	}
    	}
    	window.viewNavigator.refreshScroller();
    	//window.viewNavigator.scrollToElement('#msg_' + this.drawMessageIdx.toString());
    	
    	this.drawMessageIdx++;
    	
    	App.lastMessage = message;

        _.each(message.messages, function (message) {
            this.drawMessage(container, message);
        }, this);
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
      	  		userId = App.lastMessage.messageUserId;
      	  	//alert("userId:" + userId);
      	  	//alert(JSON.stringify(App.lastMessage));

      	  	ServiceMessage.register(self.messageMessage.val(), App.lastMessage.messageSubject, App.lastMessage.messageId, userId, self.onSendNewMessageOk, self.onSendNewMessageFail);
        }
    },

    sendNewMessageExternal:function(msg){
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
      	  		userId = App.lastMessage.messageUserId;
      	  	//alert("userId:" + userId);
      	  	//alert(JSON.stringify(App.lastMessage));

      	  	ServiceMessage.register(msg, App.lastMessage.messageSubject, App.lastMessage.messageId, userId, self.onSendNewMessageOk, self.onSendNewMessageFail);
        }
    },


    receiveNewMessage:function(message){

    	if(message.messageOrigin != App.messageOrigin){
    		if(this.isMessageValidToAdd(message)){
    			this.drawMessage(this.messagesContainer, message);
    			this.moveToLastMessage();
    		}
    	}
    	
    },

    isMessageValidToAdd:function(message){
    	return true;
    },
    sendNewMessageOk:function(message){
  	  	this.sending = false;
        this.drawMessage(this.messagesContainer, message);
        this.moveToLastMessage();
        
        this.$('#messageMessageExternal').val("");
        //this.messageMessage.val("");
    },
    moveToLastMessage:function(){
       	var idxNew = this.drawMessageIdx - 1;
    	window.viewNavigator.scroller.scrollToElement('#msg_' + idxNew.toString());
    },
    sendNewMessageFail:function(message){
  	  	this.sending = false;
    	alert(message);
    },
    backCallback:function () {
      $(".ftr").css("display","none");
    }    

});

function clickSendNewMessage(){

	var view = window.viewNavigator.history[ window.viewNavigator.history.length - 1 ];

//	alert(view);
//	alert($('#messageMessageExternal').val());
	var msg = $('#messageMessageExternal').val();
	view.sendNewMessageExternal(msg);

    //Limpia el input una vez enviado el mensaje
    $('#messageMessageExternal').val('');
//
//			view.receiveNewMessage(e.payload.data);
//			messageShowed = true;
//    	}
//
//	}
}