import { useEffect, useRef } from "react";
import images from "../../assets/images";
import "./Hero.css";
import useWindowSize from "../../hooks/useWindowsize";

const Hero = () => {
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <div ref={app}>
      <div
        ref={scrollContainer}
        className="mt-32 text-red-900 font-extrabold text-3xl flex items-center gap-6 flex-col"
      >
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
        <div className="w-28 h-28 bg-black">hello</div>
      </div>
    </div>
  );
};

export default Hero;
