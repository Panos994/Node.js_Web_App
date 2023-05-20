var express = require('express');
const app = express();

const parser = require('body-parser');

const sqlite3 = require('sqlite3').verbose();
app.use(express.static('frontend'));
app.use(parser.json());


const db = new sqlite3.Database('books.sqlite3',(err)=>{

		if(err){
			console.error(err.message);
		}
		console.log('Connected to the books.sqlite3 database');

});

app.get('/books/:title',function(req,res){

	const title = req.params.title;
	const sql = `SELECT * FROM books WHERE title LIKE "%${title}%"`;

	db.all(sql, (error, results) =>{
		if(error){
			req.status(500);
			res.send({'error': `Database error ${error.message}`});
			console.log(`The response was sent with an 500 error. Message: ${error.message}`);

		}else{
			if(results.length == 0){
				res.status(404);
				res.send({'error':'Resourse does not exist!'});
				console.log(`The resource does not exist`);
			}else{
				res.json(results);
				console.log(`The response was sent with success and the results are: ${results}`);
			}
		}
	});





});




app.post('/books/', (req,res)=>{

	const book = req.body;

	const sql = `INSERT INTO books(author, title, genre, price) VALUES("${book.author}","${book.title}","${book.genre}",${book.price});`;

	db.run(sql,(error)=>{

			if(error){
				res.status(500);
				res.send({'error':`DB error: ${error.message}`});
			}else{
				res.json({'result':'OK'});
			}

	});

	console.log('Post req is okay');
});

app.listen(3000,function(){


	console.log('Server is running');

	const query = 'CREATE TABLE IF NOT EXISTS `books`(`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`author` VARCHAR(25) NOT NULL, `title` VARCHAR(40) NOT NULL, `genre` VARCHAR(20) NOT NULL, `price` FLOAT NOT NULL);';

	db.run(query, (error) =>{

		if(error){
			console.log('Table is not created');
		}

	});


});
