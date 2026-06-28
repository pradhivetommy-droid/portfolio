import { ABOUT_TEXT, RAGUL_IMAGE } from '../constants';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      <img
        src={RAGUL_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,12,0.92),rgba(12,12,12,0.62),rgba(12,12,12,0.92))]" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn delay={0.1} x={-40} y={0}>
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-200">
              Info
            </p>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(4rem, 13vw, 170px)' }}
            >
              Ragul
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0} y={40}>
          <div className="max-w-3xl rounded-[32px] border border-white/15 bg-black/45 p-6 backdrop-blur-md sm:p-8 md:p-10">
            <AnimatedText
              text={ABOUT_TEXT}
              className="text-[clamp(1.15rem,2.5vw,2rem)] font-medium leading-relaxed text-mist"
            />

            <div className="pt-8">
              <ContactButton />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
