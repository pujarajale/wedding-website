// src/App.js
import { useState } from "react";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";
import TextInput from "./components/TextInput";
import BackgroundUpload from "./components/BackgroundUpload";
import './styles/styles.css';

function App() {
  const [text, setText] = useState("John & Jane");
  const [fontColor, setFontColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [canvasImage, setCanvasImage] = useState("");

  const handleTextChange = (e) => setText(e.target.value);
  const handleFontColorChange = (color) => setFontColor(color.hex);
  const handleBackgroundColorChange = (color) => setBackgroundColor(color.hex);
  const handleBackgroundImageChange = (image) => setBackgroundImage(image);

  const handleCanvasUpdate = (dataUrl) => setCanvasImage(dataUrl);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = canvasImage;
    link.download = "wedding_invite.png";
    link.click();
  };

  return (
    <div className="App">
      <div className="editor-toolbar">
        <TextInput value={text} onChange={handleTextChange} />
        <ColorPicker label="Text Color" color={fontColor} onChange={handleFontColorChange} />
        <ColorPicker label="Background Color" color={backgroundColor} onChange={handleBackgroundColorChange} />
        <BackgroundUpload onUpload={handleBackgroundImageChange} />
        <button onClick={downloadImage}>Download Invite</button>
      </div>
      <div className="canvas-container">
        <Canvas
          text={text}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImage}
          updateCanvas={handleCanvasUpdate}
        />
      </div>
    </div>
  );
}

export default App;
