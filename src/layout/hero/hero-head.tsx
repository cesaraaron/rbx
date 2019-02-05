import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type HeroHeadOwnProps = HelpersProps;
export type HeroHeadForwardsProps = { className: string };

export const HeroHead = forwardRefAs<
  "div",
  HeroHeadOwnProps,
  HeroHeadForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("hero-head", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

HeroHead.displayName = "Hero.Head";
