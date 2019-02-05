import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type CardImageOwnProps = HelpersProps;
export type CardImageForwardsProps = {
  className: string;
};

export const CardImage = forwardRefAs<
  "div",
  CardImageOwnProps,
  CardImageForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("card-image", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

CardImage.displayName = "Card.Image";
