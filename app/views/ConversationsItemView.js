templates.conversationsItemView = "app/views/ConversationsItemView.html";

window.ConversationsItemView = Backbone.View.extend({

    tagName:'li',
    template:undefined,

    initialize: function(options) {
    	this.conversation = options.conversation;
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