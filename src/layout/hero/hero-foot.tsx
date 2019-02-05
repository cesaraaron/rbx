import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type HeroFootOwnProps = HelpersProps;
export type HeroFootForwardsProps = { className: string };

export const HeroFoot = forwardRefAs<
  "div",
  HeroFootOwnProps,
  HeroFootForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("hero-foot", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

HeroFoot.displayName = "Hero.Foot";
