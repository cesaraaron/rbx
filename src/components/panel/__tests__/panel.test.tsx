import Enzyme from "enzyme";
import React from "react";

import { Panel } from "../panel";
import { PanelBlock } from "../panel-block";
import { PanelHeading } from "../panel-heading";
import { PanelIcon } from "../panel-icon";
import { PanelTabs } from "../panel-tabs";

import { hasProperties } from "@/__tests__/helpers";

describe("Panel component", () => {
  hasProperties(Panel, {
    Block: PanelBlock,
    Heading: PanelHeading,
    Icon: PanelIcon,
    Tabs: PanelTabs,
    defaultProps: { as: "nav" },
  });

  it("should render as the default element", () => {
    const wrapper = Enzyme.shallow(<Panel />);
    expect(wrapper.is("nav")).toBe(true);
  });

  it("should render as a custom component", () => {
    const as = "span";
    const wrapper = Enzyme.shallow(<Panel as={as} />);
    expect(wrapper.is(as)).toBe(true);
  });

  it("should forward ref", () => {
    const ref = React.createRef<HTMLElement>();
    // Enzyme owns outer ref: https://github.com/airbnb/enzyme/issues/1852
    const wrapper = Enzyme.mount(
      <div>
        <Panel ref={ref} />
      </div>,
    );
    try {
      expect(ref.current).toBe(wrapper.find(".panel").instance());
    } finally {
      wrapper.unmount();
    }
  });

  it("should have bulma className", () => {
    const wrapper = Enzyme.shallow(<Panel />);
    expect(wrapper.hasClass("panel")).toBe(true);
  });

  it("should preserve custom className", () => {
    const className = "foo";
    const wrapper = Enzyme.shallow(<Panel className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });
});