import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PanelTabGroupOwnProps = HelpersProps;
export type PanelTabGroupForwardsProps = { className: string };

export const PanelTabGroup = forwardRefAs<
  "div",
  PanelTabGroupOwnProps,
  PanelTabGroupForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("panel-tabs", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

PanelTabGroup.displayName = "Panel.Tab.Group";
