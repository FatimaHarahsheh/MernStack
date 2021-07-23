//1
var hello ;
console.log(hello); 
 hello = 'world';                                 
/*output
undefined
*/
//2
var needle;
function test(){
    var needle ;
    needle = 'magnet'
   
   console.log(needle);
   
}

needle = 'haystack';
test();

/*output
"magnet"
*/


//3
var brendan;
function print(){
    var brendan = 'only okay';
    console.log(brendan);
}
 brendan = 'super cool';
console.log(brendan);

/*output
 "super cool"
*/


//4
var food ;
function eat(){
  var  food = 'half-chicken';
    console.log(food);
     var food;
     food = 'gone';
}
food="chicken";
console.log(food);
eat();
/*output
"chicken"
"half-chicken"
*/

//5
var mean;
var food;
mean(); 
console.log(food); 
mean = function(){
    var food="chicken";
    console.log(food); 
    food="fish";
    console.log(food);
}
console.log(food);

/*output
"<a class='gotoLine' href='#43:1'>43:1</a> Uncaught TypeError: mean is not a function"
*/

//6
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}

console.log(genre) ;
genre="disco";
rewind();
console.log(genre) ;

/*output
undefined
"rock"
"r&amp;b"
"disco"
*/

//7
var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
     dojo = "burbank";
    console.log(dojo);
}

dojo = "san jose" ;
console.log(dojo);
learn();
console.log(dojo);
/*output
"san jose"
"san jose"
"seattle"
"burbank"
*/
//8
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

/*
"<a class='gotoLine' href='#49:14'>49:14</a> Uncaught TypeError: Assignment to constant variable."
*/