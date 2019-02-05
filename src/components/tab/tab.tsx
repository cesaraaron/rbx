import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { TabGroup } from "./tab-group";

export type TabModifierProps = Partial<{
  active: boolean;
}>;

export type TabOwnProps = HelpersProps & TabModifierProps;
export type TabForwardsProps = { className: string };

export const Tab = Object.assign(
  forwardRefAs<"a", TabOwnProps, TabForwardsProps>(
    ({ active, ...rest }, ref) => (
      <li className={classNames({ "is-active": active })}>
        <Generic ref={ref} {...rest} />
      </li>
    ),
    { as: "a" },
  ),
  { Group: TabGroup },
);

Tab.displayName = "Tab";
Tab.propTypes = {
  active: PropTypes.bool,
};
