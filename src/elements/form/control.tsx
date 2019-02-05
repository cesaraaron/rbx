import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
import { tuple } from "../../utils";

export const CONTROL_DEFAULTS = {
  sizes: tuple("small", "medium", "large"),
};

export interface ControlVariablesOverrides {}

export interface ControlVariablesDefaults {
  sizes: (typeof CONTROL_DEFAULTS["sizes"])[number];
}

export type ControlVariables = Prefer<
  ControlVariablesOverrides,
  ControlVariablesDefaults
>;

export type ControlModifierProps = Partial<{
  expanded: boolean;
  iconLeft: boolean;
  iconRight: boolean;
  loading: boolean;
  size: ControlVariables["sizes"];
}>;

export type ControlOwnProps = HelpersProps & ControlModifierProps;
export type ControlForwardsProps = { className: string };

export const Control = forwardRefAs<
  "div",
  ControlOwnProps,
  ControlForwardsProps
>(
  (
    { className, expanded, iconLeft, iconRight, loading, size, ...rest },
    ref,
  ) => (
    <Generic
      className={classNames(
        "control",
        {
          "has-icons-left": iconLeft,
          "has-icons-right": iconRight,
          "is-expanded": expanded,
          "is-loading": loading,
          [`is-${size}`]: size,
        },
        className,
      )}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

Control.displayName = "Control";
Control.propTypes = {
  expanded: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
