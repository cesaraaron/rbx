import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type NavbarBrandOwnProps = HelpersProps;
export type NavbarBrandForwardsProps = { className: string };

export const NavbarBrand = forwardRefAs<
  "div",
  NavbarBrandOwnProps,
  NavbarBrandForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("navbar-brand", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

NavbarBrand.displayName = "Navbar.Brand";
