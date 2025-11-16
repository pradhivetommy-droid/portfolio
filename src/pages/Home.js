import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import "./Home.css";

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

  
    gsap.fromTo(
      slider.current,
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: slider.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

 
    gsap.to(slider.current, {
      x: "-300px",
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.1,
        start: 0,
        end: window.innerHeight,
      },
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.045 * direction;
  };

  return (
   <section id='home' className="relative flex h-[60vh] overflow-hidden home-section">

      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>Ragul ‧ AI Engineer ‧ Creative Technologist ‧ </p>
          <p ref={secondText}>Ragul ‧ AI Engineer ‧ Creative Technologist ‧</p>
        </div>
      </div>
    </section>
  );
}
