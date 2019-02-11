import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type FieldsetModifierProps = Partial<{
  disabled: boolean;
}>;

export type FieldsetOwnProps = HelpersProps & FieldsetModifierProps;
export type FieldsetForwardsProps = { className: string };

export const Fieldset = forwardRefAs<
  "fieldset",
  FieldsetOwnProps,
  FieldsetForwardsProps
>(
  ({ disabled, ...rest }, ref) => (
    <Generic disabled={disabled} ref={ref} {...rest} />
  ),
  { as: "fieldset" },
);

Fieldset.displayName = "Fieldset";
Fieldset.propTypes = {
  disabled: PropTypes.bool,
};
