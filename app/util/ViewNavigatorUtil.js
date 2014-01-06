ViewNavigatorUtil = {
	intent: 8,
	animationDuration: 800,
	times: 5,
	done: false,
	view:null,
	replaceView: function( view ){
		try{
			this.done = false;
			this.view = view;
			this.times = this.intent; 
			if(window.viewNavigator.animating){
				
		        var self = this;
		        this.onReplaceViewPerform = function(){
		            self.replaceViewPerform();
		        };
				setTimeout( self.onReplaceViewPerform , this.animationDuration );

			} else {
				this.done = true;
	    		window.viewNavigator.replaceView( this.view );
			}
		}catch(e){}
		
    },
    replaceViewPerform: function( ){
    	if(this.done) return;
		if(window.viewNavigator.animating){
			if(this.times > 0){
				
		        var self = this;
		        this.onReplaceViewPerform = function(){
		            self.replaceViewPerform();
		        };

		        this.times--;
		        setTimeout( self.onReplaceViewPerform , this.animationDuration );
			}
		} else {
			this.done = true;
			window.viewNavigator.replaceView( this.view );
		}
    },
    
	pushView: function( view ){
		this.done = false;
		this.view = view;
		this.times = this.intent; 

		try{
			if(window.viewNavigator.animating){

		        var self = this;
		        this.onPublishViewPerform = function(){
		            self.publishViewPerform();
		        };
				setTimeout( self.onPublishViewPerform , this.animationDuration );

			} else {
				this.done = true;
	    		window.viewNavigator.pushView( this.view );
			}
		}catch(e){}

	},
    pushViewPerform: function( ){
    	if(this.done){
    		return;
    	}
		if(window.viewNavigator.animating){
			if(times > 0){

				var self = this;
		        this.onPublishViewPerform = function(){
		            self.publishViewPerform();
		        };
		        
		        this.times--;
				setTimeout( self.onPublishViewPerform , this.animationDuration );
			}
		} else {
			this.done = true;
			window.viewNavigator.pushView( this.view );
		}
    }

}