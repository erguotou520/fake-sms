export function autoTheme() {
  // set theme based on system preference && watch for changes
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const root = document.documentElement;
  root.classList.toggle('dark', prefersDark);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    root.classList.toggle('dark', e.matches);
  })
}
