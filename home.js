const urlString = window.location.href;
let url = new URL(urlString);
console.log(url);

//enter button
let enterButton;

//instruction string
let instructions = "WRITE YOUR NAME";
let textBar;

//enter string
let enter = "PRESS ENTER";

//username
let username;
let randomX;
let counter;

let fish;

function preload() {
  // fish = loadImage("./addoni/licensed-image.jpg");
}

function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight);
  // fish.resize(2048, 1367);
  // background(fish);
  background(89, 0, 255);
  textAlign(CENTER);

  //create Enter button
  enterButton = createElement("button", "SEND");
  // enterButton.position(windowWidth / 2-enterButton.width/2, windowHeight/2 +40);
  enterButton.class("enterButton");
  enterButton.mousePressed(pressEnter);

  //input text name
  textBar = document.getElementsByClassName("textBar");
}
function draw() {
  textAlign(CENTER);

  randomX = random(-1000, +1000);
  getVal();
}

function getVal() {
  username = document.querySelector("input").value;
}

// function press entrer
function keyPressed(myInputEvent) {
  if (keyCode == ENTER) {
    salvaFrase();
    setTimeout(banner, 100);
    setTimeout(refresh, 2500);
  }
}

function pressEnter() {
  salvaFrase();
  setTimeout(banner, 100);
  setTimeout(refresh, 2500);
}

function salvaFrase() {
  let thisFrase = null;

  thisFrase = {
    text: username,
    randomX: randomX,
  };
  addFrase(thisFrase);
  thisFrase = null;
  // prevent default
  return false;
}
function banner() {
  document.getElementById("planted").style.width = "75%";
  document.getElementById("planted").style.transition = "0.5s";
}
function refresh() {
  window.open(url, "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
