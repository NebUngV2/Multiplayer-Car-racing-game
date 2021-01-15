class Form {
    constructor() {

    }
  display(){
      var title = createElement('h2')
      title.html("CAR RACING GAME")
      title.position(130, 0);

      var input = createInput("name");
      input.position(160, 160);

      var button = createButton('play');
      button.position(230, 200);

      button.mousePressed(function(){
          input.hide()
              button.hide()
              var name = input.value()
              playerCount=playerCount+1
              player.update(name);
              player.updateCount(playerCount);
          var greeting = createElement('h3');
          greeting.html("Hello "+name);
          greeting.position(170, 160);
      })
  }
}