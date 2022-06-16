import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Rect } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={20}
          y={20}
          width={100}
          height={50}
          fill="green"
          stroke="black"
          strokWidth={4}
        />
        <Rect
          x={150}
          y={40}
          width={100}
          height={50}
          fill="red"
          shadowBlur={10}
          stroke="black"
          cornerRadius={10}
        />
        <Rect
          x={50}
          y={120}
          width={100}
          height={100}
          fill="blue"
          cornerRadius={[0, 10, 20, 30]}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
