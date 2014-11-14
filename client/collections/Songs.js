// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  initialize: function() {
    this.on('change', function() {
      localStorage.setItem('library',JSON.stringify(this));
    },this)
  },
  model: SongModel



});
