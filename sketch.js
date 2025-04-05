let dataFromFirebase = "";

function setup() {
  createCanvas(400, 400);

  // Riferimento al nodo del database Firebase
  const dataRef = firebase.database().ref("frase"); // Cambia 'data/string' con il percorso del tuo dato

  // Ascolta i cambiamenti in tempo reale
  dataRef.on("value", (snapshot) => {
    // Ottieni il valore dei dati dal database
    dataFromFirebase = snapshot.val();
  });
}

function draw() {
  background(220);

  // Visualizza la stringa ricevuta dal database
  textSize(32);
  textAlign(CENTER, CENTER);
  text(dataFromFirebase, width / 2, height / 2);
}
