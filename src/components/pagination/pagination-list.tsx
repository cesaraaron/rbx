import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PaginationListOwnProps = HelpersProps;
export type PaginationListForwardsProps = { className: string };

export const PaginationList = forwardRefAs<
  "ul",
  PaginationListOwnProps,
  PaginationListForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("pagination-list", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "ul" },
);

PaginationList.displayName = "Pagination.List";
