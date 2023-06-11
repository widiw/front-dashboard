import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../components/styles/carousel.css';
import { Player, BigPlayButton } from "video-react";

const App = () => {
  return (
    <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
      <div key="content-0" className="my-slide secondary complex">
          <h2>Text Mode:</h2>
          <ul>
              <li>Primary - for titles</li>
              <li>Secondary - for subtitles</li>
              <li>Content</li>
          </ul>
      </div>
      <div key="content-1" className="my-slide content">
        <Player
            fluid
            playsInline
            poster="poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
          <BigPlayButton position="center" />
        </Player>
      </div>
      <div key="content-3" className="my-slide content">
          <img alt="" src="1.jpeg" />
      </div>
      <div key="content-7" className="my-slide content">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
      </div>
  </Carousel>
  );
};

export default App;