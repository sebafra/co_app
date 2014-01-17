templates.loadHomeView = "app/views/LoadHomeView.html";

window.LoadHomeView = Backbone.View.extend({

    title: "Cargando...",

    initialize: function(options) {

        this.render();
        this.view = this.$el;

        var view = new HomeView({ model:{} });
        window.ViewNavigatorUtil.replaceView( view );
    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.loadItemsView);

        this.$el.css("height", "100%");
        return this;
    }

});