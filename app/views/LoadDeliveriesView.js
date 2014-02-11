window.LoadDeliveriesView = Backbone.View.extend({

    title: "Cargando...",

    type: undefined,
    
    initialize: function(options) {

        this.render();
        this.view = this.$el;
        
        var self = this;

        this.onLoadDeliveries = function(result){
            self.loadDeliveries(result);
        };

        this.onLoadDeliveriesFail = function(error){
            self.loadDeliveriesFail(error);
        };

        setTimeout(function(){
        	ServiceDelivery.getByCountry(self.onLoadDeliveries, self.onLoadDeliveriesFail);
        }, 401 );        
    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.loadDeliveriesView);

        this.$el.css("height", "100%");
        return this;
    },

    loadDeliveries: function(result) {

    	App.deliveries = result.deliveries;

		var view = new DeliveriesView({ model:{} });
        window.ViewNavigatorUtil.replaceView( view );

    },
    
    loadDeliveriesFail: function(message) {
		var view = new MessageView({message:message});
        window.ViewNavigatorUtil.replaceView( view );
    }


});