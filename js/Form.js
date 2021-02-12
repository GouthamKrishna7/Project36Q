class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Give Name To Pet"); 
        title.position(920, 100); 
        var input = createInput(" "); 
        var button = createButton('Enter'); 
        var greeting = createElement('h2');
        input.position(920, 150); 
        button.position(970, 190);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            greeting.html("Pet's Name : "+name);
            greeting.position(940, 100) 
         });
      
    }
}