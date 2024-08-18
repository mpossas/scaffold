import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import i18n from '@/config/i18n'

export const mountComponent = (
  Component: object,
  props?: Record<string, unknown>
) => {
  return mount(Component, {
    props,
    global: {
      plugins: [i18n, createTestingPinia({ stubActions: false })]
    }
  })
}
