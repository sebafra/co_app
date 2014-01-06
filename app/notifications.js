var pushNotification;
var deviceSO;

function enableNotifications() {
//    alert('start the notifications!!!');
    
	try 
	{ 
    	pushNotification = window.plugins.pushNotification;
    	if (device.platform == 'android' || device.platform == 'Android') {
//			alert('registering android');
        	pushNotification.register(successHandler, errorHandler, {"senderID":"375490732716","ecb":"onNotificationGCM"});		// required!
            deviceSO = "android";
		} else {
//			alert('registering iOS');
        	pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});	// required!
            deviceSO = "ios";
    	}
    }
	catch(err) 
	{ 
        pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});	// required!
        deviceSO = "ios";
	}
}

// handle APNS notifications for iOS
function onNotificationAPN(e) {
    if (e.alert) {
         alert(e.alert);
         navigator.notification.alert(e.alert);
    }
        
    if (e.sound) {
        var snd = new Media(e.sound);
        snd.play();
    }
    
    if (e.badge) {
        alert(e.alert);
        pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
    }
}

// handle GCM notifications for Android
function onNotificationGCM(e) {
//    alert('EVENT -> RECEIVED:' + e.event);
    
    switch( e.event )
    {
        case 'registered':
		if ( e.regid.length > 0 )
		{
//			alert('REGISTERED -> REGID:' + e.regid);
			// Your GCM push server needs to know the regID before it can push to this device
			// here is where you might want to send it the regID for later use.
//			alert("regID = " + e.regid);
			deviceRegister(e.regid);
		}
        break;
        
        case 'message':
        	// if this flag is set, this notification happened while we were in the foreground.
        	// you might want to play a sound to get the user's attention, throw up a dialog, etc.
        	if (e.foreground)
        	{
//				alert('<li>--INLINE NOTIFICATION--' + '</li>');
				
				// if the notification contains a soundname, play it.
				var my_media = new Media("/android_asset/www/"+e.soundname);
				my_media.play();
			}
			else
			{	// otherwise we were launched because the user touched a notification in the notification tray.
//				if (e.coldstart)
//					alert('<li>--COLDSTART NOTIFICATION--' + '</li>');
//				else
//					alert('<li>--BACKGROUND NOTIFICATION--' + '</li>');
			}
				
        	alert(e.payload.message);
//        	alert('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
        break;
        
        case 'error':
//        	alert('<li>ERROR -> MSG:' + e.msg + '</li>');
        break;
        
        default:
//        	alert('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
        break;
    }
}

function tokenHandler (result) {
//	alert('<li>token: '+ result +'</li>');
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.

    if(deviceSO == "ios")
        deviceRegister(result);
}

function successHandler (result) {
//	alert('<li>success:'+ result +'</li>');
}

function errorHandler (error) {
//	alert('<li>error:'+ error +'</li>');
}


function deviceRegister (device) {
	var url = "http://www.diproach.com/api/dc/device/register?json=%7Bdevice%3A%22" + device + "%22%2CapplicationId%3D%22JMETM%22%7D";

	$.getJSON(url, function(result) {

//		alert(JSON.stringify(result.data));
	}).error(function(result) {
//		alert(result);
	});
}