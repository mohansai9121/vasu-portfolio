import { Canvas } from "@react-three/fiber";
//import Arts from "./Arts";
import Collage from "./Collage";
import { OrbitControls, Stage } from "@react-three/drei";

const Activity = () => {
  return (
    <div>
      <Canvas>
        <Stage environment="city" intensity={1}>
          <Collage />
        </Stage>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
};

export default Activity;
