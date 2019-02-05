import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type BlockOwnProps = HelpersProps;
export type BlockForwardsProps = { className: string };

export const Block = forwardRefAs<"div", BlockOwnProps, BlockForwardsProps>(
  ({ className, ...rest }, ref) => (
    <Generic className={classNames("block", className)} ref={ref} {...rest} />
  ),
  { as: "div" },
);

Block.displayName = "Block";
