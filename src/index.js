import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, RegularPolygon } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <RegularPolygon
          x={150}
          y={150}
          sides={6}
          radius={70}
          fill={"red"}
          stroke={"black"}
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
