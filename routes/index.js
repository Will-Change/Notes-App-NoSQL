
var express = require('express');//requiring our express functionality
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});//get the top level directory of our website 
*/

/*router.get('/index1', function(req, res){
	res.render('index1',{});
});*/

//get userlist
router.get('/index1', function(req, res) {
    var db = req.db;
    var notes = db.get('notes');
    notes.find({},{},function(e,docs){
        res.render('index1', {
            "notes" : docs
		});//normal render
	});//using the connection to fill our docs variable
});//extracting the db object

//want to use usercollection, return result as variable docs, once we have em we do a render of userlist using it to pass our databse docs


/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });

});

router.post('/addnote', function(req, res) {

	var db = req.db;

	var Post = req.body.notetext;
	var Notes = db.get('notes');

	Notes.insert({
		"note" : Post
	}, function(err, doc){
		if (err) {
			res.send("problem with adding note to database.");
		}
		else {
			res.redirect("index1")
		}
	});
});

/*app.get('/index1', function(req, res){
    //get all orders
    notes.find({}, function(err, note){

        if(err) throw err;

         console.log('The orders '+note.length);
         res.send(note);
    });
});*/

router.post('/goback', function(req, res){
	res.redirect("index1")
});

module.exports = router;//exporting router back to our app
