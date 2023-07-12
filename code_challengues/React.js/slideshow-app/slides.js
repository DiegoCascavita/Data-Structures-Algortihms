import React, { useState } from 'react';

function Slides({ slides }) {
  // Use state to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Event handler for the Restart button
  const handleRestart = () => {
    setCurrentSlide(0); // Set the current slide index to 0 (first slide)
  };

  // Event handler for the Next button
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1); // Increment the current slide index by 1
    }
  };

  // Event handler for the Prev button
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1); // Decrement the current slide index by 1
    }
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        {/* Restart button */}
        <button
          data-testid="button-restart"
          className={`small outlined ${currentSlide === 0 ? 'disabled' : ''}`}
          onClick={handleRestart}
          disabled={currentSlide === 0}>Restart</button>

        {/* Prev button */}
        <button
          data-testid="button-prev"
          className={`small ${currentSlide === 0 ? 'disabled' : ''}`}
          onClick={handlePrev}
          disabled={currentSlide === 0}>Prev</button>

        {/* Next button */}
        <button
          data-testid="button-next"
          className={`small ${currentSlide === slides.length - 1 ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
        >
          Next
        </button>
      </div>

      <div id="slide" className="card text-center">
        {/* Render the title and text of the current slide */}
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;


/*
The Slides component receives an array of slides as a prop ({ slides }).
We use the useState hook to define a state variable called currentSlide and its corresponding setter function setCurrentSlide. The initial value of currentSlide is set to 0, indicating the first slide.
The handleRestart function is an event handler for the Restart button. When clicked, it sets the currentSlide state back to 0, effectively restarting the slideshow.
The handleNext function is an event handler for the Next button. When clicked, it increments the currentSlide state by 1, but only if the current slide is not the last slide. This prevents going beyond the last slide in the array.
The handlePrev function is an event handler for the Prev button. When clicked, it decrements the currentSlide state by 1, but only if the current slide is not the first slide. This prevents going before the first slide in the array.
The JSX code inside the return statement defines the structure of the slideshow component:
The navigation section contains the Restart, Prev, and Next buttons. The className and disabled attributes are conditionally set based on the current slide index.
The slide section displays the title and text of the current slide, fetched from the slides array using the currentSlide index.
The Slides component is exported as the default export.
*/