import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type DropdownMenuOwnProps = HelpersProps;
export type DropdownMenuForwardsProps = {
  className: string;
};

export const DropdownMenu = forwardRefAs<
  "div",
  DropdownMenuOwnProps,
  DropdownMenuForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("dropdown-menu", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

DropdownMenu.displayName = "Dropdown.Menu";
