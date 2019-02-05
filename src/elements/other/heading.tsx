import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type HeadingOwnProps = HelpersProps;
export type HeadingForwardsProps = { className: string };

export const Heading = forwardRefAs<"p", HeadingOwnProps, HeadingForwardsProps>(
  ({ className, ...rest }, ref) => (
    <Generic className={classNames("heading", className)} ref={ref} {...rest} />
  ),
  { as: "p" },
);

Heading.displayName = "Heading";
