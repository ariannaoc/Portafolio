import React, { useState, useEffect } from "react";

function Carousel({ images }) {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setIndex((index + 1) % images.length);
    };

    const handleSwipe = (direction) => {
        if (direction === "left") {
            handleNext();
        } else if (direction === "right") {
            handlePrev();
        }
    };

    useEffect(() => {
        const handleTouchStart = (e) => {
            const touchStartX = e.touches[0].clientX;
            const handleTouchMove = (e) => {
                const touchEndX = e.touches[0].clientX;
                const distance = touchStartX - touchEndX;
                if (distance > 50) {
                    handleSwipe("left");
                } else if (distance < -50) {
                    handleSwipe("right");
                }
                window.removeEventListener("touchmove", handleTouchMove);
            };
            window.addEventListener("touchmove", handleTouchMove);
        };
        window.addEventListener("touchstart", handleTouchStart);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return (
        <div className="carousel-container m-auto flex justify-center sm:block md:block">
            <button
                className="carousel-arrow opacity-75 rounded-full h-fit my-auto hidden lg:block" 
                onClick={handlePrev}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 dark:stroke-bunker-200 h-10 w-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <div className="carousel-image-container">
                <img
                    src={images[index]}
                    className="carousel-image w-auto sm:h-64 lg:h-72 xl:h-72 rounded-xl shadow-xl"
                    alt={`Image ${index + 1}`} 
                />
                <div className="carousel-indicators flex justify-center mt-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            className={`carousel-indicator w-3 h-3 mx-1 rounded-full border-2 border-bunker-900 ${
                                i === index ? "bg-bunker-600 dark:bg-bunker-400 " : "bg-bunker-50 dark:bg-bunker-800"
                            }`}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to image ${i + 1}`} 
                        ></button>
                    ))}
                </div>
            </div>
            <button
                className="carousel-arrow opacity-75 rounded-full h-fit my-auto hidden lg:block"
                onClick={handleNext}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 dark:stroke-bunker-200 w-10 h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
}

export default Carousel;