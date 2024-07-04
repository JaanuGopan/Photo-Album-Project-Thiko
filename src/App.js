import "./App.css";
import image1 from "./assets/images/IMG_4546.JPG";
import image2 from "./assets/images/DSC_0543.JPG";

function App() {
  return (
    <div className="main-container">
      <h2 className="main-container-heading">Pongal Vizha</h2>
      <div className="media-container">
        <div className="image-container">
          <img src={image1} className="image" alt="Pongal Vizha" />
        </div>
        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/6LD30ChPsSs"
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
