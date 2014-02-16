templates.inProgressView = "app/views/InProgressView.html";
window.lastInProgressView = undefined;

window.LoadConversationsView = Backbone.View.extend({

    title: "Cargando...",
    type: undefined,
    backLabel: "Volver",
    cancelActivity: false,
    
    initialize: function(options) {

        this.render();
        this.view = this.$el;
        
        var self = this;
        window.lastInProgressView = this;

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
        this.$el.html(templates.inProgressView);

        this.$el.css("height", "100%");
        return this;
    },

    loadConversations: function(result) {
    	if(window.lastInProgressView.cancelActivity) return;

    	App.messages = result.messages;

    	App.messages.sort(function(a, b){
    	    if (a.messageTimeStamp < b.messageTimeStamp) return -1;
    	    if (b.messageTimeStamp < a.messageTimeStamp) return 1;
    	    return 0;
    	});
    	
    	
    	if(App.role == Constants.ROLE_ADMINISTRATOR){
    	
    		ServiceUser.getByCountry( this.loadUsers, this.loadUsersFail );
    	
    	} else {
    		
    		var view = new ConversationsView({ model:{} });
            window.ViewNavigatorUtil.replaceView( view );

    	}
    	
    },
    
    loadConversationsFail: function(message) {
    	if(window.lastInProgressView.cancelActivity) return;

    	var view = new MessageView({message:message});
        window.ViewNavigatorUtil.replaceView( view );
    },

    loadUsers: function(result) {
    	if(window.lastInProgressView.cancelActivity) return;

        var view;
        
    	if(result.users == undefined || result.users.length == 0){
    		view = new MessageView({message:"No posee ningun usuario"});
		} else {
			App.users = result.users;
	    	App.users.sort(function(a, b){
	    	    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
	    	    if (b.name.toLowerCase() < a.name.toLowerCase()) return 1;
	    	    return 0;
	    	});
			
			view = new ConversationsView({ model:{} });
		}
    	
        window.ViewNavigatorUtil.replaceView( view );
    },
    
    loadUsersFail: function(message) {
    	if(window.lastInProgressView.cancelActivity) return;

        var view = new MessageView({message:message});
        window.ViewNavigatorUtil.replaceView( view );
    },
    
    backCallback: function(){
    	this.cancelActivity = true;
    },
    
    showCallback: function(){
    	this.cancelActivity = false;
    }

    

});