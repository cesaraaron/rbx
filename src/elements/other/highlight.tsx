import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type HighlightOwnProps = HelpersProps;
export type HighlightForwardsProps = { className: string };

export const Highlight = forwardRefAs<
  "p",
  HighlightOwnProps,
  HighlightForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("highlight", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "p" },
);

Highlight.displayName = "Highlight";
