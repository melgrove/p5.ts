import P5 from "p5";

import { makeSquare } from "./shapes";

const sketch = (p5: P5) => {
  p5.setup = () => {
    const canvas = p5.createCanvas(400, 400);
    canvas.parent("sketch");
  };

  p5.draw = () => {
    // Example with a module
    makeSquare(p5);
  };
};

new P5(sketch);
