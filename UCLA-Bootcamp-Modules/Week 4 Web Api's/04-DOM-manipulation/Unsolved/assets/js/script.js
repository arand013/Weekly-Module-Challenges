// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1

var h1El = document.createElement('h1');
// TODO: Add a centered h2

h1El.textContent = 'Welcome to this page';
// TODO: Add a centered image with a centered caption under it

h1El.setAttribute('style', 'margin: auto; width:50%; text-align:center');
// TODO: Add a list of your favorite foods (or other favorites)
body.appendChild(h1El);

var infoEl = document.createElement('div');
var imgEl = document.createElement('img');
var kittenEl = document.createElement('div');

kittenEl.textContent = 'This is my kitten';

infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');
imgEl.setAttribute('height', 200);
imgEl.setAttribute('width', 200);
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');

body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
