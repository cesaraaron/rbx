import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type HeroBodyOwnProps = HelpersProps;
export type HeroBodyForwardsProps = { className: string };

export const HeroBody = forwardRefAs<
  "div",
  HeroBodyOwnProps,
  HeroBodyForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("hero-body", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

HeroBody.displayName = "Hero.Body";
