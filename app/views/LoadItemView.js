templates.loadItemView = "app/views/LoadItemView.html";

window.LoadItemView = Backbone.View.extend({

    title: "Cargando...",

    initialize: function(options) {

        this.render();
        this.view = this.$el;

        this.model = options.model;
        this.labelSingular = options.labelSingular;

        var self = this;

        this.onLoadItemResult = function(){
            self.loadItemResult();
        };

        
        //delay long enough for transition to complete
        //setTimeout(this.loadItemResult, 401 );
        setTimeout(function(){self.onLoadItemResult();}, 401 );

    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.loadItemView);

        this.$el.css("height", "100%");
        return this;
    },

    loadItemResult: function(model, labelSingular) {

    	
    	var view = new ItemView({model:this.model, labelSingular:this.labelSingular});
        window.ViewNavigatorUtil.replaceView( view );
    	

    }
});