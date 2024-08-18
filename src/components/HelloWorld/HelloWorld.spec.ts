import { useBaseStore } from '@/store'
import { mountComponent } from '@/utils/tests'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('updates counter on button click', async () => {
    const wrapper = mountComponent(HelloWorld, { msg: 'Test' })
    const store = useBaseStore()
    const button = wrapper.find('button')

    expect(store.count).toBe(0)
    await button.trigger('click')

    expect(store.count).toBe(1)
  })
})
