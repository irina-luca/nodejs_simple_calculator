var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Serving static files in Express
app.use(express.static('public'));

// Point to our view
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "calculator.html" );
})

// Deal with output for different cases
app.post("/addsubstract", urlencodedParser, function(req, res) {
	console.log("ADDITION/SUBSTRACTION");
	firstNum = parseInt(req.body.first_num);
	secondNum = parseInt(req.body.second_num);
	response = calcAdditionOrSubstraction(firstNum, secondNum);
   	res.end(JSON.stringify(response));
})
app.post("/multiply", urlencodedParser, function(req, res) {
	console.log("MULTIPLICATION");
	firstNum = parseInt(req.body.first_num);
	secondNum = parseInt(req.body.second_num);
	response = calcMultiplication(firstNum, secondNum);
   	res.end(JSON.stringify(response));
})
app.post("/divide", urlencodedParser, function(req, res) {
	console.log("DIVISION");
	firstNum = parseInt(req.body.first_num);
	secondNum = parseInt(req.body.second_num);
	response = calcDivision(firstNum, secondNum);
   	res.end(JSON.stringify(response));
})

// Define the server var
var server = app.listen(8081, function() {
	var host = server.address().address
    var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

// Calculator methods
function calcAdditionOrSubstraction(firstNum, secondNum) {
	return firstNum + secondNum;
}
function calcMultiplication(firstNum, secondNum) {
	return firstNum * secondNum;
}
function calcDivision(firstNum, secondNum) {
	return firstNum / secondNum;
}