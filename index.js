//console.log("hello Node");
/*var os = require("os");
var message = "the platform is ";

function main() {
    console.log(message + os.platform());

}
main();*/

////////////////////////////////////
/*var express =require("express");
var app = express();

app.get("/",function(req, res){
    res.send(" <h1>Hello world</h1>");
});
app.get("/google",function(req, res){
  
    res.redirect('http://google.com/');

});
app.get("/google/:search",function(req, res){
  
    res.redirect('http://google.com/search?q=search');

});
app.get("/name/:name/:surname",function(req, res){
    var n = req.params.name;
    var m = req.params.surname;
    res.send("<h1>Hello " +  n  +  " " + m + "</h1>");
  
});
app.get("/*",function(req, res){
    res.status(404).send('Sorry, we cannot find that!');
});

app.listen(3000, function(){
    console.log("Example is running on port 3000");
});
*/
///////////////////
/*
var express = require("express");
var app = express();

app.use(express.static("Programing_3"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});


*/

///////////////////////////////////////
/*
var Square = require("./module");
var mySquareObject = new Square(5);

function main() {
   console.log(mySquareObject.getArea());
}
main();


/////////////

var fs = require('fs');

function main(){
   var file  = "hello.txt";
   fs.appendFileSync(file, "Hello world\n");
}
main();
*/
/*
var fs = require('fs');

function main(){
   fs.writeFile("hello.txt", "Hello world\n", function(err){
       console.log("fs.writeFile ended");
   });
   console.log("fs.writeFile");
}
main();

*/
/*
var fs = require('fs');

function main() {
   fs.writeFileSync("hello.txt", "Hello world\n");
   console.log("fs.writeFile");
}
main();
*/

/*
var fs = require('fs');
var dummyText = "Apple yep";

function main() {
   fs.writeFileSync("dummytext.txt", dummyText);
   var text = fs.readFileSync("dummytext.txt").toString();
   console.log(dummyText == text);
   console.log(text);
   fs.writeFileSync("undummytext.txt",
       text.replace("Apple", "Microsoft")
   );
}
main();
  */  


var a = require("./fstests");
var fs = require('fs');


fs.writeFileSync("obj.json", a);

