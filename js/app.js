
// create requesst variable and assign a new XMLHttpRequest object to it
var request = new XMLHttpRequest();

// open a new connection

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		data.forEach(movie => {
			const card = document.createElement('div');
			card.setAttribute('class', 'card');

			const h1 = document.createElement('h1');
			h1.textContent = movie.title;

			const p = document.createElement('p');
			movie.description = movie.description.substring(0, 300); // Limit to 300 chars
  			p.textContent = `${movie.description}...`; // End with an ellipses

			container.appendChild(card);

			card.appendChild(h1);
			card.appendChild(p);
		});
	} else {
		console.log('error');
	}
}

// send request
request.send();

// app wrap
const app = document.getElementById('root');

// logo
const logo = document.createElement('img');
logo.src = 'images/logo.png'

// container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// make it happen
app.appendChild(logo);
app.appendChild(container);


