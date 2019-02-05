import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type FieldBodyOwnProps = HelpersProps;
export type FieldBodyForwardsProps = { className: string };

export const FieldBody = forwardRefAs<
  "div",
  FieldBodyOwnProps,
  FieldBodyForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("field-body", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

FieldBody.displayName = "Field.Body";
