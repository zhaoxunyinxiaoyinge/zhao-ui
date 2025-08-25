import {describe,it,expect} from "vitest";
import {mount} from "@vue/test-utils";
import Button from "../src/buttons.vue";

describe('Button.vue 组件测试', () => {
    it('button type 类型测试', () => {
      const wrapper = mount(() => <Button type="primary" />)
      expect(wrapper.classes()).toContain('el-button--primary')

      const wrapperT = mount(() => <Button type="danger" />)
      expect(wrapperT.classes()).toContain('el-button--danger')

      const wrappeS = mount(() => <Button type="success" />)
      expect(wrappeS.classes()).toContain('el-button--success');

      
      const wrappeW = mount(() => <Button type="warning" />)
      expect(wrappeW.classes()).toContain('el-button--warning');

      const wrappeI = mount(() => <Button type="info" />)
      expect(wrappeI.classes()).toContain('el-button--info');

      const wrappeD = mount(() => <Button />)
      expect(wrappeD.classes()).toContain('el-button--default');

      
    })

    it('button 按钮大小 测试', () => {
      const wrappeSm = mount(() => <Button size="small"  />)
      expect(wrappeSm.classes()).toContain('el-button--small');

      const wrappeL = mount(() => <Button size="large"  />)
      expect(wrappeL.classes()).toContain('el-button--large');
    })

    it('button 按钮状态 测试', () => {
      const wrapper = mount(() => <Button disabled />)
      expect(wrapper.classes()).toContain('is-disabled')
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('button 按钮点击事件 测试', async () => {
      const wrapper = mount(Button,{
        slots:{
          default: () => 'Click me'
        }
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted("click")).toBeTruthy()
      })
    it("button 按钮的链接测试",()=>{
      const wrapper = mount(Button,{
        props:{
          href:"https://www.example.com",
          tag:"a"
        }
      })
      expect(wrapper.element.tagName).toBe("A")
      expect(wrapper.attributes('href')).toBe("https://www.example.com");
    })

    it("button 按钮的插槽测试",()=>{
      const wrapper = mount(Button,{
        slots:{
          default: () => 'Click me'
        }
      })
      expect(wrapper.text()).toContain('Click me')
    }) 

  })

