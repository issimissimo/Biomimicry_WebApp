/// React
import { useState, useEffect, useRef } from "react";

/// Socket-IO
import { io } from "socket.io-client";

/// Components
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";


import { VideoElement, VideoElementState } from "./components/subComponents/VideoElement";


/// Connect to Server
const socket = io();
const serverBaseUrl = document.domain;
const port = window.location.port;
// const server = io.connect(serverBaseUrl + ':' + port);


///
/// App
///
const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [videoIndexActive, setVideoIndexActive] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    // server.on('finito', (videoIndex) => {
    //   setVideoIndexActive(null);
    // });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      // server.off('finito');
    };
  }, []);

  const OnClickOnVideoElement = (videoIndex) => {
    setVideoIndexActive(videoIndex);
  }

  // return (
  //   <div className="min-h-screen flex flex-col items-center p-7">
  //     <p>عربو!</p>
  //     <VideoElement/>
  //     <VideoElement/>
  //   </div>
  // )

  return (
    <div id="App" className="min-h-screen flex flex-col justify-between items-center p-7">
      <Header />
      <List />
      <Footer />
    </div>
  )
}

export default App
