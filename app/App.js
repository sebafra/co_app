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


//		this.usersLogged = new UserCollection;
//		try{
//			this.country = {
//					countryId:2
//				};
//        _.each(data.users, function (user) {
//        	this.usersLogged.create(user);
//
//        	alert(JSON.stringify(this.usersLogged.getCurrent()));
//        }, this);
//		}catch(e){alert(e.message)}



	/*
		this.userId    = data.userId;
		this.userName  = data.userName;
		this.password  = data.password;
		this.role 	   = data.role;
		if(this.role == Constants.ROLE_USER)
			this.messageOrigin = Constants.MESSAGE_ORIGIN_USER;
		else
			this.messageOrigin = Constants.MESSAGE_ORIGIN_ADMINISTRATOR;

			*/


	},

	getUserId:function(){
		return this.usersLogged.getCurrent().get("userId");
		//return "25";
	},

	getUserName:function(){
		return this.usersLogged.getCurrent().get("userName");
		//return "seba";
	},

	getName:function(){
		return this.usersLogged.getCurrent().get("name");
		//return "1234";
	},

	getPassword:function(){
		return this.usersLogged.getCurrent().get("password");
		//return "1234";
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