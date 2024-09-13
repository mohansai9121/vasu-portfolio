import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import { OrbitControls, Stage } from "@react-three/drei";

const Creative = () => {
  return (
    <div>
      <Canvas>
        <Stage environment="city" intensity={0.7}>
          <Camera />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default Creative;
