import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type NavbarDividerOwnProps = HelpersProps;
export type NavbarDividerForwardsProps = { className: string };

export const NavbarDivider = forwardRefAs<
  "div",
  NavbarDividerOwnProps,
  NavbarDividerForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("navbar-divider", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

NavbarDivider.displayName = "Navbar.Divider";
