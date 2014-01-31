var User = Backbone.Model.extend({});

var Users = Backbone.Collection.extend({

    model: User,

    getCurrent: function() {
    	
      return this.where({done: true});
    }

  });



