import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type CardFooterItemOwnProps = HelpersProps;
export type CardFooterItemForwardsProps = {
  className: string;
};

export const CardFooterItem = forwardRefAs<
  "div",
  CardFooterItemOwnProps,
  CardFooterItemForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("card-footer-item", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

CardFooterItem.displayName = "Card.Footer.Item";
