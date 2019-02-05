import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { CardFooterItem } from "./card-footer-item";

export type CardFooterOwnProps = HelpersProps;
export type CardFooterForwardsProps = {
  className: string;
};

export const CardFooter = Object.assign(
  forwardRefAs<"div", CardFooterOwnProps, CardFooterForwardsProps>(
    ({ className, ...rest }, ref) => (
      <Generic
        className={classNames("card-footer", className)}
        ref={ref}
        {...rest}
      />
    ),
    { as: "div" },
  ),
  { Item: CardFooterItem },
);

CardFooter.displayName = "Card.Footer";
