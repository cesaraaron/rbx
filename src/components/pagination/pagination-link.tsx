import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type PaginationLinkModifiers = Partial<{
  current: boolean;
}>;

export type PaginationLinkOwnProps = HelpersProps & PaginationLinkModifiers;
export type PaginationLinkForwardsProps = { className: string };

export const PaginationLink = forwardRefAs<
  "a",
  PaginationLinkOwnProps,
  PaginationLinkForwardsProps
>(
  ({ className, current, ...rest }, ref) => (
    <li>
      <Generic
        className={classNames(
          "pagination-link",
          { "is-current": current },
          className,
        )}
        ref={ref}
        {...rest}
      />
    </li>
  ),
  { as: "a" },
);

PaginationLink.displayName = "Pagination.Link";
PaginationLink.propTypes = {
  current: PropTypes.bool,
};
