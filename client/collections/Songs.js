// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

 model: SongModel,

  initialize: function() {
    this.on('change', function() {
      localStorage.setItem('library',JSON.stringify(this));
    },this);

  }






});
