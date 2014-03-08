templates.select = "app/views/SelectView.html";

window.SelectView = Backbone.View.extend({

    destructionPolicy:'never',
    title: "Consorcistas",
    backLabel: "Volver",
    selectType: undefined,

    initialize: function(options) {
    	this.selectType = options.selectType;
        this.render();
        this.view = this.$el;
    },

    events:{
        "click li":"listItemClick"
    },

    render:function (eventName) {
        var template = _.template(templates.select);
        var items = undefined;
        
        if(this.selectType == Constants.SELECT_TYPE_USERS){
        	this.title = Constants.SELECT_TYPE_USERS_TITLE;
        	items = App.users;
        } else if(this.selectType == Constants.SELECT_TYPE_COUNTRIES) {
        	this.title = Constants.SELECT_TYPE_COUNTRIES_TITLE;
        	items = App.countries;
        } else if(this.selectType == Constants.SELECT_TYPE_AMENITIES) {
        	this.title = Constants.SELECT_TYPE_AMENITIES_TITLE;
        	items = App.country.amenities;
        }

        this.$el.html(template( {items:items} ));
        var $list = this.$el.find("#list");
        
        _.each(items, function (item) {
            $list.append(new SelectItemView({model:item, selectType:this.selectType}).render().el);
        }, this);

        return this;
    },

    listItemClick: function( event ) {

        this.$el.find( "li" ).removeClass( "listSelected" );
        var target = $( event.target );
        while (target.get(0).nodeName.toUpperCase() != "LI") {
            target=target.parent();
        }

        target.addClass( "listSelected" );
        
        if(this.selectType == Constants.SELECT_TYPE_USERS)
        	App.userIdSelected = target.attr( "id" );
        else if(this.selectType == Constants.SELECT_TYPE_COUNTRIES)
        	App.countryIdSelected = target.attr( "id" );
        else if(this.selectType == Constants.SELECT_TYPE_AMENITIES)
        	App.amenityIdSelected = target.attr( "id" );
        
  	  	window.viewNavigator.popView( );

    }
});