
document.addEventListener("deviceready", onDeviceReady, false);


$( document ).ready(function() {
	if(App.isEnvironmentWeb()) onDeviceReady();
});


function onDeviceReady() {

	$.ajaxSetup({ cache: false });

	detectDeviceInformation();	
    if ( isDeviceOSAndroid() ) {
    	if( isDeviceOSAndroidVersionOld() ) {
        	$('head').append('<link rel="stylesheet" href="assets/old_android_styles.css" type="text/css" />');
    	}
    } else {
       	$('head').append('<link rel="stylesheet" href="assets/ios_styles.css" type="text/css" />');
    }

	
	
	// $(".ftr").click(function(){
	// 	alert("hola");
	// });
    // hideArrow();

	if(!isDeviceOSAndroidVersionOld())
		onInputFocus();

	loadTemplates( appTemplatesLoaded );

    ModelManager.updateAll();

/*    try{
        document.addEventListener("hidekeyboard", onHide, false);
        document.addEventListener("showkeyboard", onShow, false);
    }catch(e){
    	alert(e.message);
    }
  */  
}

function onHide() 
{
	relocateMessageMessageExternal();
}

function onShow() 
{
	moveMessageMessageExternal();
}

function appTemplatesLoaded() {

    $("body").empty();

    var view = new LoginView();

    if(App.isUserPersisted()){
    	view = new HomeView({ model:{} });
    }

    
    //Setup the ViewNavigator
    window.viewNavigator = new ViewNavigator( 'body' );
    window.viewNavigator.pushView( view );
    document.addEventListener("backbutton", onBackKey, false);
}

function onBackKey( event ) {
    if ( window.viewNavigator.history.length > 1 ){
        event.preventDefault();
        window.viewNavigator.popView();
        return false;
    }
    navigator.app.exitApp();
}
// function hideArrow () {
//     setTimeout(function(){$(".ftr").fadeOut("slow")},2500);
// }

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

//Focus on inputs
function onInputFocus(){
/*      $(".form-group input").click(function(){
      $(this).scroll();
  });*/
}
function showHeader(){
        $(".viewNavigator_header").css("display","block");
        $(".viewNavigator_content").css("top","46");
};
function hideHeader(){
        $(".viewNavigator_header").css("display","none");
        $(".viewNavigator_content").css("top","0");
};

var device_os;
var device_os_version;
var device_model;

function detectDeviceInformation() {
	try{ 
		if (device.platform == 'android' || device.platform == 'Android') {
			device_os      		= "android";
			device_os_version 	= device.version;
			device_model   		= device.model;
		} else {
			device_os 			= "ios";
			device_os_version 	= "ios";
			device_model 		= "ios";
		}
	} catch(err) { 
		device_os 			= "ios";
		device_os_version 	= "ios";
        device_model 		= "ios";
	}
	
	console.log("========================="+device_os + "-" + device_os_version + "-" + device_model);
}

function isDeviceOSAndroid(){
	if(device_os){
		if(device_os == 'android'){
			return true;
		}
	}
	return false;
}

function isDeviceOSIos(){
	if(device_os){
		if(device_os == 'ios'){
			return true;
		}
	}
	return false;
}

function isDeviceOSAndroidVersionOld(){
	if(isDeviceOSAndroid()){
		if(parseInt(device_os_version.substring(0,1), 10) <= 3 ){
			return true;
		}
	}
	return false;
}
