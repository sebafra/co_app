templates.homeView = "app/views/HomeView.html";

window.HomeView = Backbone.View.extend({

    title: "Consorcio M&oacute;vil",
    destructionPolicy:'never',
    backLabel: "Logout",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        //"click .administradorClick":"loadAttractions",
        "click .bookClick":"loadBooks",
        "click .visitClick":"loadVisits",
        "click .deliveryClick":"loadDeliverys",
        "click .administradorClick":"loadConversations",
        "change #countries":"changeCountry",
        "click #btnCountries":"selectCountry"
    },

    selectCountry:function () {
	    var view = new SelectView({selectType:Constants.SELECT_TYPE_COUNTRIES});
	    window.ViewNavigatorUtil.pushView( view );
    },

    
    showCallback:function () {
	    _.each(App.countries, function (country) {
	    	if(country.countryId == App.countryIdSelected){
		        this.$('#selectCountries').html(country.countryName);
		        App.country = country;
	    	}
	    }, this);

	    this.showCountryLogo();
    	
    },

    showCountryLogo:function () {
		var $countryLogo = this.$el.find("#countryLogo");
		try{
	    	if (App.country.countryLogoURL){
	    			$countryLogo.attr("src", "http://www.coterranea.com/images/Newsletter/2009/"+App.country.countryLogoURL);
	    	} else {
				$countryLogo.attr("src", "assets/images/nocountries.jpg");
	    	}
		}catch(e){
			$countryLogo.attr("src", "assets/images/nocountries.jpg");
		}
    },

    render:function (eventName) {
        var template = _.template(templates.homeView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));

//        var $countries = this.$el.find("#countries");
//        var idx = 0;
//        _.each(App.countries, function (country) {
//        	if(idx == 0) App.country = country;
//            $countries.append("<option value=" + country.countryId + ">" + country.countryName + "</option>");
//        	idx++;
//        }, this);

        if(App.countries != undefined && App.countries.length > 0){
	        App.countryIdSelected = App.countries[0].countryId;
	        App.country = App.countries[0];
        }

        this.headerActions = $("<div style='padding: 5px 5px;'><span class='icon ion-ios7-information-outline'></span></div>");

        var self = this;
        this.headerActions.on( "click", function(event){
            self.headerButtonClick(event);
        } );

        App.persistUser();
        
        return this;
    },

    loadConversations:function () {
    	App.messageTypeId = Constants.MESSAGE_TYPE_ID_MESSAGE;
        var view = new LoadConversationsView();
        ViewNavigatorUtil.pushView( view );
    },
    changeCountry:function () {
        var $countries = this.$el.find("#countries");
        _.each(App.countries, function (country) {
        	if(country.countryId == $countries.val()){
        		App.country = country;
        		this.showCountryLogo();
        	}
        }, this);
    },
    loadAttractions:function () {
    	this.messageTypeId = Constants.MESSAGE_TYPE_ID_MESSAGE;

    	var view = new LoadItemsView({messageType:ModelManager.type.attraction.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadBooks:function () {
    	App.messageTypeId = Constants.MESSAGE_TYPE_ID_BOOKING;
        var view = new LoadConversationsView();
        ViewNavigatorUtil.pushView( view );
//        var view = new LoadItemsView({type:ModelManager.type.book.code});
        //window.viewNavigator.pushView( view );
//        ViewNavigatorUtil.pushView( view );
    },
    loadVisits:function () {
    	App.messageTypeId = Constants.MESSAGE_TYPE_ID_AUTHORIZATION;
        var view = new LoadConversationsView();
        ViewNavigatorUtil.pushView( view );
//        var view = new LoadItemsView({type:ModelManager.type.visit.code});
//        ViewNavigatorUtil.pushView( view );
    },
    loadDeliverys:function () {
        var view = new LoadDeliveriesView();
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    headerButtonClick: function (event) {

        var view = new AboutView();
        window.viewNavigator.pushView( view );
    },
    logoutCallback:function () {
    	console.log("logoutttttttttttttttttttttttttt");
    	
    	App.logout();
        var view = new LoginView();
        ViewNavigatorUtil.replaceView( view );
    }

});