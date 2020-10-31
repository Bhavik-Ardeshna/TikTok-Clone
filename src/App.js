import React from "react";
import "./App.css";
import Video from "./Video";
function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          light='https://i.ytimg.com/an_webp/5bAPll9w1_A/mqdefault_6s_480x270.webp?du=3000&sqp=CPCd8_wF&rs=AOn4CLA2uV0SCU8Fg3ewvbw2_uv1zHqPEw'
          url="https://youtu.be/oEVnq6LIKOM"
          channel="arvik"
          description="Wow! Gr8 arvik tiktok clone"
          song="Hey Hey! lovely..."
          like={345}
          message={123}
          share={132}
        />

        <Video
          light='https://i.ytimg.com/an_webp/K94gQq0sJ-U/mqdefault_6s_480x270.webp?du=3000&sqp=CKrL8_wF&rs=AOn4CLDuqcXV4_GAEiUn9h01wTq8imN6Kg'
          url="https://youtu.be/R1tJ6i_Sxyg"
          channel="stud_bhavik"
          description="TSP’s If Employees Behave like Autowalas"
          song="Hey Hey! lovely..."
          like={345}
          message={123}
          share={132}
        />

        <Video
          light='https://i.ytimg.com/an_webp/XQnzk334PtA/mqdefault_6s_480x270.webp?du=3000&sqp=CIDM8_wF&rs=AOn4CLA-HQ1pcVqVxHBH2LkEj2psnmTyyw'
          url="https://youtu.be/UF8uR6Z6KLc"
          channel="royal_ardeshna"
          description="Steve Jobs' 2005 Stanford Commencement Address"
          song="Hey Hey! lovely..."
          like={345}
          message={123}
          share={132}
        />

      </div>
    </div>
  );
}

export default App;
