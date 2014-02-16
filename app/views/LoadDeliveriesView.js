templates.inProgressView = "app/views/InProgressView.html";
window.lastInProgressView = undefined;

window.LoadDeliveriesView = Backbone.View.extend({

    title: "Cargando...",
    type: undefined,
    backLabel: "Volver",
    cancelActivity: false,
    
    initialize: function(options) {

        this.render();
        this.view = this.$el;
        
        var self = this;
        window.lastInProgressView = this;

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
        this.$el.html(templates.inProgressView);

        this.$el.css("height", "100%");
        return this;
    },

    loadDeliveries: function(result) {
    	if(window.lastInProgressView.cancelActivity) return;

    	App.deliveries = result.deliveries;

		var view = new DeliveriesView({ model:{} });
        window.ViewNavigatorUtil.replaceView( view );

    },
    
    loadDeliveriesFail: function(message) {
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