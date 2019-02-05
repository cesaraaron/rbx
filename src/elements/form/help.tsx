import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";

export type HelpModifierProps = Partial<{
  color: Variables["colors"];
}>;

export type HelpOwnProps = HelpersProps & HelpModifierProps;
export type HelpForwardsProps = { className: string };

export const Help = forwardRefAs<"p", HelpOwnProps, HelpForwardsProps>(
  ({ className, color, ...rest }, ref) => (
    <Generic
      className={classNames("help", { [`is-${color}`]: color }, className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "p" },
);

Help.displayName = "Help";
Help.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
