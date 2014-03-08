templates.selectItemView = "app/views/SelectItemView.html";

window.SelectItemView = Backbone.View.extend({

    tagName:'li',
    template:undefined,

    initialize: function(options) {
    	this.selectType = options.selectType;
        this.template = _.template( templates.selectItemView );
        this.render();
        this.view = this.$el;
    },

    events:{
    },

    render:function (eventName) {
        var model = this.model;
        this.$el.html( this.template( model ));

        if(this.selectType == Constants.SELECT_TYPE_USERS)
            this.$el.attr('id', model.userId );
        else if(this.selectType == Constants.SELECT_TYPE_COUNTRIES)
            this.$el.attr('id', model.countryId );
        else if(this.selectType == Constants.SELECT_TYPE_AMENITIES)
            this.$el.attr('id', model.amenityId );

        // if((model.featured!=undefined) && (model.featured=="true")){
        //     this.$el.attr('class', 'itemFeatured' );
        // }
        return this;
    }
});