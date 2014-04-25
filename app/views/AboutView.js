templates.aboutView = "app/views/AboutView.html";

window.AboutView = Backbone.View.extend({

    title: "Acerca de",
    backLabel: "Volver",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
       // "click a":"openExternalLink"
       "click #termsLink":"loadTerms"
   },

   render:function (eventName) {
    this.$el.html(templates.aboutView);
    return this;
},

openExternalLink:function (event) {

   if ( !this.lastTimestamp || (new Date().getTime()-this.lastTimestamp) > 500) {

       var target = $( event.target );
       var href = target.attr("href");
       NativeUtil.openExternalURL( href );
   }

   this.lastTimestamp = new Date().getTime();
   event.stopPropagation();
   event.stopImmediatePropagation();
   event.preventDefault();
   event.cancelBubble();
   return false;
},
loadTerms:function () {
    var view = new  TermsView();
    ViewNavigatorUtil.pushView( view );
}
});