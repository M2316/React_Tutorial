import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div id="demo">
      <motion.div
        id="box"
        animate={{ x,y,rotate}}
        transition={{ duration: 3, bounce: 0, type: "spring" }}
      />

      <div id="inputs">
        <p>
          <label htmlFor="x">X</label>
          <input
            type="number"
            id="x"
            onChange={(event) => setX(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="y">Y</label>
          <input
            type="number"
            id="y"
            onChange={(event) => setY(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="rotate">Rotate</label>
          <input
            type="number"
            id="rotate"
            onChange={(event) => setRotate(+event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default App;
