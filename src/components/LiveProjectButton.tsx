type LiveProjectButtonProps = {
  className?: string;
  label?: string;
  onClick?: () => void;
};

export function LiveProjectButton({ className = '', label = 'Live Project', onClick }: LiveProjectButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-full border-2 border-mist px-8 py-3 text-sm font-medium uppercase tracking-widest text-mist transition-colors hover:bg-mist/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
      onClick={onClick ?? (() => window.open('https://github.com/pradhivetommy-droid', '_blank', 'noopener,noreferrer'))}
    >
      {label}
    </button>
  );
}
