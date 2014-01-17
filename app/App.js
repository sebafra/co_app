window.App = {

	isEnvironmentWeb:function(){
		return true;
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
	
	userName:undefined,
	password:undefined,
	role:undefined,
	countries: undefined,
	
	saveUser:function(data){
		this.userName  = data.userName;
		this.password = data.password;
		this.role 	  = data.role;
	}
};