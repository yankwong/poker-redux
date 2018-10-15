import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// shallowMount only mounts 1 component, won't mount children
// components
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });

    expect(wrapper.text()).to.include(msg)
  });

  it('should increment the counter', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    let incrementBtn = wrapper.find('.increment-btn');

    expect(wrapper.vm.counter).to.equal(0);
    incrementBtn.trigger('click');
    expect(wrapper.vm.counter).to.equal(1);
  });
})
