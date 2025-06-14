import {describe,it,expect} from "vitest";
import {mount} from "@vue/test-utils";
import Icon from "../src/icon.vue";

describe('Icon.vue', () => {
    it('create', () => {
      const wrapper = mount(() => <Icon icon="z-icon-file-delete" />)
      expect(wrapper.classes()).toContain('z-icon-file-delete')
    })

})




