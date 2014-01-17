templates.loginView = "app/views/LoginView.html";

window.LoginView = Backbone.View.extend({

    title: "Consorcio Digital",
    destructionPolicy:'never',
    backLabel: "Volver",

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

        this.inputEmail = this.$('#inputEmail');
        this.inputPhone = this.$('#inputPhone');
        this.inputPassword = this.$('#inputPassword');

        return this;
    },

    login:function () {
    	ServiceUser.login(this.inputEmail.val(),this.inputPassword.val(), this.loginOk, this.loginFail);
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