import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type FooterOwnProps = HelpersProps;
export type FooterForwardsProps = { className: string };

export const Footer = forwardRefAs<"div", FooterOwnProps, FooterForwardsProps>(
  ({ className, ...rest }, ref) => (
    <Generic className={classNames("footer", className)} ref={ref} {...rest} />
  ),
  { as: "div" },
);

Footer.displayName = "Footer";
