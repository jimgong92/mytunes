// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',


  template: _.template('<td><button id="upvoteButton">u</button><button id="downvoteButton">d</button><%= votes %></td><td class="clickSong">(<%= artist %>)</td><td class="clickSong"><%= title %></td><td><%= playCount %></td>'),

  events: {
    'click .clickSong': function() {
      this.model.enqueue();
    },
    'click #upvoteButton': function(){
      this.model.upvote();
    },
    'click #downvoteButton': function(){
      this.model.downvote();
    },


  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
