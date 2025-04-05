// https://console.firebase.google.com/u/0/project/luppio-demo/overview

let addFrase;
let frase;

async function firebaseSetup() {
  const fb_app_url = "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  const fb_database_url =
    "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

  const { initializeApp } = await import(fb_app_url);
  const {
    getDatabase,
    ref,
    push,
    set,
    onValue,
    //ricordati di uncommentare questo nella pagina totalieh
  } = await import(fb_database_url);

  const firebaseConfig = {
    apiKey: "AIzaSyBrs_C4A_wukeIH0B8djg3mXxCXXR61BUg",
    authDomain: "partyexp-89517.firebaseapp.com",
    databaseURL:
      "https://partyexp-89517-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "partyexp-89517",
    storageBucket: "partyexp-89517.firebasestorage.app",
    messagingSenderId: "787448468377",
    appId: "1:787448468377:web:ea8689ca28d5d93dbc3908",
  };

  const app = initializeApp(firebaseConfig);
  const myDatabase = getDatabase(app);

  const fraseRef = ref(myDatabase, "frase");

  onValue(fraseRef, function (snapshot) {
    const data = snapshot.val();
    frase = data;
    counter = snapshot.size;
    console.log(counter);
  });

  addFrase = function (properties) {
    const singleFraseRef = push(fraseRef);
    set(singleFraseRef, properties);
  };
}

firebaseSetup();
