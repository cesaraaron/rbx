import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type NumericOwnProps = HelpersProps;
export type NumericForwardsProps = { className: string };

export const Numeric = forwardRefAs<"p", NumericOwnProps, NumericForwardsProps>(
  ({ className, ...rest }, ref) => (
    <Generic className={classNames("number", className)} ref={ref} {...rest} />
  ),
  { as: "p" },
);

Numeric.displayName = "Numeric";
