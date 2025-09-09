import { useEffect, useRef, useState } from "react";
import './Slider.css'

export default function RecommendationsCarousel({ data }) {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // default desktop
  const trackRef = useRef();
  const length = data.length;

  // Adjust visible cards based on screen size
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // tablet
      } else {
        setVisibleCards(3); // desktop
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  // Update transform on index change
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${
        (index * 100) / visibleCards
      }%)`;
    }
  }, [index, visibleCards]);

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Recommendations
        </h2>

        {/* Carousel container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            ref={trackRef}
            style={{ width: `${(length * 100) / visibleCards}%` }}
          >
            {data.map((rec, i) => (
              <div
                key={i}
                className="p-4 w-full"
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
              >
                <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 whitespace-pre-line">
                    “{rec.text}”
                  </p>
                  <div>
                    <h3 className="font-bold text-lg">{rec.author}</h3>
                    <p className="text-sm text-gray-600">{rec.role}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {rec.relation} • {rec.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(length / visibleCards) }).map(
            (_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i * visibleCards)}
                className={`h-2 w-2 rounded-full ${
                  index >= i * visibleCards && index < (i + 1) * visibleCards
                    ? "bg-gray-800"
                    : "bg-gray-400"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
