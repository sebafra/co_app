templates.conversationsView = "app/views/ConversationsView.html";

window.ConversationsView = Backbone.View.extend({

    destructionPolicy:'never',
    title: "List",
    backLabel: "Volver",

    initialize: function(options) {

        this.title = "Conversaciones";

        this.render();
        this.view = this.$el;
    },

    events:{
        "click li":"listItemClick"
    },

    render:function (eventName) {
//        var template = _.template(templates.conversationsView);
//        // this.$el.css("background", "#333");
//        this.$el.html(template( {conversations:App.messages} ));
//        var $list = this.$el.find("#list");
//
//        _.each(App.messages, function (message) {
//            $list.append(new ConversationsItemView({conversation:message}).render().el);
//        }, this);
//
        this.headerActions = $("<div style='padding: 5px 5px;'><span class='ion-ios7-plus-outline'></span></div>");
//
//        var self = this;
//        this.headerActions.on( "click", function(event){
//            self.headerButtonClick(event);
//        } );

        return this;
    },

    showCallback:function(){

        var template = _.template(templates.conversationsView);
        // this.$el.css("background", "#333");
        this.$el.html(template( {conversations:App.messages} ));
        var $list = this.$el.find("#list");

        _.each(App.messages, function (message) {
            $list.append(new ConversationsItemView({conversation:message}).render().el);
        }, this);

        var self = this;
        this.headerActions.on( "click", function(event){
            self.headerButtonClick(event);
        } );
    },
    
    listItemClick: function( event ) {

        this.$el.find( "li" ).removeClass( "listSelected" );
        var target = $( event.target );
        while (target.get(0).nodeName.toUpperCase() != "LI") {
            target=target.parent();
        }

        target.addClass( "listSelected" );
        var id = target.attr( "id" );
        var item = this.getItemById( id , App.messages );

       var view = new ConversationView({message:item});
       window.ViewNavigatorUtil.replaceView( view );

    },
    headerButtonClick: function (event) {
        var view = new ConversationNewView();
        window.viewNavigator.replaceView( view );
    },
    getItemById:function (id, collection) {

    	for (var x=0; x < collection.length; x++) {
    		var item = collection[x];
    		if (item.messageId == id){
    			return item;
    		}
    	}
    	return null;
    }    
});