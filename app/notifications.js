
var pushNotification;
var deviceSO;
var deviceVersion;
var deviceModel;
var lastAlert;

function enableNotifications() {
    
	try 
	{ 
    	pushNotification = window.plugins.pushNotification;
    	if (device.platform == 'android' || device.platform == 'Android') {
        	pushNotification.register(successHandler, errorHandler, {"senderID":"1012559635414","ecb":"onNotificationGCM"});		// required!
            deviceSO      = "android";
            deviceVersion = device.version;
            deviceModel   = device.model;
		} else {
        	pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});	// required!
            deviceSO = "ios";
            deviceVersion = "ios";
            deviceModel = "ios";
    	}
    }
	catch(err) 
	{ 
		
        pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});	// required!
        deviceSO = "ios";
        deviceVersion = "ios";
        deviceModel = "ios";
	}
}

// handle APNS notifications for iOS
function onNotificationAPN(e) {

    if (e.sound) {
        var snd = new Media(e.sound);
        snd.play();
    }
    
    if (e.badge) {
        alert(e.alert);
        pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
    }
    
    lastAlert = e.alert;
    if(e.messageId){
		if(canDrawNewMessage()){
			drawNewMessage(e.messageId);
		} else if (e.alert) {
            alert(e.alert);
            navigator.notification.alert(e.alert);
        }
    } else if (e.alert) {
        alert(e.alert);
        navigator.notification.alert(e.alert);
    }

}

// handle GCM notifications for Android
function onNotificationGCM(e) {
    console.log("========"+e.event);
    
    switch( e.event )
    {
        case 'registered':
		if ( e.regid.length > 0 )
		{
			// Your GCM push server needs to know the regID before it can push to this device
			// here is where you might want to send it the regID for later use.
			deviceRegister(e.regid);
		}
        break;
        
        case 'message':
        	// if this flag is set, this notification happened while we were in the foreground.
        	// you might want to play a sound to get the user's attention, throw up a dialog, etc.
        	if (e.foreground)
        	{
        		
				lastAlert = e.payload.message;

				var my_media = new Media("/android_asset/www/beep.wav");
				my_media.play();

				if(canDrawNewMessage()){
				    console.log("========Drawmessage");
					drawNewMessage(e.payload.messageId);
				} else {
					alert(e.payload.message);
				}
        		
			}
			/*else
			{	
				if (e.coldstart){
				} else {
				}
			}*/
				
        break;
        
        case 'error':
        break;
        
        default:
        break;
    }
}

function tokenHandler (result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.

    if(deviceSO == "ios")
        deviceRegister(result);
}

function successHandler (result) {
}

function errorHandler (error) {
}

var viewToDrawMessage = undefined;
function canDrawNewMessage(){
	if(window.viewNavigator.history.length > 1){
		try{
			viewToDrawMessage = window.viewNavigator.history[ window.viewNavigator.history.length - 1 ];
			if(viewToDrawMessage.receiveNewMessage){
				return true;
			}
		}catch(exc){
			return false
		}
	}
	return false;
}

function isRightConversation(messageIdParent){
	if(App.lastMessage.messageId == messageIdParent)
		return true;
	return false;
}

function drawNewMessage(messageId){
    console.log("========messageId:"+messageId);
	ServiceMessage.getById(messageId, drawNewMessageOk, drawNewMessageFail);
}

function drawNewMessageOk(data){
    console.log("========data:"+JSON.stringify( data));
	if(viewToDrawMessage){
		if((isRightConversation(data.messageIdParent)) && (data.messageTypeId == Constants.MESSAGE_TYPE_ID_MESSAGE)){
			viewToDrawMessage.receiveNewMessage(data);
		} else {
			alert(lastAlert);
		}
	}
}

function drawNewMessageFail(){
}


function deviceRegister (device) {
	
	if(deviceSO == undefined) 		deviceSO = "";
	if(deviceVersion == undefined) 	deviceVersion = "";
	if(deviceModel == undefined) 	deviceModel = "";
	
	var url = Constants.URL_BASE + "/device/register?json=%7Bdevice%3A%22" + device + "%22%2CapplicationId%3A%22COM%22%2CapplicationVersion%3A%221%22%2Cos%3A%22" + deviceSO + "%22%2CosVersion%3A%22" + deviceVersion + "%22%2Cmodel%3A%22" + deviceModel + "%22%2CuserId%3A%22" + App.getUserId() + "%22%2Crole%3A%22" + App.role + "%22%2CuserName%3A%22" + App.getUserName() + "%22%2Cpassword%3A%22" + App.getPassword() + "%22%7D";
	
	$.getJSON(url, function(result) {
	}).error(function(result) {
	});
}
        	
        	