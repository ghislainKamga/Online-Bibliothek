const express = require("express"); 
const router = express.Router(); 
const buch = require("../models/Books");
 const book = buch.Books; 
router.get("/", function(req, res){
res.render("Startseite");
});

router.get("/Buchanlegen", function(req, res){
    res.render("Buchanlegen");
    });
router.get("/Detailseite", function(req, res){
    let buchfeld1 = [] ; 
        res.render("Detailseite", {buchfeld : buchfeld1});
        
     });
router.post("/Buchanlegen", function(req, res){
     
        book.push(new buch.Buch(req.body.buchtitel, req.body.buchautor, 
           req.body.buchherausgeber, req.body.buchjahr, req.body.buchumfang, 
           req.body.buchISBN, req.body.buchstatus,req.body.buchsprache, 
           req.body.buchbeschreibung));
       
           res.render("Detailseite", { buchfeld : book } ); 
        });

 router.get("/Listenseite", function(req, res){
    res.render("Listenseite");
 });

router.get("*", (req, res) => {
    res.render("failure");
}); 

module.exports = router; 