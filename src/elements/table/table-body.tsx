import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type TableBodyOwnProps = HelpersProps;
export type TableBodyForwardsProps = { className: string };

export const TableBody = forwardRefAs<
  "tbody",
  TableBodyOwnProps,
  TableBodyForwardsProps
>((props, ref) => <Generic ref={ref} {...props} />, { as: "tbody" });

TableBody.displayName = "Table.Body";
