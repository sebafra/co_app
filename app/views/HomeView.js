templates.homeView = "app/views/HomeView.html";

window.HomeView = Backbone.View.extend({

    title: "Consorcio Digital",
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        //"click .administradorClick":"loadAttractions",
        "click .bookClick":"loadBooks",
        "click .visitClick":"loadVisits",
        "click .deliveryClick":"loadDeliverys",
        "click .administradorClick":"loadConversations"
    },

    showCallback:function () {
        //Ejecutar una funcion al pasar al cargar la vista
    },

    render:function (eventName) {
        var template = _.template(templates.homeView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));
        var $countries = this.$el.find("#countries");
        var idx = 0;
        _.each(App.countries, function (country) {
        	if(idx == 0) App.country = country;
            $countries.append("<option value=" + country.countryId + ">" + country.countryName + "</option>");
        	idx++;
        }, this);

        this.headerActions = $("<div style='padding: 5px 5px;'><span class='icon ion-ios7-information-outline'></span></div>");

        var self = this;
        this.headerActions.on( "click", function(event){
            self.headerButtonClick(event);
        } );


        return this;
    },

    loadConversations:function () {
        var view = new LoadConversationsView();
        ViewNavigatorUtil.pushView( view );
    },
    loadAttractions:function () {
        var view = new LoadItemsView({type:ModelManager.type.attraction.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadBooks:function () {
        var view = new LoadItemsView({type:ModelManager.type.book.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadVisits:function () {
        var view = new LoadItemsView({type:ModelManager.type.visit.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadDeliverys:function () {
        var view = new LoadItemsView({type:ModelManager.type.delivery.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    headerButtonClick: function (event) {

        var view = new AboutView();
        window.viewNavigator.pushView( view );
    }
});