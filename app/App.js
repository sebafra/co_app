window.App = {

	isEnvironmentWeb:function(){
		return true;
	},

	worksWithoutServer:function(){
		return true;
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

	userName:		undefined,
	userId:			undefined,
	password:		undefined,
	role:			undefined,
	messageOrigin:	undefined,
	countries: 		undefined,
	country:		undefined,
	countryId: 		undefined,
	messages: 		undefined,
	message: 		undefined,
	lastMessage: 	undefined,
	lastMessageRoot:undefined,

	saveUser:function(data){
		this.userId    = data.userId;
		this.userName  = data.userName;
		this.password  = data.password;
		this.role 	   = data.role;
		if(this.role == Constants.ROLE_USER)
			this.messageOrigin = Constants.MESSAGE_ORIGIN_USER;
		else
			this.messageOrigin = Constants.MESSAGE_ORIGIN_ADMINISTRATOR;
	}
};