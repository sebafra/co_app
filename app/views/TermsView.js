templates.TermsView = "app/views/TermsView.html";

window.TermsView = Backbone.View.extend({

    title: "T&eacute;rminos",
    backLabel: "Volver",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
       // "click a":"openExternalLink"
    },

    render:function (eventName) {
        this.$el.html(templates.TermsView);
        return this;
    },

    openExternalLink:function (event) {

    	if ( !this.lastTimestamp || (new Date().getTime()-this.lastTimestamp) > 500) {

	        var target = $( event.target )
	        var href = target.attr("href");
	        NativeUtil.openExternalURL( href );
	    }

        this.lastTimestamp = new Date().getTime();
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
        event.cancelBubble();
        return false;
    }
});