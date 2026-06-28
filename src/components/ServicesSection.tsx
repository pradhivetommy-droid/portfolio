import { Star } from 'lucide-react';
import { SKILLS } from '../constants';
import { FadeIn } from './FadeIn';

function ratingToStars(percent: number) {
  return Math.round((percent / 100) * 5);
}

export function ServicesSection() {
  return (
    <section
      id="skills"
      className="relative z-10 rounded-t-[40px] bg-white px-5 py-20 text-canvas sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="mb-4 text-center font-black uppercase text-canvas"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Skills
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-center text-lg font-medium text-canvas/55 md:mb-20 md:text-2xl">
        Technologies I know and use for front-end, programming, automation, and AI work.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:gap-8 md:grid-cols-3">
        {SKILLS.map((item, i) => (
          <FadeIn
            key={item.label}
            className="skill-card"
            delay={i * 0.1}
          >
            <div className="skill-card-inner">
              <div className="skill-card-front">
                <img src={item.img} alt={item.label} className="h-28 w-28 object-contain md:h-36 md:w-36" />
              </div>
              <div className="skill-card-back">
                <h3 className="text-2xl font-black uppercase md:text-3xl">{item.label}</h3>
                <div className="mt-4 flex gap-1 text-3xl text-amber-400" aria-label={`${ratingToStars(item.percent)} out of 5 stars`}>
                  {Array.from({ length: ratingToStars(item.percent) }).map((_, index) => (
                    <Star key={index} className="h-7 w-7 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
