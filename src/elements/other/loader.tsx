import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type LoaderModifierProps = Partial<{ children: React.ReactNode }>;

export type LoaderOwnProps = HelpersProps & LoaderModifierProps;
export type LoaderForwardsProps = {
  className: string;
  children: React.ReactNode;
};

export const Loader = forwardRefAs<"div", LoaderOwnProps, LoaderForwardsProps>(
  ({ className, ...rest }, ref) => (
    <Generic className={classNames("loader", className)} ref={ref} {...rest} />
  ),
  {
    as: "div",
    children: false,
  },
);

Loader.displayName = "Loader";
