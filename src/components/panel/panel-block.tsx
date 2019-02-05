import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PanelBlockModifierProps = Partial<{
  active: boolean;
}>;

export type PanelBlockOwnProps = HelpersProps & PanelBlockModifierProps;
export type PanelBlockForwardsProps = { className: string };

export const PanelBlock = forwardRefAs<
  "div",
  PanelBlockOwnProps,
  PanelBlockForwardsProps
>(
  ({ active, className, ...rest }, ref) => (
    <Generic
      className={classNames("panel-block", { "is-active": active }, className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

PanelBlock.displayName = "Panel.Block";
PanelBlock.propTypes = {
  active: PropTypes.bool,
};
