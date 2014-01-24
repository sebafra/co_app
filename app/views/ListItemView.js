templates.listItemView = "app/views/ListItemView.html";
templates.listItemViewExtend = "app/views/ListItemViewExtend.html";
templates.listItemViewBook = "app/views/ListItemViewBook.html";
templates.listItemViewVisit = "app/views/ListItemViewVisit.html";
templates.listItemViewDelivery = "app/views/ListItemViewDelivery.html";

window.ListItemView = Backbone.View.extend({

    tagName:'li',
    template:undefined,

    initialize: function(options) {

        // if (this.model.type==ModelManager.type.hotel.code) {
        //      this.template = _.template( templates.listItemViewExtend );
        // } else {
        //      this.template = _.template( templates.listItemView );
        // };
        if (this.model.listItemViewType==undefined) {
            this.template = _.template( templates.listItemView );
        } else if (this.model.listItemViewType=="simple") {
            this.template = _.template( templates.listItemView );
        } else if (this.model.listItemViewType=="list") {
            this.template = _.template( templates.listItemView );
       } else if (this.model.listItemViewType=="extended") {
            this.template = _.template( templates.listItemViewExtend );
        } else if (this.model.listItemViewType=="book") {
            this.template = _.template( templates.listItemViewBook );
        } else if (this.model.listItemViewType=="visit") {
            this.template = _.template( templates.listItemViewVisit );
        } else if (this.model.listItemViewType=="delivery") {
            this.template = _.template( templates.listItemViewDelivery );
        }
        this.render();
        this.view = this.$el;
    },

    events:{
    },

    render:function (eventName) {
        var model = this.model;
        this.$el.html( this.template( model ));
        this.$el.attr('id', model.id );
        // if((model.featured!=undefined) && (model.featured=="true")){
        //     this.$el.attr('class', 'itemFeatured' );
        // }
        return this;
    }
});