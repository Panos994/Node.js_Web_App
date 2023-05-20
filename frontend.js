<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My Front End</title>
</head>


<body style="background-color: khaki;">






	<div class="topnav">
  <a class="active" href="#home" onclick="clearPage();" img = >Home</a>

<!--  if I wanted to add a welcome msg <a class="active" href="#home" onclick="clearPage(); displayWelcomeMessage();">Home</a> -->

 <a href="#news" onclick="openInsertForm()">Insert a Book</a>
  <a href="#contact" onclick="openSearchBook()">Search a Book</a>
 
</div>

<style>
	.topnav {
	  background-color: #333;
	  overflow: hidden;
	}

	/* Style the links inside the navigation bar */
	.topnav a {
	  float: left;
	  color: #f2f2f2;
	  text-align: center;
	  padding: 14px 16px;
	  text-decoration: none;
	  font-size: 17px;
	}

	/* Change the color of links on hover */
	.topnav a:hover {
	  background-color: #ddd;
	  color: black;
	}

	/* Add a color to the active/current link */
	.topnav a.active {
	  background-color: #04AA6D;
	  color: white;
	}
</style>





	<form id="insertForm">
		<h><strong><center>Insert a book to the system and fill up the form.</center></strong></h><br><br>



		<label for="bookAuthor"><center>Author</center></label><br>
		<center><input type="text" id="bookAuthor" placeholder="Insert author's name"></center><br><br>

		<center><label for="bookTitle">Title</label></center><br>
		<center><input type="text" id="bookTitle" placeholder="Insert book's title"></center><br>
		<br>
		<center><label for="bookGenre">Genre of the book</label></center><br>
		<center><select id="bookGenre">
			<option value="Science fiction">Science fiction</option>
			<option value="Satire">Satire</option>
			<option value="Drame">Drama</option>
			<option value="Action and Adventure">Action and Adventure</option>
			<option value="Romance">Romance</option>
			<option value="Mystery">Mystery</option>
			<option value="Horror">Horror</option>
		</select></center><br><br>

		<center><label for="Price" placeholder="price">Price</label></center><br>
			<center><input type="text" id="price" placeholder="Insert price"></center><br><br> 

			<center><input type="button:active" value="SUBMIT" id="SubmitBtn" style="display: block; background: #008BCE; font-size: 14px; font-family: Arial, helvetica, sans-serif; mso-line-height-rule: exactly; line-height: 115%; text-align: center; text-decoration: none; -ms-text-size-adjust: 100%; color: #FFFFFF; border: 1px solid transparent; padding: 13px; border-radius: 10px; mso-border-alt: 10px solid #008BCE; mso-padding-alt: 0; -moz-border-radius: 10px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -webkit-border-radius: 10px; cursor: pointer;-webkit-box-shadow: inset 0px 0px 5px;-moz-box-shadow: inset 0px 0px 5px;"></center>
		
	</form><br>


	<!--center><b style=color:#7e7e7e><p name="submitSuccess">The book has been submitted to the database.</p></b></center><br>
	<br>
	<br>
	<br-->


	<center><from id="SearchBook">
		<center><strong><p style="padding:0px 50px 10px; font-size: 14px; font-family: Arial, helvetica, sans-serif; line-height: 107%">Search a book by title.</p></strong></center>

		<input type="text" id="bookKW" placeholder="Type title"><br><br>
		<input type="button:active" value="Related Books" id="getBooksByKW" style="display: block; background: #008BCE; font-size: 14px; font-family: Arial, helvetica, sans-serif; mso-line-height-rule: exactly; line-height: 115%; text-align: center; text-decoration: none; -ms-text-size-adjust: 100%; color: #FFFFFF; border: 1px solid transparent; padding: 13px; border-radius: 10px; mso-border-alt: 10px solid #008BCE; mso-padding-alt: 0; -moz-border-radius: 10px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -webkit-border-radius: 10px; cursor: pointer; -webkit-box-shadow: inset 0px 0px 5px;-moz-box-shadow: inset 0px 0px 5px;"><br>

	</center>
</from><br>

<ul id="bookResults"></ul>



<div class="main">
			<div class="frame"><center><b>Welcome to my page</b></center></div>
	
</div>

<style>

				.main{
					width:350px;
					height:500px;
					position:relative;
					margin: 50px auto;
				}
				.frame{
					width:100%;
					height:100px;
					border:30px solid #000;
					border-image:url(background_of_the_book_200882.jpg) 25 25;
					position:absolute;
					z-index: 1;
					animation: frame 5s linear infinite;

				}
				@keyframes frame{
					0%{
						transform: scale(.9);
						opacity:0;
					}
					20%{
						transform: scale(1);
						opacity:1;
					}
					80%{
						transform: scale(1);
						opacity:1;
					}
					100%{
						transform: translateY(100px);
						opacity:0;
					}
				}

	</style>






	<script>


		function openInsertForm() {
			document.getElementById("insertForm").style.display = "block";
  			document.getElementById("SearchBook").style.display = "none";
		}


	function openSearchBook() {
 		 document.getElementById("insertForm").style.display = "none";
  		document.getElementById("SearchBook").style.display = "block";
	}
	/*
	function clearPage() {
  		document.getElementById("insertForm").style.display = "none";
  		document.getElementById("SearchBook").style.display = "none";
	}
	*/
	/*
	function displayWelcomeMessage() {
		  var welcomeMessage = document.createElement("p");
		  welcomeMessage.textContent = "Thank you for using our Database";
		  welcomeMessage.style.textAlign = "center";
		  welcomeMessage.style.fontSize = "18px";
		  welcomeMessage.style.fontWeight = "bold";
		  welcomeMessage.style.marginTop = "50px";
		  document.body.appendChild(welcomeMessage);
	}
	*/
	function clearPage() {
		  document.getElementById("insertForm").style.display = "none";
		  document.getElementById("SearchBook").style.display = "none";
		  var welcomeMessage = document.querySelector("p");
		  	if (welcomeMessage) {
		    	welcomeMessage.remove();
		  }
	}
			window.onload = (event) =>{

				const baseURl = "http://localhost:3000/books/";
				document.getElementById('getBooksByKW').addEventListener('click',(event)=>{

							const Search = document.getElementById('bookKW').value;
							const url = baseURl + Search;

							document.getElementById('bookResults').innerHTML ='';

							fetch(url)
							.then(res=> res.json())
							.then(data => {
								var list = document.getElementById('bookResults');



								//list.innerHTML += '[';

								for(var i = 0;i<data.length;i++){

									var bookResults = `<center><strong>Results: <p style=color:#7e7e7e>  <br>  id: ${data[i].id} <br> author: ${data[i].author} <br> title: ${data[i].title} <br>genre: ${data[i].genre} <br> price:${data[i].price} <br>  <p></strong></center>`;

									list.innerHTML += bookResults;
								}

								//list.innerHTML += ']';
								document.getElementById("bookKW").value ='';
							});


				});


				function clearFields() {
                document.getElementById('bookAuthor').value = '';
                document.getElementById('bookTitle').value = '';
                document.getElementById('price').value = '';
            }

            function validatePrice(){
                let checkPrice = document.forms["insertForm"]["price"].value;
                if(checkPrice === 0 || checkPrice < 0 || isNaN(checkPrice)){
                    return false;
                }
            }

            let insertForm = document.getElementById('insertForm');

            document.getElementById('SubmitBtn').addEventListener('click', async function(event){
                const authorB = document.getElementById('bookAuthor').value;
                const titleB = document.getElementById('bookTitle').value;
                const genreB = document.getElementById('bookGenre').value;
                const priceB = document.getElementById('price').value;

                const book = {author: authorB, title: titleB, genre: genreB, price: priceB};
               
                if(validatePrice() == false){
                    window.alert("Price was not entered correctly.");
                    document.getElementById('price').value = '';
                    return;
                }

                const response = await fetch(baseURl, {
                    method: 'POST',
                    headers: {//enimeronw ton server oti auto pou tha lavei einai JSON
                        'Content-Type' : 'application/json'
                    },
                    body:JSON.stringify(book)
                });
                const body = await response.json();
               
                console.log(body);

                window.alert("The book has been submited");

                clearFields();
            });
        };


			
	</script>

</body>
</html>
