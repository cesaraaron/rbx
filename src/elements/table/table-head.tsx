import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type TableHeadOwnProps = HelpersProps;
export type TableHeadForwardsProps = { className: string };

export const TableHead = forwardRefAs<
  "thead",
  TableHeadOwnProps,
  TableHeadForwardsProps
>((props, ref) => <Generic ref={ref} {...props} />, { as: "thead" });

TableHead.displayName = "Table.Head";
