templates.homeView = "app/views/HomeView.html";

window.HomeView = Backbone.View.extend({

    title: "Consorcio Digital",
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click .administradorClick":"loadAttractions",
    },

    render:function (eventName) {
        var template = _.template(templates.homeView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));
        var $countries = this.$el.find("#countries");
        _.each(App.countries, function (country) {
            $countries.append("<option value=" + country.id + ">" + country.name + "</option>");
        }, this);


        return this;
    },

    loadAttractions:function () {
        var view = new LoadItemsView({type:ModelManager.type.attraction.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadRecomendado:function () {
        var view = new LoadItemsView({type:ModelManager.type.cronograma.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    }
});