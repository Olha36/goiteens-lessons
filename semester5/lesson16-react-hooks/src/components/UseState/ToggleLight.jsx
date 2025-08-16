import { useState } from "react";

export default function LightSwitch() {
  const [isOn, setIsOn] = useState(true); // назва першопочаткового стану + оновлений стан з set + назва першпочаткового стану
  // isOn = жовтий фон: setIsOn = синій фон(новий)
  return (
    <div style={{ background: isOn ? "yellow" : "blue", padding: "20px" }}>
      <p style={{ color: isOn ? "black" : 'white' }}>Світло {isOn ? 'ввімкнено' : 'вимкнено'}</p>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "Увімкнути" : "Вимкнути"}</button>
    </div>
  );
}
