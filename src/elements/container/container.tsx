import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";

export type ContainerModifierProps = Partial<{
  breakpoint: Variables["breakpoints"];
  fluid: boolean;
}>;

export type ContainerOwnProps = HelpersProps & ContainerModifierProps;
export type ContainerForwardsProps = { className: string };

export const Container = forwardRefAs<
  "div",
  ContainerOwnProps,
  ContainerForwardsProps
>(
  ({ className, fluid, breakpoint, ...rest }, ref) => (
    <Generic
      className={classNames(
        "container",
        {
          [`is-${breakpoint}`]: breakpoint,
          "is-fluid": fluid,
        },
        className,
      )}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

Container.displayName = "Container";
Container.propTypes = {
  breakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fluid: PropTypes.bool,
};
