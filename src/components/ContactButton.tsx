import { navigateToSection } from '../lib/preset-site-routing';

type ContactButtonProps = {
  className?: string;
};

export function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform hover:scale-[1.02] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background: 'linear-gradient(123deg, #00141F 7%, #00A6C8 37%, #6D3BFF 72%, #FF4081 100%)',
        boxShadow:
          '0px 4px 24px rgba(0, 234, 255, 0.28), inset 4px 4px 12px rgba(255, 255, 255, 0.16)',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
      onClick={() => navigateToSection('contact')}
    >
      Start a New Project
    </button>
  );
}
