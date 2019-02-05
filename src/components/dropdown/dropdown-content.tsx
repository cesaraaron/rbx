import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type DropdownContentOwnProps = HelpersProps;
export type DropdownContentForwardsProps = {
  className: string;
};

export const DropdownContent = forwardRefAs<
  "div",
  DropdownContentOwnProps,
  DropdownContentForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("dropdown-content", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

DropdownContent.displayName = "Dropdown.Content";
