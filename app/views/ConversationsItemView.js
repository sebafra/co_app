templates.conversationsItemView 		= "app/views/ConversationsItemView.html";
templates.conversationsItemVisitView 	= "app/views/ConversationsItemVisitView.html";
templates.conversationsItemBookingView 	= "app/views/ConversationsItemBookingView.html";

window.ConversationsItemView = Backbone.View.extend({

    tagName:'li',
    template:undefined,

    initialize: function(options) {
    	this.conversation = options.conversation;


    	if(App.messageTypeId == Constants.MESSAGE_TYPE_ID_AUTHORIZATION)
    		this.template = _.template( templates.conversationsItemVisitView);
    	else if(App.messageTypeId == Constants.MESSAGE_TYPE_ID_BOOKING) 
    		this.template = _.template( templates.conversationsItemBookingView);
    	else
    		this.template = _.template( templates.conversationsItemView);
    		
        this.render();
        this.view = this.$el;
    },

    events:{
    },

    render:function (eventName) {
        var conversation = this.conversation;
        
        this.$el.html( this.template( conversation ));
        this.$el.attr('id', conversation.messageId );
        return this;
    }    
});
