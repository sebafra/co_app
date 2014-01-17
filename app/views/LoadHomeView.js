templates.loadHomeView = "app/views/LoadHomeView.html";

window.LoadHomeView = Backbone.View.extend({

    title: "Cargando...",
	usuario: undefined,
	password: undefined,

    initialize: function(options) {

    	this.usuario  = options.usuario;
    	this.password = options.password;
    	
        this.render();
        this.view = this.$el;

        var self = this;

        this.onLoadCountries = function(data){
            self.loadCountries(data);
        };

        this.onLoadCountriesFail = function(message){
            self.loadCountriesFail(message);
        };

        this.onLogin = function(data){
            self.login(data);
        };

        this.onLoginFail = function(message){
            self.loginFail(message);
        };

        //delay long enough for transition to complete
        setTimeout(function(){
        	ServiceUser.login(self.usuario,self.password, self.onLogin, self.onLoginFail);
        }, 401 );        
    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.loadItemsView);

        this.$el.css("height", "100%");
        return this;
    },

    loadCountries: function(result) {
        var view;
        
    	if(result.countries == undefined || result.countries.length == 0){
    		view = new MessageView({message:"No posee ningun country"});
		} else {
			App.countries = result.countries;
			view = new HomeView({ model:{} });
		}
    	
        window.ViewNavigatorUtil.replaceView( view );
    },
    
    loadCountriesFail: function(message) {
        var view = new MessageView({message:message});
        window.ViewNavigatorUtil.replaceView( view );
    },
    
    login: function(data){
    	App.saveUser(data);
    	ServiceCountry.getByUser( this.loadCountries, this.loadCountriesFail );
    },
    
    loginFail: function(message){
        var view = new MessageView({message:message});
        window.ViewNavigatorUtil.replaceView( view );
    }
    
});