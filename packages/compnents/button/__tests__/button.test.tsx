import {describe,it,expect} from "vitest";
import {mount} from "@vue/test-utils";
import Button from "./../index";

describe('Button.vue', () => {
    it('create', () => {
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

      const wrappeSm = mount(() => <Button size="small"  />)
      expect(wrappeSm.classes()).toContain('el-button--small');

      const wrappeL = mount(() => <Button size="large"  />)
      expect(wrappeL.classes()).toContain('el-button--large');
    })

})




