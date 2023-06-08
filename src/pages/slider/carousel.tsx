import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../components/styles/carousel.css';

const App = () => {
  return (
    <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
      <div key="content-0" className="my-slide primary">
          <h1>Presentation mode</h1>
      </div>
      <div key="content-1" className="my-slide secondary">
          <h2>It's just a couple of new styles...</h2>
      </div>
      <div key="content-2" className="my-slide content">
          <p>...and the carousel can be used to present something!</p>
      </div>
      <div key="content-3" className="my-slide content">
          <img alt="" src="1.jpeg" />
      </div>
      <div key="content-6" className="my-slide secondary complex">
          <h2>Pre baked slides:</h2>
          <ul>
              <li>Primary - for titles</li>
              <li>Secondary - for subtitles</li>
              <li>Content</li>
          </ul>
      </div>
      <div key="content-7" className="my-slide content">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
      </div>
  </Carousel>
  );
};

export default App;