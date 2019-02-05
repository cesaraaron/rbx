import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { NavbarContext } from "./navbar-context";

export type NavbarMenuOwnProps = HelpersProps;
export type NavbarMenuForwardsProps = { className: string };

export const NavbarMenu = forwardRefAs<
  "div",
  NavbarMenuOwnProps,
  NavbarMenuForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <NavbarContext.Consumer>
      {({ active }) => (
        <Generic
          className={classNames(
            "navbar-menu",
            { "is-active": active },
            className,
          )}
          ref={ref}
          {...rest}
        />
      )}
    </NavbarContext.Consumer>
  ),
  { as: "div" },
);

NavbarMenu.displayName = "Navbar.Menu";
