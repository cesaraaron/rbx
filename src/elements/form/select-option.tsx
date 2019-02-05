import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type SelectOptionOwnProps = HelpersProps;
export type SelectOptionForwardsProps = { className: string };

export const SelectOption = forwardRefAs<
  "option",
  SelectOptionOwnProps,
  SelectOptionForwardsProps
>((props, ref) => <Generic ref={ref} {...props} />, { as: "option" });

SelectOption.displayName = "Select.Option";
