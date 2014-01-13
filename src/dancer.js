// Creates and returns a new dancer object that can step
  var Dancer = function(top, left, timeBetweenSteps){
    this.$node = $('<span class="dancer"></span>');
    this.$node.css({width: 50, height: 50});
    this.step();
    this.setPosition(top,left);
  };

  Dancer.prototype.step = function(){
    setTimeout(function(){
      this.step, timeBetweenSteps;
    });
  };

  Dancer.prototype.setPosition = function(top, left, timeBetweenSteps) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };