import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Star } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Star
          x={150}
          y={150}
          numPoints={6}
          innerRadius={40}
          outerRadius={70}
          fill={"yellow"}
          stroke={"black"}
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
