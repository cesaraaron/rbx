import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { DropdownContext, DropdownContextValue } from "./dropdown-context";

export type DropdownItemModifierProps = Partial<{
  active: boolean;
  onClick: React.MouseEventHandler;
}>;

export type DropdownItemOwnProps = HelpersProps & DropdownItemModifierProps;
export type DropdownItemForwardsProps = {
  className: string;
  onClick: React.MouseEventHandler;
};

const onClickHandler = (
  onClick: DropdownItemOwnProps["onClick"] | undefined,
  ctx: DropdownContextValue,
) => (event: React.MouseEvent) => {
  if (onClick !== undefined) {
    onClick(event);
  }
  ctx.setActive(false);
};

export const DropdownItem = forwardRefAs<
  "a",
  DropdownItemOwnProps,
  DropdownItemForwardsProps
>(
  ({ active, className, onClick, ...rest }, ref) => (
    <DropdownContext.Consumer>
      {ctx => {
        return (
          <Generic
            className={classNames(
              "dropdown-item",
              { "is-active": active },
              className,
            )}
            ref={ref}
            onClick={onClickHandler(onClick, ctx)}
            {...rest}
          />
        );
      }}
    </DropdownContext.Consumer>
  ),
  { as: "a" },
);

DropdownItem.displayName = "Dropdown.Item";
DropdownItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
