import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type ModalCardFootOwnProps = HelpersProps;
export type ModalCardFootForwardsProps = { className: string };

export const ModalCardFoot = forwardRefAs<
  "footer",
  ModalCardFootOwnProps,
  ModalCardFootForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("modal-card-foot", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "footer" },
);

ModalCardFoot.displayName = "Modal.Card.Foot";
