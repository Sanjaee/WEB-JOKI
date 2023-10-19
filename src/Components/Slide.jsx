import React, { useEffect, useState } from "react";
import { fetchProductData } from "../utils/firebase";

// SkeletonLoader component
const SkeletonLoader = () => (
  <div className="skeleton-loader">
    <div className="skeleton-image"></div>
  </div>
);

export default function Slide() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index
  const [activeDot, setActiveDot] = useState(0); // Track the active dot index

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProductData();
      setProducts(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Function to increment the current slide index
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % products.length;
    setCurrentSlide(nextIndex);
    setActiveDot(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + products.length) % products.length;
    setCurrentSlide(prevIndex);
    setActiveDot(prevIndex);
  };

  // Function to handle dot clicks
  const handleDotClick = (dotIndex) => {
    setCurrentSlide(dotIndex);
    setActiveDot(dotIndex);
  };

  useEffect(() => {
    if (!isLoading && products.length > 0) {
      // Automatically switch to the next slide every 3 seconds
      const slideInterval = setInterval(nextSlide, 3000);

      return () => clearInterval(slideInterval);
    }
  }, [isLoading, products, currentSlide]);

  return (
    <div className="flex items-center justify-center">
      <div
        className="mt-9 max-w-screen-lg mx-auto"
        style={{ overflow: "hidden" }}
      >
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className="relative">
            <div
              className="slider"
              style={{
                width: `${100 * products.length}%`,
                transform: `translateX(-${
                  currentSlide * (100 / products.length)
                }%)`,
                transition: "transform 1s",
              }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  style={{
                    width: `${100 / products.length}%`,
                    display: "inline-block",
                  }}
                >
                  <img
                    src={product.image}
                    alt={`image ${index + 1}`}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              {products.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeDot ? "active-dot" : ""}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4">
              <button
                onClick={prevSlide}
                className="text-4xl font-bold text-white hover:text-black"
                disabled={isLoading || products.length <= 1}
              >
                {"<"}
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
              <button
                onClick={nextSlide}
                className=" text-4xl font-bold text-white hover:text-black"
                disabled={isLoading || products.length <= 1}
              >
                {">"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
