import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { DropdownContext, DropdownContextValue } from "./dropdown-context";

export type DropdownTriggerModifierProps = Partial<{
  onClick: React.MouseEventHandler;
}>;

export type DropdownTriggerOwnProps = HelpersProps &
  DropdownTriggerModifierProps;
export type DropdownTriggerForwardsProps = {
  className: string;
  onClick: React.MouseEventHandler;
};

const onClickHandler = (
  onClick: DropdownTriggerOwnProps["onClick"] | undefined,
  ctx: DropdownContextValue,
) => (event: React.MouseEvent) => {
  if (onClick !== undefined) {
    onClick(event);
  }
  ctx.setActive(!ctx.active);
};

export const DropdownTrigger = forwardRefAs<
  "div",
  DropdownTriggerOwnProps,
  DropdownTriggerForwardsProps
>(
  ({ className, onClick, ...rest }, ref) => (
    <DropdownContext.Consumer>
      {ctx => (
        <Generic
          className={classNames("dropdown-trigger", className)}
          ref={ref}
          onClick={onClickHandler(onClick, ctx)}
          {...rest}
        />
      )}
    </DropdownContext.Consumer>
  ),
  { as: "div" },
);

DropdownTrigger.displayName = "Dropdown.Trigger";
DropdownTrigger.propTypes = {
  onClick: PropTypes.func,
};
