import { STORAGE_KEYS } from "@/lib/preferences";

export function ThemeScript() {
  const script = `
(function () {
  try {
    var theme = localStorage.getItem("${STORAGE_KEYS.theme}");
    var locale = localStorage.getItem("${STORAGE_KEYS.locale}");
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    if (locale === "en" || locale === "es" || locale === "de") {
      document.documentElement.lang = locale;
    }
  } catch (e) {}
})();
`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
