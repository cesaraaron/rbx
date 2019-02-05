import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type RadioOwnProps = HelpersProps;
export type RadioForwardsProps = {
  className: string;
  type: "radio"; // tslint:disable-line:no-reserved-keywords
};

export const Radio = forwardRefAs<"input", RadioOwnProps, RadioForwardsProps>(
  (props, ref) => <Generic ref={ref} type="radio" {...props} />,
  { as: "input" },
);

Radio.displayName = "Radio";
