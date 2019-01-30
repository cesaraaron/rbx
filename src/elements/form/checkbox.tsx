import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type CheckboxProps = HelpersProps;

export const Checkbox = forwardRefAs<CheckboxProps>(
  (props, ref) => {
    const htmlProps = { type: "checkbox" };

    return <Generic ref={ref} {...htmlProps} {...props} />;
  },
  { as: "input" },
);

Checkbox.displayName = "Checkbox";
