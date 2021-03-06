// Mobile & OS Detection from: http://jimbergman.net/detecting-os-version-of-ios-and-android-in-the-browser/

///////////////// How to Use it /////////////////////////////////////////////
// if ( mobileOS === 'iOS' && Number( mobileOSver.charAt(0) ) >= 5 ) { ... }
/////////////////////////////////////////////////////////////////////////////


var mobileOS;    // will either be iOS, Android or unknown
var mobileOSver; // this is a string, use Number(mobileOSver) to convert

function getOS( )
{
  var ua = navigator.userAgent;
  var uaindex;

  // determine OS
  if ( ua.match(/iPad/i) || ua.match(/iPhone/i) )
  {
    mobileOS = 'iOS';
    uaindex  = ua.indexOf( 'OS ' );
  }
  else if ( ua.match(/Android/i) )
  {
    mobileOS = 'Android';
    uaindex  = ua.indexOf( 'Android ' );
  }
  else
  {
    mobileOS = 'unknown';
  }

  // determine version
  if ( mobileOS === 'iOS'  &&  uaindex > -1 )
  {
    mobileOSver = ua.substr( uaindex + 3, 3 ).replace( '_', '.' );
  }
  else if ( mobileOS === 'Android'  &&  uaindex > -1 )
  {
    mobileOSver = ua.substr( uaindex + 8, 3 );
  }
  else
  {
    mobileOSver = 'unknown';
  }
}