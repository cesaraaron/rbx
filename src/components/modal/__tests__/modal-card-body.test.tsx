import Enzyme from "enzyme";
import React from "react";

import { ModalCardBody } from "../modal-card-body";

import { hasProperties, testGenericPropTypes } from "../../../__tests__/testing";

describe("ModalCardBody component", () => {
  hasProperties(ModalCardBody, {
    defaultProps: { as: "section" },
  });

  it("should render as the default element", () => {
    const wrapper = Enzyme.shallow(<ModalCardBody />);
    expect(wrapper.is("section")).toBe(true);
  });

  it("should render as a custom component", () => {
    const as = "span";
    const wrapper = Enzyme.shallow(<ModalCardBody as={as} />);
    expect(wrapper.is(as)).toBe(true);
  });

  it("should forward ref", () => {
    const ref = React.createRef<HTMLElement>();
    // Enzyme owns outer ref: https://github.com/airbnb/enzyme/issues/1852
    const wrapper = Enzyme.mount(
      <div>
        <ModalCardBody ref={ref} />
      </div>,
    );
    try {
      expect(ref.current).toBe(wrapper.find(".modal-card-body").instance());
    } finally {
      wrapper.unmount();
    }
  });

  it("should have bulma className", () => {
    const wrapper = Enzyme.shallow(<ModalCardBody />);
    expect(wrapper.hasClass("modal-card-body")).toBe(true);
  });

  it("should preserve custom className", () => {
    const className = "foo";
    const wrapper = Enzyme.shallow(<ModalCardBody className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });

  describe("propTypes", () => {
    const { propTypes } = ModalCardBody;
    testGenericPropTypes(propTypes);
  });
});