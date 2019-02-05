import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type CardContentOwnProps = HelpersProps;
export type CardContentForwardsProps = {
  className: string;
};

export const CardContent = forwardRefAs<
  "div",
  CardContentOwnProps,
  CardContentForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("card-content", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

CardContent.displayName = "Card.Content";
