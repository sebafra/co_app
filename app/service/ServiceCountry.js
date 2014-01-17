window.ServiceCountry = {

    getByUser:function(success, fail){

    	var json = {
    				usuario:App.usuario
    				};
    	
    	if(App.worksWithoutServer()){

        	var countries = {
    				countries:[
    				 	{
    				 		id:"1",
    				 		nombre:"c1"
    				 	},
    				 	{
    				 		id:"2",
    				 		nombre:"c2"
    				 	}
    				 ]
    				};

    		success(countries);
    		//fail("countries");
    		return;
    	}
    	
    	var url = Constants.URL_BASE + "/country/getByUser?json=" + JSON.stringify(json);

    	$.getJSON(url, function(result) {
    		
    		if(result.status == Constants.JSON_RESPONSE_STATUS_OK){
        		success(result.data);
    		} else {
        		fail(result.error.message);
    		}
    		
    	}).error(function(result) {
    		fail(Constants.LOGIN_ERROR_MESSAGE_GENERIC);
    	});

    }


};
