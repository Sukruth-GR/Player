class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("Real Car Racing");
        title.position(250,50);

        var input = createInput("Name");
        input.position(300,150);

        var button = createButton("Click here to Play");
        button.position(300,250);

        var greeting = createElement("h3");
        

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playercount = playercount+1;
            player.update(name);
            player.updateCount(playercount);

            greeting.html("Hello "+name+" Welcome to Real Car Racing");
            greeting.position(300,300);
        })
    }
}