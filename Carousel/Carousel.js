import { useState, useEffect, useRef } from "react";

const Carousel = ({ data }) => {
  const [activeElement, setActiveElement] = useState(0);
  const interval = useRef(null);
  useEffect(() => {
    startCarousel();
    return () => {
      if (interval.current) {
        clearInterval1(interval.current);
      }
    };
  }, []);

  const startCarousel = () => {
    interval.current = setInterval(() => {
      setActiveElement((activeElement) => {
        if (activeElement === data.length - 1) {
          return 0;
        } else {
          return activeElement + 1;
        }
      });
    }, 5000);
  };

  console.log("activeElement", activeElement);

  const clearInterval1 = () => {
    clearInterval(interval.current);
  };

  const handleNext = () => {
    clearInterval1(interval.current);
    setActiveElement((activeElement) => {
      if (activeElement === data.length - 1) {
        return 0;
      } else {
        return activeElement + 1;
      }
    });
  };

  const handlePrevious = () => {
    clearInterval1(interval.current);
    setActiveElement((activeElement) => {
      if (activeElement === data.length - 1) {
        return 0;
      } else {
        return activeElement - 1;
      }
    });
  };

  return (
    <div style={{ height: "100%", backgroundColor: "black" }}>
      <img
        src={data[activeElement].image}
        style={{ width: "100%", height: "50%" }}
        onMouseLeave={startCarousel}
        onMouseEnter={clearInterval1}
      />
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
