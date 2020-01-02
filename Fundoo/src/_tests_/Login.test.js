import React from "react";
import { shallow } from "enzyme";
import GooglePassword from "../GoogleLogin/GooglePassword";
// import { validateEmailAndPasswordPresense } from "../extra/validations";
describe("Login component tests", () => {
  const wrapper = shallow(<GooglePassword />);
  it("should have input for email and password", () => {
    expect(wrapper.find("input#username")).toHaveLength(1);
    expect(wrapper.find("input#password")).toHAveLength(1);
  });
  it("should have an empty email and password state var", () => {
    //Optionally test to check if password and email are empty strings on
    setup;
    expect(wrapper.state("username")).toEqual("");
    expect(wrapper.state("password")).toEqual("");
  });
});
