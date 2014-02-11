templates.deliveriesItemView = "app/views/DeliveriesItemView.html";

window.DeliveriesItemView = Backbone.View.extend({

    tagName:'li',
    template:undefined,

    initialize: function(options) {
    	this.model = options.delivery;
        this.template = _.template( templates.deliveriesItemView );
        this.render();
        this.view = this.$el;
    },

    events:{
    },

    render:function (eventName) {
        var model = this.model;
        this.$el.html( this.template( model ));
        this.$el.attr('id', model.id );
        return this;
    }
});