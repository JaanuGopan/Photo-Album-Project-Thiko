import "./App.css";
import image1 from "./assets/images/1999-batch.jpeg";
import image2 from "./assets/images/DSC_0543.JPG";
import ImagesList from "./components/ImageList";

function App() {
  return (
    <div className="main-container">
      <div className="heading-container">
        <h2 className="main-container-heading">Class Bunkers - 1999</h2>
      </div>
      <div className="media-container">
        <div className="image-container">
          <img src={image1} className="image" alt="Pongal Vizha" />
        </div>
        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/Fhgpf2ikOWY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="image-container">
          <img src={image2} className="image" alt="Pongal Vizha" />
        </div>
      </div>
    </div>
  );
}

export default App;
