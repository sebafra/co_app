templates.listItemView = "app/views/ListItemView.html";
templates.listItemViewExtend = "app/views/ListItemViewExtend.html";
templates.listItemViewFeatured = "app/views/ListItemViewFeatured.html";
templates.listItemViewCronograma = "app/views/ListItemViewCronograma.html";
templates.listItemViewTempAccom = "app/views/ListItemViewTempAccom.html";

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
        } else if (this.model.listItemViewType=="featured") {
            this.template = _.template( templates.listItemViewFeatured );
        } else if (this.model.listItemViewType=="cronograma") {
            this.template = _.template( templates.listItemViewCronograma );
        } else if (this.model.listItemViewType=="temporaryAccommodation") {
            this.template = _.template( templates.listItemViewTempAccom );
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