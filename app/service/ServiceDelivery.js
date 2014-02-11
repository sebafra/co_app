window.ServiceDelivery = {

    getByCountry:function(success, fail){
    	
    	var json = {
    				countryId:App.country.countryId
    				};
    	
    	if(App.worksWithoutServer()){

        	var deliveries = {};

    		success(deliveries);
    		return;
    	}
    	
    	var url = Constants.URL_BASE + "/delivery/getByCountry?json=" + JSON.stringify(json);

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
