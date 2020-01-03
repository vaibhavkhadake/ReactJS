import React from "react";
import { shallow, mount } from "enzyme";

import Login from "../Component/Login";

describe("Login", () => {
  it('should render correctly in "debug" mode ', () => {
    const wrapper = shallow(<Login debug />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have an empty email and password state var", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state("email")).toEqual("");
    expect(wrapper.state("password")).toEqual("");
  });

  it("should have click on login button", () => {
    const wrapper = shallow(<Login />);
    const button = wrapper.find("Button");
    button.simulate("click");
    expect(wrapper.state("isLogined")).toBe(false);
  });
  it("should be possible to activate button with Spacebar", () => {
    const component = mount(<Login />);
    component.find("button").simulate("keydown", { keyCode: 32 });
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
