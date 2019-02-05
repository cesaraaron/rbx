import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type BoxOwnProps = HelpersProps;
export type BoxForwardsProps = { className: string };

export const Box = forwardRefAs<"div", BoxOwnProps, BoxForwardsProps>(
  ({ className, ...rest }, ref) => (
    <Generic className={classNames("box", className)} ref={ref} {...rest} />
  ),
  { as: "div" },
);

Box.displayName = "Box";
