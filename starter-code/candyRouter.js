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

		var cleanCandies = JSON.stringify(candies);

//What would need to go into candies
//in order to pass our first test?

router.get('/candies', function(req,res) {
	res.json(candies);
	// What would go here? 
	// Hint: we want all candies in JSON format
});

router.get('/candies/:id', function(req, res){
	var candyId = req.params.id;
	res.json(candies[candyId - 1]);
 });

router.post('/', function(req, res){
		candies.push(req.body);
		res.json(req.body);
});

// Fill out the rest of the routes here

module.exports = router;