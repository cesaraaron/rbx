import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type CheckboxOwnProps = HelpersProps;
export type CheckboxForwardsProps = {
  className: string;
  type: "checkbox"; // tslint:disable-line:no-reserved-keywords
};

export const Checkbox = forwardRefAs<
  "input",
  CheckboxOwnProps,
  CheckboxForwardsProps
>((props, ref) => <Generic ref={ref} type="checkbox" {...props} />, {
  as: "input",
});

Checkbox.displayName = "Checkbox";
