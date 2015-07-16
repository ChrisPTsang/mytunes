// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function(){
      if(this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      console.log(song);
      if(this.at(0) === song) {
        this.remove(song);
        if(this.length > 0) {
          this.playFirst();
        }
      } else {
        this.remove(song);
      }
      console.log(this.at(0));
    }, this);

    this.on('ended', function(song){
      this.model.upCount();
      this.shift();
      if(this.length > 0) {
        this.playFirst();
      }
    }, this);
   
  },


  playFirst: function(){
    // Triggering an event here will also trigger the event on the collection
    this.at(0).play();
  }


});