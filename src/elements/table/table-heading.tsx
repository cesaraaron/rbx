import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type TableHeadingOwnProps = HelpersProps;
export type TableHeadingForwardsProps = { className: string };

export const TableHeading = forwardRefAs<
  "th",
  TableHeadingOwnProps,
  TableHeadingForwardsProps
>((props, ref) => <Generic ref={ref} {...props} />, { as: "th" });

TableHeading.displayName = "Table.Heading";
