import Enzyme from "enzyme";
import React from "react";

import { DropdownTrigger } from "../dropdown-trigger";

import { hasProperties, shallowInContext } from "@/__tests__/helpers";
import { contextFactory } from "./helpers";

describe("DropdownTrigger component", () => {
  hasProperties(DropdownTrigger, {
    defaultProps: { as: "div" },
  });

  it("should render as the default component", () => {
    const wrapper = shallowInContext(DropdownTrigger, contextFactory(), {});
    expect(wrapper.is("div")).toBe(true);
  });

  it("should render as a custom component", () => {
    const as = "span";
    const wrapper = shallowInContext(DropdownTrigger, contextFactory(), { as });
    expect(wrapper.is(as)).toBe(true);
  });

  it("should forward ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    // Enzyme owns outer ref: https://github.com/airbnb/enzyme/issues/1852
    const wrapper = Enzyme.mount(
      <div>
        <DropdownTrigger ref={ref} />
      </div>,
    );
    try {
      expect(ref.current).toBe(wrapper.find(".dropdown-trigger").instance());
    } finally {
      wrapper.unmount();
    }
  });

  it("should have bulma className", () => {
    const wrapper = shallowInContext(DropdownTrigger, contextFactory(), {});
    expect(wrapper.hasClass("dropdown-trigger")).toBe(true);
  });

  it("should preserve custom className", () => {
    const className = "foo";
    const wrapper = shallowInContext(DropdownTrigger, contextFactory(), {
      className,
    });
    expect(wrapper.hasClass(className)).toBe(true);
  });

  it("should call provided onClick and setActive", () => {
    const onClick = jest.fn();
    const setActive = jest.fn();
    const wrapper = shallowInContext(
      DropdownTrigger,
      contextFactory({ active: false, setActive }),
      { onClick },
    );
    wrapper.simulate("click");
    expect(onClick.mock.calls).toHaveLength(1);
    expect(setActive.mock.calls).toHaveLength(1);
    expect(setActive.mock.calls[0]).toEqual([true]);
  });
});