// src/components/Canvas.js
import { useRef, useState, useEffect } from "react";
import { Canvas } from "fabric";
import { Text, Image } from "fabric"; // Import specific components

const CanvasComponent = ({ text, fontColor, backgroundColor, backgroundImage, updateCanvas }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  // Initialize canvas
  useEffect(() => {
    const fabricCanvas = new Canvas(canvasRef.current, {
      width: 600,
      height: 400,
      backgroundColor: backgroundColor,
    });
    setCanvas(fabricCanvas);
    return () => fabricCanvas.dispose();
  }, [backgroundColor]);

  // Add text to canvas
  useEffect(() => {
    if (canvas) {
      const textObj = new Text(text, { // Use Text here from fabric
        left: 100,
        top: 100,
        fontFamily: "Arial",
        fontSize: 40,
        fill: fontColor,
      });
      canvas.clear();
      canvas.add(textObj);
      canvas.renderAll();
    }
  }, [text, fontColor, canvas]);

  // Handle background image change
  useEffect(() => {
    if (canvas && backgroundImage) {
      Image.fromURL(backgroundImage, (img) => { // Use Image here from fabric
        img.set({
          left: 0,
          top: 0,
          width: canvas.width,
          height: canvas.height,
        });
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
      });
    }
  }, [backgroundImage, canvas]);

  // Send canvas as image URL
  useEffect(() => {
    if (canvas) {
      updateCanvas(canvas.toDataURL());
    }
  }, [canvas, updateCanvas]);

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasComponent;
