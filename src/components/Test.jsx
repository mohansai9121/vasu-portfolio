import { Canvas } from "@react-three/fiber";
import "./Test.css";
import { OrbitControls, RenderTexture, Stage } from "@react-three/drei";
import Media from "./Media";

const Test = () => {
  return (
    <div className="test">
      <Canvas>
        <Stage environment="city" intensity={0.7}>
          <Media />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default Test;
