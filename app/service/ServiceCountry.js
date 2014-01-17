window.ServiceCountry = {

    getByUser:function(success, fail){

    	var json = {
    				userName:App.userName
    				};
    	
    	if(App.worksWithoutServer()){

        	var countries = {
    				countries:[
    				 	{
    				 		id:"1",
    				 		name:"c1"
    				 	},
    				 	{
    				 		id:"2",
    				 		name:"c2"
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