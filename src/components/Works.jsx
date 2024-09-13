import { useState } from "react";
import Creative from "./Creative";
import "./Works.css";
import Editing from "./Editing";
import Activity from "./Activity";

const Works = () => {
  const data = ["Photo Shoots", "Creative editing", "Activities"];
  const [workType, setWorkType] = useState("Photo Shoots");

  return (
    <div className="works">
      <h1>Works</h1>

      <div className="flex-display">
        <div>
          <div>
            {workType === "Photo Shoots" ? (
              <Creative />
            ) : workType === "Creative editing" ? (
              <Editing />
            ) : (
              <Activity />
            )}
          </div>
        </div>
        <div className="data-display">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="data-item"
              onClick={() => setWorkType(`${item}`)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
