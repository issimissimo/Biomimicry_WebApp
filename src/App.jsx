/// React
import { useState, useEffect, useRef } from "react";

/// Socket-IO
import { io } from "socket.io-client";

/// Components
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import SocketError from "./components/SocketError";


/// Connect to Server
const socket = io();
const serverBaseUrl = document.domain;
const port = window.location.port;
const server = io.connect(serverBaseUrl + ':' + port);


///
/// App
///
const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [videoIndexActive, setVideoIndexActive] = useState(null);
  const [isEnglish, setIsEnglish] = useState(true);


  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    server.on('finito', (videoIndex) => {
      console.log("Video: " + videoIndex + "-- ENDED");
      setVideoIndexActive(null);
    });

    console.log("socket connected: " + socket.connected)

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      server.off('finito');
    };
  }, []);

  const OnClickOnVideoElement = (videoIndex) => {
    if (isConnected) {
      if (videoIndex != null) {
        console.log("Play video: " + videoIndex)
        const lang = isEnglish ? "eng" : "ara";
        server.emit('play', { ID: videoIndex, lingua: lang }, (data) => {});
      }
      else {
        console.log("Stop video: " + videoIndexActive)
        server.emit('stoppa');
      }
    }
    setVideoIndexActive(videoIndex);
  }

  const SetLanguageIsEnglish = (value) => {
    setIsEnglish(value);
  }


  /// RENDER
  // if (!isConnected) return (
  //   <SocketError />
  // )
  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-8">
      <Header
        activeElement={videoIndexActive}
        clickOnLanguage={SetLanguageIsEnglish}
        isEng={isEnglish} />
      <List
        activeElement={videoIndexActive}
        clickOnVideo={OnClickOnVideoElement}
        isEng={isEnglish} />
      <Footer />
    </div>
  )
}

export default App
