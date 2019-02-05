import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type TableFootOwnProps = HelpersProps;
export type TableFootForwardsProps = { className: string };

export const TableFoot = forwardRefAs<
  "tfoot",
  TableFootOwnProps,
  TableFootForwardsProps
>((props, ref) => <Generic ref={ref} {...props} />, { as: "tfoot" });

TableFoot.displayName = "Table.Foot";
