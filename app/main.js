
document.addEventListener("deviceready", onDeviceReady, false);


$( document ).ready(function() {
	if(App.isEnvironmentWeb()) onDeviceReady();
});


function onDeviceReady() {

	$.ajaxSetup({ cache: false });

	// $(".ftr").click(function(){
	// 	alert("hola");
	// });
    // hideArrow();

    onInputFocus();

	loadTemplates( appTemplatesLoaded );

    ModelManager.updateAll();

	if(App.isEnvironmentWeb() == false){
		window.setTimeout(enableNotifications,10000);
	}

}

function appTemplatesLoaded() {

    $("body").empty();

    var loginView = new LoginView();

    //Setup the ViewNavigator
    window.viewNavigator = new ViewNavigator( 'body' );
    window.viewNavigator.pushView( loginView );
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
      $(".form-group input").click(function(){
      $(this).scroll();
  });
}
function showHeader(){
        $(".viewNavigator_header").css("display","block");
        $(".viewNavigator_content").css("top","46");
};
function hideHeader(){
        $(".viewNavigator_header").css("display","none");
        $(".viewNavigator_content").css("top","0");
};
