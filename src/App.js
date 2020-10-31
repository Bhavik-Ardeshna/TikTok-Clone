import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from './axios';
// import { light } from "@material-ui/core/styles/createPalette";


function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ url, light, like, message, share, channel, description, song }) => (
          <Video
            url={url}
            light={light}
            channel={channel}
            description={description}
            song={song}
            like={like}
            message={message}
            share={share}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
