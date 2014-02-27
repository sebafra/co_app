var User = Backbone.Model.extend({

	localStorage: new Backbone.LocalStorage("User")

});

var UserCollection = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage("UserCollection"),

    model: User,

    getCurrent: function() {

    	if(App.role == Constants.ROLE_USER){

    		if(App.country == undefined || App.country.countryId == undefined){

        		if(this.length > 0){
           			return this.at(0);
            	}
            	return null;

    		} else {

    			for(var idx = 0 ; idx < this.length ; idx++){
            		if(App.country.countryId == this.at(idx).get("countryId"))
            			return this.at(idx);
            	}
            	return null;
            	
    		}

    	} else {

    		if(this.length > 0){
       			return this.at(0);
        	}
        	return null;

    	}

    }

  });

window.App = {

	isEnvironmentWeb:function(){
		return false;
	},

	worksWithoutServer:function(){
		return false;
	},

	isOnlineEnabled:function(){
		return false;
	},

	adScreenToShow:0,

	language:"",

	translate:function(object, key){
		var txt = object[key + App.language];
		if(txt == undefined)
			return object[key];
		return txt;
	},

	setLanguageEnglish:function(){
		App.language = "-en";
	},

	setLanguageSpanish:function(){
		App.language = "";
	},

	setLanguageDefault:function(){
		App.setLanguageSpanish();
	},

	isLanguageEnglish:function(){
		return (App.language == "-en");
	},

	isLanguageSpanish:function(){
		return (App.language == "" || App.language == "-es");
	},

	getNextAdScreen:function(loadSuccess, loadError){
		ModelManager.getAll(ModelManager.type.adScreen.code,
			function(result){
				if(App.adScreenToShow >= result.items.length) App.adScreenToShow = 0;
				loadSuccess(result.items[App.adScreenToShow++]);
			}, loadError);
	}
	,
	getImagePath:function(type, fileName){
		// TODO modificar
		return "assets/model/adScreen/"+fileName;
	},

//	userName:		undefined,
//	userId:			undefined,
//	password:		undefined,
	role:			undefined,
	messageOrigin:	undefined,
	users: 			undefined,
	userSelected:	undefined,
	countries: 		undefined,
	country:		undefined,
	countryId: 		undefined,
	messageTypeId: 	undefined,
	messages: 		undefined,
	message: 		undefined,
	lastMessage: 	undefined,
	lastMessageRoot:undefined,
	usersLogged:	undefined,

	saveUser:function(data){

		this.usersLogged = new UserCollection;

        _.each(data.users, function (user) {
        	this.usersLogged.create(user);
        }, this);


	},

	persistUser:function(){
    	window.localStorage.setItem("usersLogged", 	JSON.stringify(this.usersLogged));
    	window.localStorage.setItem("countries", 	JSON.stringify(this.countries));
    	window.localStorage.setItem("messageOrigin",this.messageOrigin);
    	window.localStorage.setItem("role", 		this.role);
    	
//    	console.log("uuuuuuuuuuuuuuuuu-"+window.localStorage['usersLogged']);
//    	console.log("ccccccccccccccccc-"+window.localStorage['countries']);
//    	console.log("mmmmmmmmmmmmmmmmm-"+window.localStorage['messageOrigin']);
//    	
	},

	isUserPersisted:function(){

		if(window.localStorage['usersLogged']){
			var users = JSON.parse( window.localStorage['usersLogged'] );
			console.log("isUserPersistedisUserPersisted-"+JSON.stringify(users));

			this.usersLogged = new UserCollection;

	        _.each(users, function (user) {
	        	this.usersLogged.create(user);
	        }, this);

	        this.countries		= JSON.parse( window.localStorage['countries'] );
	    	this.messageOrigin	= window.localStorage['messageOrigin'];
	    	this.role			= window.localStorage['role'];

			return true;
		}
		return false;
	},

	getUserId:function(){
		return this.usersLogged.getCurrent().get("userId");
		//return "25";
	},

	getUserName:function(){
		return this.usersLogged.getCurrent().get("userName");
		// TODO a veces tira error y no se porque
		//return "seba";
	},

	getName:function(){
		return this.usersLogged.getCurrent().get("name");
		//return "1234";
	},

	getPassword:function(){
		return this.usersLogged.getCurrent().get("password");
		//return "1234";
	},
	logout:function(){
		App.country = undefined;
    	window.localStorage.removeItem("usersLogged");
    	window.localStorage.removeItem("countries");
    	window.localStorage.removeItem("messageOrigin");
    	window.localStorage.removeItem("role");
	}

//	getRole:function(){
//		return this.usersLogged.getCurrent().get("role");
//	},
//
//	getMessageOrigin:function(){
//		if(this.getRole() == Constants.ROLE_USER)
//			return Constants.MESSAGE_ORIGIN_USER;
//		else
//			return Constants.MESSAGE_ORIGIN_ADMINISTRATOR;
//	}

};