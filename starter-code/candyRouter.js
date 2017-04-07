var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
		{"id": 1, 
		"name": "Reeses",
		"color": "chocolate" 
		},
		{"id": 2, 
		"name": "Skittles",
		"color": "rainbow"
		},
		{
		"id": 3, 
		"name": "Twizzlers",
		"color": "red"
		},
		{
		"id": 4, 
		"name": "Mounds",
		"color": "brown"
		}];

//What would need to go into candies
//in order to pass our first test?
console.log("test");
router.get('/candies', function(req,res) {
	res.json(candies);
	// What would go here? 
	// Hint: we want all candies in JSON format
});

console.log("test1");
router.get('/candies/:id', function(req, res){
	var candyId = req.params.id;
	res.json(candies[candyId - 1]);
	console.log("get");
 });
console.log("test2");

router.post('/candies', function(req, res){
		candies.push(req.body);
		console.log(req.body);
		res.json(req.body);
});

console.log("test3");
router.put('/candies/:id', function(req, res){
		candies[req.params.id-1] = req.body;
		console.log(req.body);
		console.log(req.params.id);
		res.json(req.body);

		// res.end();
});
console.log("test4");
router.delete('/candies/:id',function(req, res){
		// if(candies[req.params.id-1] == req.params.id) 
		delete candies[req.params.id-1];

		res.json("message: deleted");
});

// Fill out the rest of the routes here

module.exports = router;