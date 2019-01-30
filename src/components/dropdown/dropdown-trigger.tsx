import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { DropdownContext, DropdownContextValue } from "./dropdown-context";

export type DropdownTriggerModifierProps = Partial<{
  onClick: React.MouseEventHandler;
}>;

export type DropdownTriggerProps = HelpersProps & DropdownTriggerModifierProps;

const onClickHandler = (
  onClick: DropdownTriggerProps["onClick"] | undefined,
  ctx: DropdownContextValue,
) => (event: React.MouseEvent) => {
  if (onClick !== undefined) {
    onClick(event);
  }
  ctx.setActive(!ctx.active);
};

export const DropdownTrigger = forwardRefAs<"div", DropdownTriggerProps>(
  ({ className, onClick, ...rest }, ref) => (
    <DropdownContext.Consumer>
      {ctx => {
        const htmlProps = { onClick: onClickHandler(onClick, ctx) };

        return (
          <Generic
            className={classNames("dropdown-trigger", className)}
            ref={ref}
            {...htmlProps}
            {...rest}
          />
        );
      }}
    </DropdownContext.Consumer>
  ),
  { as: "div" },
);

DropdownTrigger.displayName = "Dropdown.Trigger";
DropdownTrigger.propTypes = {
  onClick: PropTypes.func,
};
