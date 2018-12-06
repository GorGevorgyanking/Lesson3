//console.log("hello Node");
/*var os = require("os");
var message = "the platform is ";

function main() {
    console.log(message + os.platform());

}
main();*/
var express =require("express");
var app = express();

app.get("/",function(req, res){
    res.send(" <h1>Hello world</h1>");
});

app.get("/name/:google/:search",function(req, res){
  
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
