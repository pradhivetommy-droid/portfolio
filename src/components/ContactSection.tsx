import { ArrowDownRight, Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACTS, SOCIAL_LINKS } from '../constants';
import { FadeIn } from './FadeIn';

const iconMap = {
  Email: Mail,
  Phone,
  LinkedIn: Linkedin,
  Instagram,
  Github,
  'Twitter / X': ArrowDownRight,
} as const;

function ContactLink({
  label,
  value,
  url,
}: {
  label: keyof typeof iconMap;
  value: string;
  url: string;
}) {
  const Icon = iconMap[label];

  return (
    <a
      href={url}
      target={url.startsWith('mailto:') ? undefined : '_blank'}
      rel={url.startsWith('mailto:') ? undefined : 'noreferrer'}
      className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-white/15 py-5 text-mist transition-colors hover:text-white"
    >
      <Icon className="h-5 w-5 text-cyan-200 transition-transform group-hover:scale-110" />
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-mist/45">{label}</p>
        <p className="mt-1 break-words text-lg font-semibold">{value}</p>
      </div>
      <ArrowDownRight className="h-5 w-5 -rotate-45 transition-transform group-hover:rotate-0" />
    </a>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="footer-neon-bg px-5 py-16 text-white sm:px-8 md:px-10 md:py-24">
      <FadeIn>
        <div className="overflow-hidden pb-10 md:pb-16">
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none">
            Wanna start a
          </h2>
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none md:pl-[24vw]">
            new project?
          </h2>
        </div>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-3">
        <FadeIn className="min-h-[320px]" delay={0.05}>
          <div className="mb-4 flex items-center gap-3 text-2xl font-semibold text-gray-200">
            <MapPin className="h-6 w-6 text-cyan-200" />
            Location
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.247667988714!2d78.5148491!3d11.2659659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babafa93669852b%3A0xa055b283fa41c397!2sUppiliapuram%2C%20Tamil%20Nadu%20621011!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="300"
            title="Uppiliapuram, Tamil Nadu location map"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] w-full rounded-[24px] shadow-2xl"
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <h3 className="mb-4 text-2xl font-semibold text-gray-200">Contacts</h3>
          {CONTACTS.map((item) => (
            <ContactLink key={item.label} {...item} />
          ))}
        </FadeIn>

        <FadeIn delay={0.25}>
          <h3 className="mb-4 text-2xl font-semibold text-gray-200">Social</h3>
          {SOCIAL_LINKS.map((item) => (
            <ContactLink key={item.label} {...item} />
          ))}
        </FadeIn>
      </div>

      <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-sm font-medium text-white/75 md:flex-row">
        <span>@2026 India</span>
        <span>Developed by: Ragul</span>
      </div>
    </section>
  );
}
