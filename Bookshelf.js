var books = [
{title: "The Giver", author: "Some Dude", stars: 3}, 
{title: "The Meme", author: "Anees A.", stars: 5}, 
{title: "The Bad Titles", author: "Anonymous", stars: 1} 
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, 401, 10);

    // draw one book
    fill(214, 255, 219);
    rect(10, 20, 90, 100);
    
    fill(0, 0, 0);
    text(books[0].title, 15, 29, 70, 100);
    
    for (var j = 0; j < books[0].stars; j++) {
    image(getImage("cute/Star"), 13 + j*20, 90, 20, 30);}
    
    fill(0, 0, 0);
    text(books[0].author, 13, 73, 95, 15);
    
    
    // draw second book
    fill(255, 0, 0);
    rect(154, 20, 90, 100);
    
    fill(0, 0, 0);
    text(books[1].title, 160, 29, 70, 100);
    
    for (j = 0; j < books[1].stars; j++) {
    image(getImage("cute/Star"), 153 + j*17, 91, 20, 30);}
    
    fill(0, 0, 0);
    text(books[1].author, 160, 73, 95, 15);
    
    
    // draw third book
    fill(242, 70, 196);
    rect(280, 20, 90, 100);
    
    fill(0, 0, 0);
    text(books[2].title, 288, 29, 70, 100);
    
    for (j = 0; j < books[2].stars; j++) {
    image(getImage("cute/Star"), 284 + j*51, 91, 20, 30);}
    
    fill(0, 0, 0);
    text(books[2].author, 286, 73, 95, 15);
    
    //----------------------------------------------
    
    // draw shelf
fill(173, 117, 33);
rect(0, 274, 401, 10);

    // draw one book
    fill(0, 63, 252);
    rect(10, 174, 90, 100);
    
    fill(0, 0, 0);
    text(books[0].title + " 2", 15, 184, 70, 100);
    
    for (var j = 0; j < books[0].stars - 1; j++) {
    image(getImage("cute/Star"), 13 + j*20, 242, 20, 30);}
    
    fill(0, 0, 0);
    text(books[0].author + " 2", 13, 227, 95, 15);
    
    
    // draw second book
    fill(255, 179, 0);
    rect(154, 174, 90, 100);
    
    fill(0, 0, 0);
    text(books[1].title + " 4", 160, 185, 70, 100);
    
    for (j = 0; j < books[1].stars + 2; j++) {
    image(getImage("cute/Star"), 153 + j*12, 243, 20, 30);}
    
    fill(0, 0, 0);
    text(books[1].author, 160, 227, 95, 15);
    
    
    // draw third book
    fill(120, 104, 0);
    rect(280, 174, 90, 100);
    
    fill(0, 0, 0);
    text(books[2].title, 288, 184, 70, 100);
    
    for (j = 0; j < books[2].stars; j++) {
    image(getImage("cute/Star"), 284 + j*51, 243, 20, 30);}
    
    fill(0, 0, 0);
    text(books[2].author, 286, 227, 95, 15);
