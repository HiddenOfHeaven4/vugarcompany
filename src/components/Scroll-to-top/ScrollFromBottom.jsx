import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import "./index.css";

export const ScrollFromBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="scroll__container">
        <button
          type="button"
          onClick={scrollToTop}
          className={
            isVisible ? "button-opacity scroll__btn" : "button-normal "
          }
          aria-label="Scroll to the Top"
        >
          <BiArrowFromBottom className="scroll__btn--icon" aria-hidden="true" />
        </button>
      </div>
    </>
  );
};
