templates.loginView = "app/views/LoginView.html";

window.LoginView = Backbone.View.extend({

    title: "Consorcio M&oacute;vil",
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #btnLogin":"login",
    },

    render:function (eventName) {
        var template = _.template(templates.loginView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));

        this.inputEmail 	= this.$('#inputEmail');
        this.inputPhone 	= this.$('#inputPhone');
        this.inputPassword 	= this.$('#inputPassword');
        this.selectRoles	= this.$("#roles");
        
        this.selectRoles.append("<option value=" + Constants.ROLE_ADMINISTRATOR + ">Administrador</option>");
        this.selectRoles.append("<option value=" + Constants.ROLE_USER + ">Consorcista</option>");

        return this;
    },

    login:function () {
        var view = new LoadHomeView({ usuario:this.inputEmail.val(), password:this.inputPassword.val(), role:this.selectRoles.val() });
        window.ViewNavigatorUtil.pushView( view );

//    	ServiceUser.login(this.inputEmail.val(),this.inputPassword.val(), this.loginOk, this.loginFail);
    },

    loginOk: function(data){
    	App.saveUser(data);
        var view = new LoadHomeView({ model:{} });
        window.ViewNavigatorUtil.pushView( view );

    },

    loginFail: function(message){
        var view = new MessageView({message:message});
        window.ViewNavigatorUtil.pushView( view );
    }
});