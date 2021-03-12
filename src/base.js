import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCINX7gsTw8cBXgUNP-CzG9LZZLx-rILrY",
    authDomain: "catch-of-the-day-first-82aaf.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-first-82aaf-default-rtdb.firebaseio.com",
      });

      const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;