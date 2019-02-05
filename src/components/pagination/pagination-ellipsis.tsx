import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PaginationEllipsisHelperProps = { children: React.ReactNode };

export type PaginationEllipsisOwnProps = HelpersProps &
  PaginationEllipsisHelperProps;
export type PaginationEllipsisForwardsProps = {
  className: string;
  children: React.ReactNode;
};

export const PaginationEllipsis = forwardRefAs<
  "span",
  PaginationEllipsisOwnProps,
  PaginationEllipsisForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <li>
      <Generic
        className={classNames("pagination-ellipsis", className)}
        ref={ref}
        {...rest}
      />
    </li>
  ),
  {
    as: "span",
    children: "…",
  },
);

PaginationEllipsis.displayName = "Pagination.Ellipsis";
