import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, RegularPolygon } from "react-konva";

const App = () => {
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
        {/*<RegularPolygon*/}
        {/*  x={220}*/}
        {/*  y={200}*/}
        {/*  sides={5}*/}
        {/*  radius={70}*/}
        {/*  fillPatternImage={images.darthVader}*/}
        {/*  fillPatternOffset={((x = -220), (y = 70))}*/}
        {/*  stroke={"black"}*/}
        {/*  strokeWidth={4}*/}
        {/*  draggable*/}
        {/*/>*/}

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
