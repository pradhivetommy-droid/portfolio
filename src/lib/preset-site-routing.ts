type NavTarget = {
  section: string;
};

export function resolveNavTarget(_label: string, target: NavTarget): NavTarget {
  return target;
}

export function presetNavHref(target: NavTarget) {
  return `#${target.section}`;
}

export function navigateToSection(section: string) {
  const element = document.getElementById(section);

  if (!element) {
    window.location.hash = section;
    return;
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.pushState(null, '', `#${section}`);
}

export function handlePresetNavClick(
  event: { preventDefault: () => void },
  target: NavTarget
) {
  event.preventDefault();
  navigateToSection(target.section);
}

export function applyPresetHashOnLoad() {
  const section = window.location.hash.slice(1);

  if (!section) {
    return;
  }

  requestAnimationFrame(() => navigateToSection(section));
}
