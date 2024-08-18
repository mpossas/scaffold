import { createI18n } from 'vue-i18n'
import en from './messages/en.json'
import pt from './messages/pt.json'

export default createI18n({
  locale: window.navigator.language,
  fallbackLocale: 'en',
  messages: {
    en,
    pt
  },
  legacy: false
})
