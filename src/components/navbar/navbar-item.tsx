import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs } from "../../base";
import { Omit } from "../../types";
import {
  NavbarItemContainer,
  NavbarItemContainerForwardsProps,
  NavbarItemContainerOwnProps,
} from "./navbar-item-container";

export type NavbarItemOwnProps = Omit<
  NavbarItemContainerOwnProps,
  "as" | "innerRef"
>;
export type NavbarItemForwardsProps = NavbarItemContainerForwardsProps;

export const NavbarItem = Object.assign(
  forwardRefAs<"a", NavbarItemOwnProps, NavbarItemForwardsProps>(
    (props, ref) => <NavbarItemContainer innerRef={ref} {...props} />,
    { as: "a" },
  ),
  { Container: NavbarItemContainer },
);

NavbarItem.displayName = "Navbar.Item";
NavbarItem.propTypes = {
  active: PropTypes.bool,
  dropdown: PropTypes.bool,
  expanded: PropTypes.bool,
  hoverable: PropTypes.bool,
  managed: PropTypes.bool,
  onClick: PropTypes.func,
  tab: PropTypes.bool,
  up: PropTypes.bool,
};
