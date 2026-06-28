import {
  handlePresetNavClick,
  presetNavHref,
  resolveNavTarget,
} from '../lib/preset-site-routing';
import { HERO_TAGLINE, NAV_LINKS, RAGUL_LOGO, THREE_D_FACE_URL } from '../constants';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-x-clip">
      <FadeIn as="nav" className="relative z-20" delay={0} y={-20}>
        <div className="flex items-center justify-between px-5 pt-5 text-mist sm:px-8 md:px-10 md:pt-8">
          <a
            href={presetNavHref(resolveNavTarget('Home', { section: 'hero' }))}
            className="flex items-center gap-3"
            onClick={(e) => handlePresetNavClick(e, resolveNavTarget('Home', { section: 'hero' }))}
          >
            <span className="h-10 w-10 overflow-hidden rounded-full border border-white/25">
              <img
                src={RAGUL_LOGO}
                alt="Ragul"
                className="h-full w-full scale-[1.8] object-cover object-[50%_34%]"
              />
            </span>
            <span className="text-2xl font-black uppercase tracking-widest md:text-3xl">Ragul</span>
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wider md:flex lg:gap-12 lg:text-[1rem]">
            {NAV_LINKS.slice(1).map((link) => {
              const target = resolveNavTarget(link.label, { section: link.section });
              return (
                <li key={link.label}>
                  <a
                    href={presetNavHref(target)}
                    className="transition-colors duration-200 hover:text-cyan-200"
                    onClick={(e) => handlePresetNavClick(e, target)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </FadeIn>

      <FadeIn className="relative z-10 mt-6 overflow-hidden sm:mt-4 md:-mt-5" delay={0.15} y={40}>
        <h1 className="hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m Ragul
        </h1>
      </FadeIn>

      <Magnet
        className="absolute left-1/2 z-10 w-[280px] -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 sm:w-[360px] md:w-[440px] lg:w-[520px]"
        padding={150}
        strength={3}
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src={THREE_D_FACE_URL}
            alt="3D creator face"
            className="h-auto w-full object-contain"
            draggable={false}
          />
        </FadeIn>
      </Magnet>

      <FadeIn
        className="pointer-events-none relative z-10 mt-6 overflow-hidden md:mt-10"
        delay={0.8}
        y={20}
      >
        <div className="hero-marquee whitespace-nowrap text-[clamp(2rem,8vw,6.8rem)] font-black uppercase leading-none text-white/10">
          <span>{HERO_TAGLINE}</span>
          <span>{HERO_TAGLINE}</span>
        </div>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-mist sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            AI engineer building machine learning, automation, backend, and creative web experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
