import "./styles.css";
import data from "./data.js";
import Carousel from "./Carousel.js";

export default function App() {
  return (
    <div className="App">
      <Carousel data={data} />
    </div>
  );
}
