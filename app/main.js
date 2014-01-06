
document.addEventListener("deviceready", onDeviceReady, false);


$( document ).ready(function() {
	if(App.isEnvironmentWeb()) onDeviceReady();
});


function onDeviceReady() {

	// $(".ftr").click(function(){
	// 	alert("hola");
	// });
    hideArrow();

	loadTemplates( appTemplatesLoaded );

    ModelManager.updateAll();
    
	if(App.isEnvironmentWeb() == false){
		window.setTimeout(enableNotifications,10000);
	}

}

function appTemplatesLoaded() {

    $("body").empty();

    var homeView = new HomeView();

    //Setup the ViewNavigator
    window.viewNavigator = new ViewNavigator( 'body' );
    window.viewNavigator.pushView( homeView );
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
function hideArrow () {
    setTimeout(function(){$(".ftr").fadeOut("slow")},2500);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
