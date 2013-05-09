var express = require('express');
var app = express();

var cards =  
[
    {
        "id" : 1, 
        "amount" : 50
    },
    {
        "id" : 2, 
        "amount" : 30 
    }
];

app.get('/create_card', function(req, res){
	cards.push({"id":req.query.id, "amount": req.query.amount});
	for(var c in cards){
		console.log(cards[c]);
	}
  res.send('Transaction Succesful');
});

app.get('/save_money', function(req, res){
	for(var c in cards){
		if(cards[c].id === parseFloat(req.query.id)){	
			cards[c].amount += parseFloat(req.query.amount);
		}
	}	
  res.send('Transaction Succesful');
});

app.get('/charge_card', function(req, res){
  	for(var c in cards){
		if(cards[c].id === parseFloat(req.query.id)){	
			cards[c].amount -= 1.25;
		}
	}

 	for(var c in cards){
		if(cards[c].id === parseFloat(req.query.id)){	
			console.log(cards[c]);
		}
	}
  res.send('Transaction Succesful');
});

app.get('/amount_saved', function(req, res){
	var temp_card = {};
   	for(var c in cards){
		if(cards[c].id === parseFloat(req.query.id)){	
			temp_card = cards[c];
		}
	}
  res.send('The amount for '+temp_card.id+' is '+temp_card.amount);
});

app.listen(3000);
console.log('Listening on port 3000');