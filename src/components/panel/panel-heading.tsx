import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PanelHeadingOwnProps = HelpersProps;
export type PanelHeadingForwardsProps = { className: string };

export const PanelHeading = forwardRefAs<
  "div",
  PanelHeadingOwnProps,
  PanelHeadingForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("panel-heading", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

PanelHeading.displayName = "Panel.Heading";
