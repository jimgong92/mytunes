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
  },
  dequeue: function(){
    this.shift();
  },

  playFirst: function(){
    this.at(0).play();
  }

});
