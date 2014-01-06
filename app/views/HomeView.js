templates.homeView = "app/views/HomeView.html";

window.HomeView = Backbone.View.extend({

    title: "Consorcio Digital",
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click .back1":"loadAttractions",
        // "click .back2":"loadOtherEvents",
        // "click .back3":"loadRestaurants",
        // "click .back4":"loadHotels",
        // "click .back5":"loadService",
        // "click .back6":"loadFestival",
        // "click .back7":"loadRecomendado"
    },

    render:function (eventName) {
        var template = _.template(templates.homeView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));


        return this;
    },

    loadAttractions:function () {
        var view = new LoadItemsView({type:ModelManager.type.attraction.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadHotels:function () {
    	var view = new LoadItemsView({type:ModelManager.type.hotel.code});
    	//window.viewNavigator.pushView( view );
    	ViewNavigatorUtil.pushView( view );
    },
    loadRestaurants:function () {
        var view = new LoadItemsView({type:ModelManager.type.restaurant.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadOtherEvents:function () {
        var view = new LoadItemsView({type:ModelManager.type.otherEvent.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadService:function () {
        var view = new LoadItemsView({type:ModelManager.type.service.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadFestival:function () {
        var view = new LoadItemsView({type:ModelManager.type.festival.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadRecomendado:function () {
        var view = new LoadItemsView({type:ModelManager.type.cronograma.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    }
});