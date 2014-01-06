ViewNavigatorUtil = {
	intent: 5,
	animationDuration: 800,
	replaceView: function( view ){
		try{
			if(window.viewNavigator.animating){
				var func = this.replaceViewPerform(view, this.intent );
				setTimeout( func , this.animationDuration );
			} else {
	    		window.viewNavigator.replaceView( view );
			}
		}catch(e){alert("replaceView-"+e.message);}
		
    },
    replaceViewPerform: function( view , times){
    	return function() {
    		if(window.viewNavigator.animating){
    			if(times > 0){
    				var func = this.replaceViewPerform(view, times - 1 );
    				setTimeout( func , this.animationDuration );
    			}
    		} else {
    			window.viewNavigator.replaceView( view );
    		}
    	};
    },
	pushView: function( view ){
		try{
			if(window.viewNavigator.animating){
				var func = this.pushViewPerform(view, this.intent );
				setTimeout( func , this.animationDuration );
			} else {
	    		window.viewNavigator.pushView( view );
			}
		}catch(e){alert("pushView-"+e.message);}
    },
    pushViewPerform: function( view , times){
    	return function() {
    		if(window.viewNavigator.animating){
    			if(times > 0){
    				var func = this.pushViewPerform(view, times - 1 );
    				setTimeout( func , this.animationDuration );
    			}
    		} else {
    			window.viewNavigator.pushView( view );
    		}
    	};
    }

}