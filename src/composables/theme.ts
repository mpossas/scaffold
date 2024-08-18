import { onMounted, onUnmounted } from 'vue'

export const useColorTheme = () => {
  const colorTheme = window.matchMedia('(prefers-color-scheme: dark)')

  const setColorTheme = (prefersDark = colorTheme.matches) => {
    document.body.dataset.theme = prefersDark ? 'dark' : 'light'
  }

  const handleThemeChange = (e: MediaQueryListEvent) => setColorTheme(e.matches)

  onMounted(() => colorTheme.addEventListener('change', handleThemeChange))
  onUnmounted(() => colorTheme.removeEventListener('change', handleThemeChange))

  return { setColorTheme }
}
