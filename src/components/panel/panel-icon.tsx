import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PanelIconOwnProps = HelpersProps;
export type PanelIconForwardsProps = { className: string };

export const PanelIcon = forwardRefAs<
  "span",
  PanelIconOwnProps,
  PanelIconForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("panel-icon", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "span" },
);

PanelIcon.displayName = "Panel.Icon";
