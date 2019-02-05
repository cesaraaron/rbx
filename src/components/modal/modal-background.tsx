import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { ModalContext, ModalContextValue } from "./modal-context";

export type ModalBackgroundModifierProps = Partial<{
  onClick: React.MouseEventHandler;
}>;

export type ModalBackgroundOwnProps = HelpersProps &
  ModalBackgroundModifierProps;
export type ModalBackgroundForwardsProps = {
  className: string;
  onClick: React.MouseEventHandler;
  role: "presentation";
};

const onClickHandler = (
  onClick: ModalBackgroundOwnProps["onClick"],
  ctx: ModalContextValue,
) => (event: React.MouseEvent) => {
  if (onClick !== undefined) {
    onClick(event);
  }
  if (ctx.closeOnBlur) {
    ctx.close();
  }
};

export const ModalBackground = forwardRefAs<
  "div",
  ModalBackgroundOwnProps,
  ModalBackgroundForwardsProps
>(
  ({ className, onClick, ...rest }, ref) => (
    <ModalContext.Consumer>
      {ctx => (
        <Generic
          className={classNames("modal-background", className)}
          ref={ref}
          onClick={onClickHandler(onClick, ctx)}
          role="presentation"
          {...rest}
        />
      )}
    </ModalContext.Consumer>
  ),
  { as: "div" },
);

ModalBackground.displayName = "Modal.Background";
ModalBackground.propTypes = {
  onClick: PropTypes.func,
};
