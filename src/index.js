import ReactDOM from "react-dom"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControlsExp } from "three-stdlib"

import Model from "./Model"

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        {" "}
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
