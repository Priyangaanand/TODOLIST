const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
const itemsof = [];
const workItem =[];
app.get("/", function(req, res)
{
  day = date.getDate();
  res.render("list",{listTitle:day , newItems:itemsof} );
});
app.post("/" ,function(req,res)
{
    const item = req.body.newItem;
    if (req.body.list === "Work")
    {
        workItem.push(item)
        res.redirect("/work");
    }
    else
    {
        itemsof.push(item);
        res.redirect("/");
    }
    
});

app.get("/work", function(req,res)
{
    res.render("list",{listTitle:"Work List ", newItems:workItem});
});
app.listen(3000,function(){

    console.log("Server is up and running"); 
});



