import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type TableCellOwnProps = HelpersProps;
export type TableCellForwardsProps = { className: string };

export const TableCell = forwardRefAs<
  "td",
  TableCellOwnProps,
  TableCellForwardsProps
>((props, ref) => <Generic ref={ref} {...props} />, { as: "td" });

TableCell.displayName = "Table.Cell";
