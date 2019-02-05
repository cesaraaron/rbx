import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { ModalContext, ModalContextValue } from "./modal-context";

export type ModalCloseModifierProps = Partial<{
  onClick: React.MouseEventHandler;
}>;

export type ModalCloseOwnProps = HelpersProps & ModalCloseModifierProps;
export type ModalCloseForwardsProps = {
  "aria-label": "close";
  className: string;
  onClick: React.MouseEventHandler;
};

const onClickHandler = (
  onClick: ModalCloseOwnProps["onClick"] | undefined,
  ctx: ModalContextValue,
) => (event: React.MouseEvent) => {
  if (onClick !== undefined) {
    onClick(event);
  }
  ctx.close();
};

export const ModalClose = forwardRefAs<
  "button",
  ModalCloseOwnProps,
  ModalCloseForwardsProps
>(
  ({ className, onClick, ...rest }, ref) => (
    <ModalContext.Consumer>
      {ctx => (
        <Generic
          className={classNames("modal-close", "is-large", className)}
          ref={ref}
          aria-label="close"
          onClick={onClickHandler(onClick, ctx)}
          {...rest}
        />
      )}
    </ModalContext.Consumer>
  ),
  { as: "button" },
);

ModalClose.displayName = "Modal.Close";
ModalClose.propTypes = {
  onClick: PropTypes.func,
};
