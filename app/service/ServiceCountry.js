window.ServiceCountry = {

    getByUser:function(success, fail){
    	
    	var json = {
    				userName:App.getUserName(),
    				userId:App.getUserId(),
    				role:App.role
    				};
    	
    	if(App.worksWithoutServer()){

        	var countries = {
    				countries:[
    				 	{
    				 		countryId:"1",
    				 		countryName:"c1",
    				 		countryAdministratorId:"1"
    				 	},
    				 	{
    				 		countryId:"2",
    				 		countryName:"c2",
    				 		countryAdministratorId:"1"
    				 	}
    				 ]
    				};

    		success(countries);
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
