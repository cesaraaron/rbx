import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type ModalCardTitleOwnProps = HelpersProps;
export type ModalCardTitleForwardsProps = { className: string };

export const ModalCardTitle = forwardRefAs<
  "p",
  ModalCardTitleOwnProps,
  ModalCardTitleForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("modal-card-title", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "p" },
);

ModalCardTitle.displayName = "Modal.Card.Title";
