import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, RegularPolygon } from "react-konva";
import useImage from 'use-image';

const url = 'https://konvajs.org/assets/lion.png';
const App = () => {
  const [image] = useImage(url);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <RegularPolygon
          x={80}
          y={200}
          sides={5}
          radius={70}
          fill={"red"}
          stroke={"black"}
          strokeWidth={4}
          draggable
        />
        {/*TODO how to use image for  fillPatternOffset*/}
        <RegularPolygon
          x={220}
          y={200}
          sides={5}
          radius={70}
          fillPatternImage={image}
          // fillPatternOffset({(x= 20 ),y= 10});
          stroke={"black"}
          strokeWidth={4}
          draggable
        />
        {/*linearGradPentagon*/}
        <RegularPolygon
          x={360}
          y={200}
          sides={5}
          radius={70}
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, "red", 1, "yellow"]}
          stroke={"black"}
          strokeWidth={4}
          draggable
        />
        {/*radialGradPentagon*/}
        <RegularPolygon
          x={500}
          y={200}
          sides={5}
          radius={70}
          fillRadialGradientStartPoin={{ x: 0, y: 0 }}
          fillRadialGradientStartRadius={0}
          fillRadialGradientEndPoint={{ x: 0, y: 0 }}
          fillRadialGradientEndRadius={70}
          fillRadialGradientColorStops={[0, "red", 0.5, "yellow", 1, "blue"]}
          stroke={"black"}
          strokeWidth={4}
          draggable
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
