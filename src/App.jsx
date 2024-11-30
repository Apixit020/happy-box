import { useState, useEffect } from "react";
import { ref, set, onValue } from "firebase/database";
import { database } from "./firebase";
import { FaLightbulb, FaWater } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdAir } from "react-icons/md";

const HamsterCageControl = () => {
  const [light, setLight] = useState(false);
  const [water, setWater] = useState(false);
  const [food, setFood] = useState(false);
  const [scent, setScent] = useState(false);

  // Function to update Firebase with device state
  const updateFirebase = (path, value) => {
    const deviceRef = ref(database, path);
    set(deviceRef, value ? 1 : 0);
  };

  const handleFoodDispense = () => {
    setFood(true);
    setTimeout(() => setFood(false), 2000);
  };

  const handleWaterDispense = () => {
    setWater(true);
    setTimeout(() => setWater(false), 2000);
  };

  const handleScentDispense = () => {
    setScent(true);
    setTimeout(() => setScent(false), 2000);
  };

  // Use effect to update Firebase when states change
  useEffect(() => {
    updateFirebase("box/light", light);
  }, [light]);

  useEffect(() => {
    updateFirebase("box/pump", water);
  }, [water]);

  useEffect(() => {
    updateFirebase("box/food", food);
  }, [food]);

  useEffect(() => {
    updateFirebase("box/humi", scent);
  }, [scent]);

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-2xl text-center justify-center">
              Happy Box System
            </h1>
            <h6 className="card-title text-2xl text-center justify-center">
              H.B.S
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* ควบคุมไฟ */}
              <div className="card bg-base-200">
                <div className="card-body flex-row justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FaLightbulb
                      className={`text-2xl ${
                        light ? "text-warning" : "text-base-content opacity-70"
                      }`}
                    />
                    <div>
                      <h3 className="font-bold">ควบคุมไฟ</h3>
                      <p className="text-sm opacity-70">
                        {light ? "เปิดไฟ" : "ปิดไฟ"}
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    className="toggle toggle-warning"
                    checked={light}
                    onChange={(e) => setLight(e.target.checked)}
                  />
                </div>
              </div>

              {/* ให้น้ำ */}
              <div className="card bg-base-200">
                <div className="card-body flex-row justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FaWater
                      className={`text-2xl ${
                        water ? "text-primary" : "text-base-content opacity-70"
                      }`}
                    />
                    <div>
                      <h3 className="font-bold">ให้น้ำ</h3>
                      <p className="text-sm opacity-70">
                        {water ? "กำลังให้น้ำ..." : "พร้อมให้น้ำ"}
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={handleWaterDispense}
                    disabled={water}
                  >
                    ให้น้ำ
                  </button>
                </div>
              </div>

              {/* ให้อาหาร */}
              <div className="card bg-base-200">
                <div className="card-body flex-row justify-between items-center">
                  <div className="flex items-center gap-3">
                    <IoFastFood
                      className={`text-2xl ${
                        food ? "text-warning" : "text-base-content opacity-70"
                      }`}
                    />
                    <div>
                      <h3 className="font-bold">ให้อาหาร</h3>
                      <p className="text-sm opacity-70">
                        {food ? "กำลังให้อาหาร..." : "พร้อมให้อาหาร"}
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn btn-warning"
                    onClick={handleFoodDispense}
                    disabled={food}
                  >
                    ให้อาหาร
                  </button>
                </div>
              </div>

              {/* ปล่อยกลิ่น */}
              <div className="card bg-base-200">
                <div className="card-body flex-row justify-between items-center">
                  <div className="flex items-center gap-3">
                    <MdAir
                      className={`text-2xl ${
                        scent
                          ? "text-secondary"
                          : "text-base-content opacity-70"
                      }`}
                    />
                    <div>
                      <h3 className="font-bold">ปล่อยความชื้น</h3>
                      <p className="text-sm opacity-70">
                        {scent ? "กำลังปล่อยความชื้น..." : "พร้อมปล่อยความชื้น"}
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn btn-secondary"
                    onClick={handleScentDispense}
                    disabled={scent}
                  >
                    ปล่อยกลิ่น
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamsterCageControl;
