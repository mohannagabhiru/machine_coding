import { useState } from "react";
import "./styles.css";
import item from "./Services";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    if (selectedIndex == index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <div className="container">
        {item.map((item, index) => (
          <div className="card" onClick={() => handleClick(index)}>
            <h2>{item.name}</h2>
            {selectedIndex === index && (
              <p className="desc">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
