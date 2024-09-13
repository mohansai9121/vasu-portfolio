import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

const Editing = () => {
  return (
    <div>
      <Canvas>
        <Stage environment="city" intensity={0.8}>
          <Computer />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default Editing;
