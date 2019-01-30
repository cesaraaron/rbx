import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type RadioProps = HelpersProps;

export const Radio = forwardRefAs<"input", RadioProps>(
  (props, ref) => {
    const htmlProps = { type: "radio" };

    return <Generic ref={ref} {...htmlProps} {...props} />;
  },
  { as: "input" },
);

Radio.displayName = "Radio";
