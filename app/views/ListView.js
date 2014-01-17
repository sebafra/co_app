templates.list = "app/views/ListView.html";

window.ListView = Backbone.View.extend({

    destructionPolicy:'never',
    title: "List",
    backLabel: "Volver",

    initialize: function(options) {

        this.model = options.model;

        this.adScreenFileName = options.adScreenFileName;

        this.title = this.model.labelPlural;

        this.render();
        this.view = this.$el;
    },

    events:{
        "click li":"listItemClick"
    },

    render:function (eventName) {
        var template = _.template(templates.list);
        this.$el.css("background", "#333");
        this.$el.html(template( {labelPlural:this.model.labelPlural, items:this.model.items, adScreenFileName: this.adScreenFileName} ));
        var $list = this.$el.find("#list");

        _.each(this.model.items, function (item) {
            $list.append(new ListItemView({model:item}).render().el);
        }, this);

        this.headerActions = $("<div style='padding: 5px 5px;'><span class='ion-ios7-plus-outline'></span></div>");

        var self = this;
        this.headerActions.on( "click", function(event){
            self.headerButtonClick(event);
        } );

        return this;
    },

    listItemClick: function( event ) {

        this.$el.find( "li" ).removeClass( "listSelected" );
        var target = $( event.target );
        while (target.get(0).nodeName.toUpperCase() != "LI") {
            target=target.parent();
        }

        target.addClass( "listSelected" );
        var id = target.attr( "id" );
        var item = ModelManager.getById( id, this.model.items );
        //console.log( poi );
        //Detectamos si el item tiene vista ampliada, sino no tiene click
        if (item.listItemViewType!=undefined && item.listItemViewType=="list"){
            var view = new LoadItemsView({type:item.listCode});
            //window.viewNavigator.pushView( view );
            ViewNavigatorUtil.pushView( view );
        } else if (item.extendedView!=undefined && item.extendedView=="true") {
           var view = new LoadItemView({model:item, labelSingular:this.model.labelSingular});
           // var view = new ItemView({model:item, labelSingular:this.model.labelSingular});
           window.ViewNavigatorUtil.pushView( view );
        }




    },
    listItemClickOld: function( event ) {
        //console.log(event);

        this.$el.find( "li" ).removeClass( "listSelected" );
        var target = $( event.target );
        while (target.get(0).nodeName.toUpperCase() != "LI") {
            target=target.parent();
        }

        target.addClass( "listSelected" );
        var id = target.attr( "id" );
        var item = ModelManager.getById( id, this.model.items );
        //console.log( poi );

        var itemView = new ItemView({model:item, labelSingular:this.model.labelSingular});
        window.ViewNavigatorUtil.pushView( itemView );

    },
    headerButtonClick: function (event) {

        var view = new ItemViewNewConversation();
        window.viewNavigator.pushView( view );
    }
});