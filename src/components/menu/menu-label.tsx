import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type MenuLabelOwnProps = HelpersProps;
export type MenuLabelForwardsProps = { className: string };

export const MenuLabel = forwardRefAs<
  "p",
  MenuLabelOwnProps,
  MenuLabelForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("menu-label", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "p" },
);

MenuLabel.displayName = "Menu.Label";
