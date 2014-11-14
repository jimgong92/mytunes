// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('id',this.get('url'));
  },

  defaults: {
    playCount : 0,
    votes: 0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playCount',this.get('playCount')+1);
  },

  enqueue: function(){
    this.trigger('enqueue',this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  remove: function() {
    this.trigger('removeFromQueue', this);
  },

  upvote: function() {
    this.set('votes', this.get('votes') + 1);
  },
  downvote: function() {
    this.set('votes', this.get('votes') - 1);
  }
});
