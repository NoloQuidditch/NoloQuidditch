var express = require ("express");
bodyparser = require('body-parser');
var path = require('path');
var router = express.Router() ;
//cors = require('cors');


var app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

/*app.get("/",(req, res) => (
	res.send("ciao sono il server")))*/


app.get("/items", (req, res) => (
	res.send("ciao sono gli items")))

app.use(express.static('public'));
//i file static sono nella cartella public

router.get('/', function (req, res) { 
  res.send("TODO. Elenco utenti")})


app.post("/", function(req, res){
     console.log("Ricevuto una richiesta POST");
    // contenuto della richiesta
    console.log(req.body);
    // username
    console.log(req.body.username);
    // password
    console.log(req.body.pass);
    //aprire json e confrontarlo
});

//preparare oggetto response


//readfile utenti


//json.pars


/*login = function (req, res){
	var alert = "accesso negato"

	if ()
};*/


const fs = require('fs');


fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    console.log(users);
});

if (req.body.username == users[1].utente && req.body.pass == users[1].password)
{
    document.write ('<h1> accesso consentito </h1>');
}
else { document.write ('<h1> accesso negato </h1>');}

//non funziona l'if

console.log('This is after the read call');

/*app.listen(3000, function(){
	console.log("la porta 3000 è in ascolto")
});*/

//PRODURRE HTML


fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    console.log(users);
});

console.log('This is after the read call');


/*let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student, null, 2);

fs.writeFile('student.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');*/

app.listen(3000, function(){
	console.log("la porta 3000 è in ascolto")
});