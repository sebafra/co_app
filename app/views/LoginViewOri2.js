templates.loginView = "app/views/LoginView.html";

window.LoginView = Backbone.View.extend({

    title: "Consorcio M&oacute;vil",
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #btnLogin":"login"
/*        	,
        "click #inputPhone":"clickInputPhone",
        "click #inputEmail":"clickInputEmail",
        "click #inputPassword":"clickInputPassword"*/
    },

    render:function (eventName) {
        var template = _.template(templates.loginView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));

        this.inputEmail 	= this.$('#inputEmail');
        this.inputPhone 	= this.$('#inputPhone');
        this.inputPassword 	= this.$('#inputPassword');
        this.selectRoles	= this.$("#roles");

        this.selectRoles.append("<option value=" + Constants.ROLE_USER + ">Consorcista</option>");
        this.selectRoles.append("<option value=" + Constants.ROLE_ADMINISTRATOR + ">Administrador</option>");

        return this;
    },

    clickInputPhone:function(){
    	this.$('#inputPhone').scroll();
    },

    clickInputEmail:function(){
    	this.$('#inputEmail').scroll();
    },

    clickInputPassword:function(){
    	this.$('#inputPassword').scroll();
    },

    login:function () {

    	App.role = this.selectRoles.val();
    	if(App.role == Constants.ROLE_USER)
			App.messageOrigin = Constants.MESSAGE_ORIGIN_USER;
		else
			App.messageOrigin = Constants.MESSAGE_ORIGIN_ADMINISTRATOR;

        var view = new LoadHomeView({ usuario:this.inputEmail.val(), phone:this.inputPhone.val(), password:this.inputPassword.val(), role:this.selectRoles.val() });
        window.ViewNavigatorUtil.pushView( view );

        this.inputPassword.val("");

    }

    ,

    showCallback: function(){
    	try{
    		showInputs();
    	}catch(e){
    	}
    }
    /*
    ,

    loginOk: function(data){

    	App.saveUser(data);
        var view = new LoadHomeView({ model:{} });
        window.ViewNavigatorUtil.pushView( view );

    },

    loginFail: function(message){
        var view = new MessageView({message:message});
        window.ViewNavigatorUtil.pushView( view );
    }*/
});






