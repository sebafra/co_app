templates.inProgressView = "app/views/InProgressView.html";

window.LoadConversationsView = Backbone.View.extend({

    title: "Cargando...",

    initialize: function(options) {

        this.render();
        this.view = this.$el;

        var self = this;

        this.onLoadConversations = function(result){
            self.loadConversations(result);
        };

        this.onLoadConversationsFail = function(error){
            self.loadConversationsFail(error);
        };

        setTimeout(function(){
        	ServiceMessage.getByUserByCountry(self.onLoadConversations, self.onLoadConversationsFail);
        }, 401 );        
    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.loadItemsView);

        this.$el.css("height", "100%");
        return this;
    },

    loadConversations: function(result) {
		App.messages = result.messages;

		var view = new ConversationsView({ model:{} });
        window.ViewNavigatorUtil.replaceView( view );
    },
    
    loadConversationsFail: function(message) {
        var view = new MessageView({message:message});
        window.ViewNavigatorUtil.replaceView( view );
    }
    

});