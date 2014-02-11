window.ServiceMessage = {

	    getByUserByCountry:function(success, fail){

	    	var json = {
	    				userId: App.getUserId(),
	    				countryId:App.country.countryId,
	    				role: App.role,
	    				messageTypeId: App.messageTypeId
	    				};
	    	
	    	if(App.worksWithoutServer()){

	        	var messages = {
	    				messages:[
	    				 	{
	    				 		messageId:"1",
	    				 		messageSubject:"subject 1",
	    				 		messageUserName:"usuario 1",
	    				 		messageDate:"1/12/2014",
	    				 		messageMessage:"mesnaje 1",
	       				 		messageOrigin:Constants.MESSAGE_ORIGIN_USER,
	    				 	},
	    				 	{
	    				 		messageId:"2",
	    				 		messageSubject:"subject 2",
	    				 		messageUserName:"usuario 2",
	    				 		messageDate:"2/12/2014",
	    				 		messageMessage:"mesnaje 2"
	    				 	}
	    				 ]
	    				};

	    		success(messages);
	    		return;
	    	}
	    	
	    	var url = Constants.URL_BASE + "/message/getByUserByCountryByRole?json=" + JSON.stringify(json);

	    	$.getJSON(url, function(result) {
	    		
	    		if(result.status == Constants.JSON_RESPONSE_STATUS_OK){
	        		success(result.data);
	    		} else {
	        		fail(result.error.message);
	    		}
	    		
	    	}).error(function(result) {
	    		fail(Constants.LOGIN_ERROR_MESSAGE_GENERIC);
	    	});

	    },

    getById:function(messageId, success, fail){

   	
    	var json = {
    				messageId: messageId
    				};
    	
    	var url = Constants.URL_BASE + "/message/getById?json=" + JSON.stringify(json);

    	$.getJSON(url, function(result) {
    		
    		if(result.status == Constants.JSON_RESPONSE_STATUS_OK){
        		success(result.data);
    		} else {
        		fail(result.error.message);
    		}
    		
    	}).error(function(result) {
    		fail(Constants.LOGIN_ERROR_MESSAGE_GENERIC);
    	});

    },

    register:function(success, fail, messageMessage, messageSubject, messageIdParent, userId, messageDateFrom, messageDateTo){

    	var self = this;
    	
    	if(App.worksWithoutServer()){

        	var message = {
    				 		messageId:"1"
    				 	  };

    		success(message);
    		return;
    	}
    	
    	
    	var json = {
    			messageSubject: messageSubject,
    			messageMessage:messageMessage,
    			messageOrigin: App.messageOrigin,
    			messageCountryId: App.country.countryId,
    			messageAdministratorId: App.country.countryAdministratorId,
    			messageUserId:userId,
    			messageIdParent:messageIdParent,
    			messageAnswered:Constants.MESSAGE_ANSWERED_YES,
    			messageTypeId:App.messageTypeId,
    			messageUserName:App.getName(),
    			messageDateFrom:messageDateFrom,
    			messageDateTo:messageDateTo
    	};
	

    	var url = Constants.URL_BASE + "/message/register?json=" + JSON.stringify(json);

    	$.getJSON(url, function(result) {
    		
    		if(result.status == Constants.JSON_RESPONSE_STATUS_OK){
        		success(result.data);

        		if(result.data.messageIdParent == undefined){
            		App.messages.push(result.data);
        		} else {
            		var message = ServiceMessage.getLastMessage(App.lastMessageRoot);
            		message["messages"] = [result.data];
        		}

    		} else {
        		fail(result.error.message);
    		}
    		
    	}).error(function(result) {
    		fail(Constants.LOGIN_ERROR_MESSAGE_GENERIC);
    	});

    },

    receive:function(messageMessage, messageSubject, messageIdParent, success, fail){

    	var self = this;
    	
    	if(App.worksWithoutServer()){

        	var message = {
    				 		messageId:"1"
    				 	  };

    		success(message);
    		return;
    	}
    	
    	var json = {
    			messageSubject: messageSubject,
    			messageMessage:messageMessage,
    			messageOrigin: App.messageOrigin,
    			messageCountryId: App.country.countryId,
    			messageAdministratorId: App.country.countryAdministratorId,
    			messageUserId:App.getUserId(),
    			messageIdParent:messageIdParent,
    			messageAnswered:Constants.MESSAGE_ANSWERED_YES,
    			messageTypeId:Constants.MESSAGE_TYPE_ID_MESSAGE
    	};
	

    	var url = Constants.URL_BASE + "/message/register?json=" + JSON.stringify(json);

    	$.getJSON(url, function(result) {
    		
    		if(result.status == Constants.JSON_RESPONSE_STATUS_OK){
        		success(result.data);

        		if(result.data.messageIdParent == undefined){
            		App.messages.push(result.data);
        		} else {
            		var message = ServiceMessage.getLastMessage(App.lastMessageRoot);
            		message["messages"] = [result.data];
        		}

    		} else {
        		fail(result.error.message);
    		}
    		
    	}).error(function(result) {
    		fail(Constants.LOGIN_ERROR_MESSAGE_GENERIC);
    	});

    },

    getLastMessage:function(message){
    	if(message.messages == undefined) return message;
    	return ServiceMessage.getLastMessage(message.messages[0]);
    },
    
    registerOld:function(messageMessage, lastMessage, success, fail){

    	if(App.worksWithoutServer()){

        	var message = {
    				 		messageId:"1"
    				 	  };

    		success(message);
    		return;
    	}
    	
    	var json = {
    			messageSubject: lastMessage.messageSubject,
    			messageMessage:messageMessage,
    			messageOrigin: App.messageOrigin,
    			messageCountryId: App.country.countryId,
    			messageAdministratorId: App.country.countryAdministratorId,
    			messageUserId:App.getUserId(),
    			messageIdParent:lastMessage.messageId,
    			messageAnswered:Constants.MESSAGE_ANSWERED_YES,
    			messageTypeId:Constants.MESSAGE_TYPE_ID_MESSAGE
    	};
	

    	var url = Constants.URL_BASE + "/message/register?json=" + JSON.stringify(json);

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
