console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1

// console.log("Hello");

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  var midEarthsection = document.createElement("section");
  console.log(midEarthsection);
  midEarthsection.setAttribute("id", "middle-earth");
  //console.log(midEarthsection);
  for (var i = 0; i < lands.length; i++) {
    //console.log(lands[i]);
    var articlex = document.createElement("article");
    var h1x = document.createElement("h1");
    h1x.innerHTML=lands[i];
    articlex.appendChild(h1x);
    midEarthsection.appendChild(articlex);
    body.appendChild(midEarthsection);  
  } 
}
makeMiddleEarth();


// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
var shire = document.querySelector('article');
var listOfHobbits = document.createElement("ul");
listOfHobbits.setAttribute("id", "smallMen");
console.log(shire);
//console.log(listOfHobbits);
for (var i = 0; i <hobbits.length; i++) {
  //console.log(hobbits[i]);  
  var newHobbits = document.createElement("li");
  listOfHobbits.appendChild(newHobbits);
  newHobbits.innerHTML=hobbits[i];
  newHobbits.setAttribute("class", "hobbit");
  shire.appendChild(listOfHobbits);
}

}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

  var ring = document.createElement("div");
  ring.setAttribute("id", "the-ring");
  ring.setAttribute("class", "magic-imbued-jewelry");

  // var theOneRing = document.getElementById('the-ring');
  ring.addEventListener('click', function() {
    nazgulScreech();
  });

  var frodo = document.querySelector('li');
  console.log(frodo);
  frodo.appendChild(ring); 
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var councle = document.createElement("aside");
  var elvesDwarvesMen = document.createElement("ul");
  //console.log(councle,elvesDwarvesMen);
  councle.appendChild(elvesDwarvesMen);
  //console.log(councle);
  for (var i = 0; i <buddies.length; i++) { 
  //console.log(buddies[i]);
  var gandalfElvesDwarvesMen = document.createElement("li");
  elvesDwarvesMen.appendChild(gandalfElvesDwarvesMen);
  gandalfElvesDwarvesMen.innerHTML=buddies[i];
}
  //now need
  var rd = document.querySelectorAll('article')[1];
  console.log(rd);
  rd.appendChild(councle);

}
makeBuddies();

// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var a = document.querySelectorAll('li') [7];
  //console.log(a);
  console.log(a);
  var newA = a.textContent;
  a.textContent = "Aragon";

}

beautifulStranger();
// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
 
  //I need to move the hobbits from shire to Rivendell
  // select rivendell and shire
  //select all hobits and move them to selected rivendel


  var hobbits = document.getElementById('smallMen');
  var rivendell = document.querySelectorAll('article')[1];
  //var elvesDwarvesMen = document.createElement("ul");
  //var shire = document.querySelectorAll('h1')[0];
  // var hobbits = document.getElementsByClassName('hobbit');
  console.log(rivendell, hobbits);
  //rivendell.appendChild();
  //rivendell.appendChild(elvesDwarvesMen);
  rivendell.appendChild(hobbits);



  console.log(rivendell, hobbits);


}

leaveTheShire();

// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var fellowship = document.createElement("div");
  //fellowship.nodeValue = a;


}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain();