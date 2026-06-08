import { useState, useRef, useCallback } from "react";

const BeforeAfterCard = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percent);
  }, []);

  const startDrag = (e) => {
    isDragging.current = true;
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    updateSlider(e.clientX);
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const onTouchMove = (e) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220px] md:h-[300px] overflow-hidden rounded-xl select-none cursor-col-resize"
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchMove={onTouchMove}
    >
      {/* AFTER — full background */}
      <img
        src={after}
        alt="After"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BEFORE — clipped left portion, same container width so object-cover aligns */}
      <div
        className="absolute top-0 left-0 bottom-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div
          className="absolute top-0 left-0 bottom-0"
          style={{
            width:
              containerRef.current ?
                `${containerRef.current.offsetWidth}px`
              : "100vw",
          }}
        >
          <img
            src={before}
            alt="Before"
            draggable={false}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-md z-10 pointer-events-none"
        style={{ left: `calc(${sliderPos}% - 1px)` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center cursor-col-resize"
        style={{ left: `${sliderPos}%`, transform: "translate(-50%, -50%)" }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
      >
        {/* Left-right arrows */}
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="#3BAFDA"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l-6-6 6-6" />
          <path d="M15 6l6 6-6 6" />
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute top-2 left-2 z-10 pointer-events-none bg-black/50 text-white text-[10px] font-bold px-2 py-0.5 rounded">
        BEFORE
      </span>
      <span className="absolute top-2 right-2 z-10 pointer-events-none bg-[#3BAFDA] text-white text-[10px] font-bold px-2 py-0.5 rounded">
        AFTER
      </span>
    </div>
  );
};

export default BeforeAfterCard;
