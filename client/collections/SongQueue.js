// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    if(this.length > 1) {
      this.playFirst();
    }
  },

  playFirst: function(){
    // Triggering an event here will also trigger the event on the collection
    this.at(0).play();
  }


});