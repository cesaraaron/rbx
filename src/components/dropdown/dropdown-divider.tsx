import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type DropdownDividerOwnProps = HelpersProps;
export type DropdownDividerForwardsProps = {
  className: string;
};

export const DropdownDivider = forwardRefAs<
  "hr",
  DropdownDividerOwnProps,
  DropdownDividerForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("dropdown-divider", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "hr" },
);

DropdownDivider.displayName = "Dropdown.Divider";
