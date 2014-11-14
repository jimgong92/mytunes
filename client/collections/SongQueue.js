// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function(){
      if(this.length===1){
        this.playFirst();
      }

    });

    this.on('remove', function(){
      if(this.length>0){
        this.playFirst();
      }
    });
  },

  enqueue: function(song){
    this.push(song);
    localStorage.setItem('queue',JSON.stringify(this));
  },

  dequeue: function(){
    this.shift();
    localStorage.setItem('queue',JSON.stringify(this));
  },

  playFirst: function(){
    this.at(0).play();
  },

  removeFromQueue: function(song) {
    this.remove(song, 'silent');
    localStorage.setItem('queue',JSON.stringify(this));
  }

});
