import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type TableBodyProps = HelpersProps;

export const TableBody = forwardRefAs<"tbody", TableBodyProps>(
  (props, ref) => <Generic ref={ref} {...props} />,
  { as: "tbody" },
);

TableBody.displayName = "Table.Body";
