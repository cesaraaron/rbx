import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type CardHeaderIconOwnProps = HelpersProps;
export type CardHeaderIconForwardsProps = {
  className: string;
};

export const CardHeaderIcon = forwardRefAs<
  "div",
  CardHeaderIconOwnProps,
  CardHeaderIconForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("card-header-icon", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

CardHeaderIcon.displayName = "Card.Header.Icon";
