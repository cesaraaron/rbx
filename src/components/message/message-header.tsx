import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type MessageHeaderOwnProps = HelpersProps;
export type MessageHeaderForwardsProps = { className: string };

export const MessageHeader = forwardRefAs<
  "div",
  MessageHeaderOwnProps,
  MessageHeaderForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("message-header", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

MessageHeader.displayName = "Message.Header";
