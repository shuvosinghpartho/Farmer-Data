
const firebaseConfig = {
  apiKey: "AIzaSyB8KSQh8C179W5_nkFVe06bTq_5Maxnuxs",
  authDomain: "fermer-data.firebaseapp.com",
  databaseURL: "https://fermer-data-default-rtdb.firebaseio.com",
  projectId: "fermer-data",
  storageBucket: "fermer-data.firebasestorage.app",
  messagingSenderId: "163291186867",
  appId: "1:163291186867:web:1d9faaf23f6b7265be12c6",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function pushData(data) {
  const newRef = database.ref("Farmers").push();
  newRef
    .set(data)
    .then(() => {
      console.log("Data pushed successfully with key:", newRef.key);
        myToast.show('Hello, this is a toast message!');
    })
    .catch((error) => {
      console.error("Error pushing data:", error);
    });
}
function getData(){

}
function findByNumber(number){
  const peopleRef = database.ref("Farmers");
  peopleRef
      .orderByChild("mobile")
      .equalTo(number)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            console.log("Person found:", data);
              populateCard(data);
          });
        } else {
          console.log("No person found with number:", number);
        }
      })
      .catch((error) => {
        console.error("Error finding person:", error);
      });
}

