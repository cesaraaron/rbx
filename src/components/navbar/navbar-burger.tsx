import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { NavbarContext, NavbarContextValue } from "./navbar-context";

export type NavbarBurgerModifierProps = Partial<{
  onClick: React.MouseEventHandler;
}>;

export type NavbarBurgerOwnProps = HelpersProps & NavbarBurgerModifierProps;
export type NavbarBurgerForwardsProps = {
  children: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler;
  role: string;
};

const onClickHandler = (
  onClick: NavbarBurgerOwnProps["onClick"] | undefined,
  ctx: NavbarContextValue,
) => (event: React.MouseEvent) => {
  if (onClick !== undefined) {
    onClick(event);
  }
  ctx.setActive(!ctx.active);
};

export const NavbarBurger = forwardRefAs<
  "div",
  NavbarBurgerOwnProps,
  NavbarBurgerForwardsProps
>(
  ({ className, onClick, ...rest }, ref) => (
    <NavbarContext.Consumer>
      {ctx => {
        return (
          <Generic
            className={classNames(
              "navbar-burger",
              { "is-active": ctx.active },
              className,
            )}
            ref={ref}
            onClick={onClickHandler(onClick, ctx)}
            role={"button"}
            {...rest}
          >
            <span />
            <span />
            <span />
          </Generic>
        );
      }}
    </NavbarContext.Consumer>
  ),
  { as: "div" },
);

NavbarBurger.displayName = "Navbar.Burger";
NavbarBurger.propTypes = {
  onClick: PropTypes.func,
};
