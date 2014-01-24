templates.itemView = "app/views/ItemView.html";

window.ItemView = Backbone.View.extend({

    template:undefined,
    backLabel: "Volver",
    // backLabel: "<span class='icon ion-location'></span>",
    title:"",

    initialize: function(options) {

//        this.model = options.model;
        this.model = options;
        this.title = options.labelSingular;
        this.template = _.template( templates.itemView );
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #btn-language-es":"changeLanguageSpanish",
        "click #btn-language-en":"changeLanguageEnglish"
    },

    changeLanguageSpanish:function () {
    	App.setLanguageSpanish();
    	this.reload();
    },
    // función cuando se ejecuta el botón volver
    backCallback:function () {
    $(".ftr").css("display","none");
    },

    changeLanguageEnglish:function () {
    	App.setLanguageEnglish();
    	this.reload();
    },

    reload:function () {
        var view = new LoadItemView({model:this.model.model, labelSingular:this.title});
        window.ViewNavigatorUtil.replaceView( view );
    },

    render:function (eventName) {
        var model = this.model;
        this.$el.html( this.template( model ));
//        this.$el.css("background", "white");

        return this;
    }
});