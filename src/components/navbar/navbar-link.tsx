import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import {
  NavbarItemContext,
  NavbarItemContextValue,
} from "./navbar-item-context";

export type NavbarLinkModifierProps = Partial<{
  arrowless: boolean;
  onClick: React.MouseEventHandler;
}>;

export type NavbarLinkOwnProps = HelpersProps & NavbarLinkModifierProps;
export type NavbarLinkForwardsProps = {
  className: string;
  onClick: React.MouseEventHandler;
};

const handleOnClick = (
  onClick: NavbarLinkOwnProps["onClick"] | undefined,
  ctx: NavbarItemContextValue,
) => (event: React.MouseEvent) => {
  if (onClick !== undefined) {
    onClick(event);
  }
  ctx.setActive(!ctx.active);
};

export const NavbarLink = forwardRefAs<
  "span",
  NavbarLinkOwnProps,
  NavbarLinkForwardsProps
>(
  ({ arrowless, className, onClick, ...rest }, ref) => (
    <NavbarItemContext.Consumer>
      {ctx => (
        <Generic
          className={classNames(
            "navbar-link",
            { "is-arrowless": arrowless },
            className,
          )}
          ref={ref}
          onClick={handleOnClick(onClick, ctx)}
          {...rest}
        />
      )}
    </NavbarItemContext.Consumer>
  ),
  { as: "span" },
);

NavbarLink.displayName = "Navbar.Link";
NavbarLink.propTypes = {
  arrowless: PropTypes.bool,
  onClick: PropTypes.func,
};
