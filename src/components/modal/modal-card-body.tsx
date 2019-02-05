import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type ModalCardBodyOwnProps = HelpersProps;
export type ModalCardBodyForwardsProps = { className: string };

export const ModalCardBody = forwardRefAs<
  "section",
  ModalCardBodyOwnProps,
  ModalCardBodyForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("modal-card-body", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "section" },
);

ModalCardBody.displayName = "Modal.Card.Body";
