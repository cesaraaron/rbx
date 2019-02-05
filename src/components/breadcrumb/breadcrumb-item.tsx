import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export interface BreadcrumbItemModifierProps {
  active?: boolean;
}

export type BreadcrumbItemOwnProps = HelpersProps & BreadcrumbItemModifierProps;
export type BreadcrumbItemForwardsProps = {
  className: string;
};

export const BreadcrumbItem = forwardRefAs<
  "a",
  BreadcrumbItemOwnProps,
  BreadcrumbItemForwardsProps
>(
  ({ active, ...rest }, ref) => (
    <li className={classNames({ "is-active": active })}>
      <Generic ref={ref} {...rest} />
    </li>
  ),
  { as: "a" },
);

BreadcrumbItem.displayName = "Breadcrumb.Item";
BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
};
