templates.messageView = "app/views/MessageView.html";

window.MessageView = Backbone.View.extend({

    title: "Consorcio M&oacute;vil",
    destructionPolicy:'never',
    message: "",
    backLabel: "Volver",

    initialize: function(options) {
    	this.message = options;

        this.render();
        this.view = this.$el;
    },

    events:{
    },

    render:function (eventName) {
        var template = _.template(templates.messageView);
        this.$el.html(template(this.message));

        return this;
    }

});