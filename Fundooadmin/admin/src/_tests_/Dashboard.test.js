import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../Component/Dashboard";

describe("Dashboard Component", () => {
  it("should render correctly in 'debug' mode ", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });

  //   it("button click should hide component", () => {
  //     const component = mount(<Dashboard onClick={clickFn} />);
  //     component.find("Button#my-button-two").simulate("click");
  //     expect(clickFn).toHaveBeenCalled();
  //   });
  //   it("should have click on login button", () => {
  //     const wrapper = mount(<Dashboard />);
  //     const button = wrapper.find("Button");
  //     button.simulate("click");
  //   });
});
