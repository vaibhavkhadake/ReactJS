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
  it("should have input for email and password", () => {
    const wrapper = shallow(<Login />);
    //Email and password input field should be present
    expect(wrapper.find("#email")).toHaveLength(1);
    expect(wrapper.find("#password")).toHaveLength(1);
  });
  it("should have one button in login page", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("Button")).toHaveLength(1);
  });

  it("should have click on login button", () => {
    const wrapper = shallow(<Login />);
    const button = wrapper.find("Button");
    button.simulate("click");
    expect(wrapper.state("isLogined")).toBe(false);
  });
  it("should Button should be of type button", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("Button").type().defaultProps.type).toEqual("button");
  });
  it("Button should have matching text", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("Button").text()).toEqual("LOGIN");
  });

  it("should be possible to activate button with Spacebar", () => {
    const component = mount(<Login />);
    component.find("button").simulate("keydown", { keyCode: 32 });
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it("should respond to change event and change the state of the Login Component", () => {
    const wrapper = shallow(<Login />);
    wrapper.find("#email").simulate("change", {
      target: { name: "email", value: "admin@bridgelabz.com" }
    });

    expect(wrapper.state("email")).toEqual("admin@bridgelabz.com");
  });
  it("should respond to change event and change the state of the Login Component", () => {
    const wrapper = shallow(<Login />);
    wrapper.find("#password").simulate("change", {
      target: { name: "password", value: "123456789" }
    });

    expect(wrapper.state("password")).toEqual("123456789");
  });
  it("renders a email input", () => {
    expect(shallow(<Login />).find("#email").length).toEqual(1);
  });
  it("renders a password input", () => {
    expect(shallow(<Login />).find("#password").length).toEqual(1);
  });
  it("should render without throwing an error", () => {
    expect(
      shallow(<Login />)
        .find("form.login")
        .exists()
    ).toBe(false);
  });
});
