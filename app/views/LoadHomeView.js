templates.inProgressView = "app/views/InProgressView.html";
window.lastInProgressView = undefined;

window.LoadHomeView = Backbone.View.extend({

    title: "Cargando...",
	usuario: undefined,
	phone: undefined,
	password: undefined,
	role: undefined,
    backLabel: "Volver",
    cancelActivity: false,

    initialize: function(options) {

    	this.phone    = options.phone;
    	this.usuario  = options.usuario;
    	this.password = options.password;
    	this.role 	  = options.role;
    	
        this.render();
        this.view = this.$el;

        var self = this;
        window.lastInProgressView = this;
        
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
        	ServiceUser.login(self.role, self.usuario, self.phone, self.password, self.onLogin, self.onLoginFail);
        }, 401 );        
    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.inProgressView);

        this.$el.css("height", "100%");
        return this;
    },

    loadCountries: function(result) {
    	if(window.lastInProgressView.cancelActivity) return;

		var view;
        
    	if(result.countries == undefined || result.countries.length == 0){
    		view = new MessageView({message:"No posee ningun country"});
		} else {
			App.countries = result.countries;
			
	    	App.countries.sort(function(a, b){
	    	    if (a.countryName.toLowerCase() < b.countryName.toLowerCase()) return -1;
	    	    if (b.countryName.toLowerCase() < a.countryName.toLowerCase()) return 1;
	    	    return 0;
	    	});
	    	
			view = new HomeView({ model:{} });
			window.ViewNavigatorUtil.removeView();
		}
    	
		window.ViewNavigatorUtil.replaceView( view );
    },
    
    loadCountriesFail: function(message) {
    	if(window.lastInProgressView.cancelActivity) return;

    	var view = new MessageView({message:message});
    	window.ViewNavigatorUtil.replaceView( view );
    },
    
    login: function(data){
    	if(window.lastInProgressView.cancelActivity) return;

    	console.log("loginloginloginloginloginlogin-"+JSON.stringify(data));
    	App.saveUser(data);
    	if(App.isEnvironmentWeb() == false){
    		window.setTimeout(enableNotifications,10000);
    	}

    	ServiceCountry.getByUser( this.loadCountries, this.loadCountriesFail );
    },
    
    loginFail: function(message){
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