// /// React
// import { useState, useEffect, useContext, useRef } from "react";

// /// Firebase
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { getFunctions, httpsCallable } from "firebase/functions";

// /// Components
// import { AuthenticationContext } from "./components/AuthenticationProvider";
// import Loader from "./components/Loader";
// import Error from "./components/Error";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Video from "./components/Video";
// import Greetings from "./components/Greetings";


// /// Utils
// import { firebaseConfig } from "./utils/constants";
// import { firebaseCredentials } from "./utils/constants";
// import checkBrowser from "./utils/checkBrowser";
// import checkIOS from "./utils/checkIOS";
// import checkMobile from "./utils/checkMobile";
// import { addDays, padTo2Digits, formatDate } from "./utils/dateUtils";





/// AppStateEnum
export const AppStateEnum = {
  ERROR: Symbol("error"),
  LOADING: Symbol("loading"),
  WELCOME: Symbol("welcome"),
  MESSAGE: Symbol("message"),
  VIDEO: Symbol("video"),
  GREETINGS: Symbol("greetings")
}



const PreloadImage = src => new Promise(function (resolve, reject) {
  const img = new Image();
  img.onload = function () {
    resolve(img);
  }
  img.onerror = reject;
  img.src = src;
});



///
/// App
///
const App = () => {
  
  return (
    <div className="min-h-screen flex flex-col items-center p-7 px-12">
      <p>MIAO!</p>
    </div>
  )
}

export default App
