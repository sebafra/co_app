window.ModelManager = {

	type:{
		attraction:{
			code:"attraction",
			url:"/getAttractions",
			fileName:"attraction.json",
			folderName:"attraction",
			adScreen:"yes"
		},
		adScreen:{
			code:"adScreen",
			url:"/getAdScreens",
			fileName:"adScreen.json",
			folderName:"adScreen"
		}
	},
	setup:{
		attraction:{
			items: [
			{
				"type":"attraction",
				"name":"Santiago Bernardini",
				"date":"12 enero",
				"id":"1",
				"extendedView":"true",
				"listItemViewType":"extended",
				"subject":"Reclamo Expensas Febrero",
				"messageDate1":"12 enero 11:35",
				"message1":"Hola, quiero reclamar las expensas de Febrero que no me llegaron",
				"messageDate2":"12 enero 12:50",
				"message2":"Buenos días, chequeó en la guardia? es probable que la tengan ahi",
				"messageDate3":"13 enero 1:22",
				"message3":"Si, ya fuí y no la tienen",
				"messageDate4":"14 enero 9:20",
				"message4":"Hoy mismo se la alcanzo no se preocupe"
			},
			{
				"type":"attraction",
				"name":"Pedro Perez",
				"date":"14 enero",
				"id":"2",
				"extendedView":"true",
				"listItemViewType":"extended",
				"subject":"Reclamo Expensas Febrero",
				"messageDate1":"12 enero 11:35",
				"message1":"Hola, quiero reclamar las expensas de Febrero que no me llegaron",
				"messageDate2":"12 enero 12:50",
				"message2":"Buenos días, chequeó en la guardia? es probable que la tengan ahi",
				"messageDate3":"13 enero 1:22",
				"message3":"Si, ya fuí y no la tienen",
				"messageDate4":"14 enero 9:20",
				"message4":"Hoy mismo se la alcanzo no se preocupe"
			},
			{
				"type":"attraction",
				"name":"Juan Carlos Soria",
				"date":"15 enero",
				"id":"1",
				"extendedView":"true",
				"listItemViewType":"extended",
				"subject":"Reclamo Expensas Febrero",
				"messageDate1":"12 enero 11:35",
				"message1":"Hola, quiero reclamar las expensas de Febrero que no me llegaron",
				"messageDate2":"12 enero 12:50",
				"message2":"Buenos días, chequeó en la guardia? es probable que la tengan ahi",
				"messageDate3":"13 enero 1:22",
				"message3":"Si, ya fuí y no la tienen",
				"messageDate4":"14 enero 9:20",
				"message4":"Hoy mismo se la alcanzo no se preocupe"
			}
			],
			labelPlural: "Mensajes",
			labelSingular: "Mensaje",
			type: "attraction"
		},
		adScreen:{
			items: [
			{name:"adScreen1",id:"1", fileName:"3-fernet-listo2.png"}
			,{name:"adScreen2",id:"2", fileName:"12.png"}
			,{name:"adScreen3",id:"3", fileName:"23.png"}
			,{name:"adScreen4",id:"4", fileName:"diproach-180x180.jpg"}
			],
			labelPlural: "Publicidades de Pantalla",
			labelSingular: "Publicidad de pantalla",
			type: "adScreen"
		}
	},

	getDefinition:function (type) {

		if(type == this.type.attraction.code){
			return this.type.attraction;
		} else if(type == this.type.adScreen.code){
			return this.type.adScreen;
		}
		return;
	},

	getSetup:function (type) {

		if(type == this.type.attraction.code){
			return this.setup.attraction;
		} else if(type == this.type.adScreen.code){
			return this.setup.adScreen;
		}
		return;
	},


	urlBase:"http://www.diproach.com/api/dc",
	//urlBase:"http://localhost:8888/api/dc",

	getAll:function (type, successCallback, errorCallback) {

		var definition = this.getDefinition(type);

		if(App.isOnlineEnabled() == false){
			var setup = this.getSetup(type);
    		//successCallback(JSON.stringify(setup));
    		successCallback(setup);
    	} else {
    		JSonUtil.read(definition.fileName, successCallback, errorCallback);
    	}

    },


    getById:function (id, collection) {

    	for (var x=0; x < collection.length; x++) {
    		var item = collection[x];
    		if (item.id == id){
    			return item;
    		}
    	}
    	return null;
    },

    updateAll:function(){
    	if(App.isOnlineEnabled() == false) return;

    	_.each(this.type, function (item) {
    		this.update(item);
    	}, this);
    },

    update:function(item){

    	var setup = this.getSetup(item.code);

    	JSonUtil.exists(item.fileName,
    		function(){
    			// If exists update from server
    			ModelManager.updateFromServer(item);
    		},
    		function(){

				// If not exist create file with setup values
				JSonUtil.save(item.fileName, setup,
					function(){


						// If file was created we must try update from server
						ModelManager.updateFromServer(item);

					},
					function(){}
					);
			},
			function(){}
			);
    },

    updateFromServer:function(definition){

    	var loadUrl = this.urlBase + definition.url;

    	$.getJSON(loadUrl, function(result) {


    		var jsonString = JSON.stringify(result.data);
    		JSonUtil.save(definition.fileName, jsonString, function(){}, function(){} );

    	}).error(function(result) {
    	});

    }


};
