import { mountComponent } from '@/utils/tests'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('updates counter on button click', async () => {
    const wrapper = mountComponent(HelloWorld, { msg: 'Test' })
    const button = wrapper.find('button')

    expect(button.text()).toContain('0')
    await button.trigger('click')

    expect(button.text()).toContain('1')
  })
})
