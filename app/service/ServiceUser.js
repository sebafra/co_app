window.ServiceUser = {

    login:function(role, userName, password, loginOk, loginFail){

		var json = {
					userName:userName,
    				password:password,
    				role:role
    				};
    	
    	if(App.worksWithoutServer()){
    		loginOk(json);
    		return;
    	}
    	
    	var url = Constants.URL_BASE + "/user/login?json=" + JSON.stringify(json);

    	$.getJSON(url, function(result) {
    		
    		if(result.status == Constants.JSON_RESPONSE_STATUS_OK){
        		loginOk(result.data);
    		} else {
        		loginFail(result.error.message);
    		}
    		
    	}).error(function(result) {
    		loginFail(Constants.LOGIN_ERROR_MESSAGE_GENERIC);
    	});

    }


};
