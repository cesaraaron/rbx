import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { CardContent } from "./card-content";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";
import { CardImage } from "./card-image";

export type CardOwnProps = HelpersProps;
export type CardForwardsProps = { className: string };

export const Card = Object.assign(
  forwardRefAs<"div", CardOwnProps, CardForwardsProps>(
    ({ className, ...rest }, ref) => (
      <Generic className={classNames("card", className)} ref={ref} {...rest} />
    ),
    { as: "div" },
  ),
  {
    Content: CardContent,
    Footer: CardFooter,
    Header: CardHeader,
    Image: CardImage,
  },
);

Card.displayName = "Card";
