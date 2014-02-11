templates.deliveriesView = "app/views/DeliveriesView.html";

window.DeliveriesView = Backbone.View.extend({

    destructionPolicy:'never',
    title: "List",
    backLabel: "Volver",

    initialize: function(options) {
        this.title = "Deliveries";
    	this.render();
        this.view = this.$el;
    },

    events:{
    },

    render:function (eventName) {
        var template = _.template(templates.deliveriesView);

        this.$el.html(template( {deliveries:App.deliveries} ));
        var $list = this.$el.find("#list");

        _.each(App.deliveries, function (delivery) {
            $list.append(new DeliveriesItemView({delivery:delivery}).render().el);
        }, this);

        return this;
    }

    
});