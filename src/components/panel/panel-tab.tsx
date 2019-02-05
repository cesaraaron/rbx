import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { PanelTabGroup } from "./panel-tab-group";

export type PanelTabModifierProps = Partial<{
  active: boolean;
}>;

export type PanelTabOwnProps = HelpersProps & PanelTabModifierProps;
export type PanelTabForwardsProps = { className: string };

export const PanelTab = Object.assign(
  forwardRefAs<"a", PanelTabOwnProps, PanelTabForwardsProps>(
    ({ active, className, ...rest }, ref) => (
      <Generic
        className={classNames({ "is-active": active }, className)}
        ref={ref}
        {...rest}
      />
    ),
    { as: "a" },
  ),
  { Group: PanelTabGroup },
);

PanelTab.displayName = "Panel.Tab";
PanelTab.propTypes = {
  active: PropTypes.bool,
};
