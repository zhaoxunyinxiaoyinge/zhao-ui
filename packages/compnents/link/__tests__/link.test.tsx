import {describe,it,expect} from "vitest";
import {mount} from "@vue/test-utils";
import Links from "../src/link.vue";


describe("link.vue",()=>{
  it("create",()=>{
    const wrapper = mount(() => <Links type="primary" ></Links>)
    expect(wrapper.classes()).toContain("el-link--primary");
    const wrapperS = mount(() => <Links type="danger" ></Links>)
    expect(wrapperS.classes()).toContain("el-link--danger");
    const wrapperT = mount(() => <Links type="success" ></Links>)
    expect(wrapperT.classes()).toContain("el-link--success");
    const wrapperI = mount(() => <Links type="info" disabled></Links>)
    expect(wrapperI.classes()).toContain("el-link--info");
    expect(wrapperI.classes()).toContain("is-disabled");
    const wrapperU = mount(() => <Links type="info" underline></Links>)
    expect(wrapperU.classes()).toContain("is-underline");
    const wrapperIcon = mount(() => <Links type="info" icon="el-icon-search"></Links>)
    expect(wrapperIcon.find(".el-icon-search").exists()).toBe(true);

    const wrapperHref = mount(() => <Links type="info" href="https://www.example.com"></Links>)
    expect(wrapperHref.find("a").exists()).toBe(true);
    expect(wrapperHref.find("a").attributes("href")).toBe("https://www.example.com");
  })
})