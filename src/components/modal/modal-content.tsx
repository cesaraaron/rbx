import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type ModalContentOwnProps = HelpersProps;
export type ModalContentForwardsProps = { className: string };

export const ModalContent = forwardRefAs<
  "div",
  ModalContentOwnProps,
  ModalContentForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("modal-content", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

ModalContent.displayName = "Modal.Content";
