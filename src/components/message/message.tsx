import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import {
  forwardRefAs,
  genericPropTypes,
  HelpersProps,
  transformHelpers,
} from "../../base";
import { Colors, COLORS } from "../../base/helpers";
import { tuple } from "../../utils";
import { MessageBody } from "./message-body";
import { MessageHeader } from "./message-header";

export const MESSAGE_SIZES = tuple("small", "medium", "large");
export type MessageSizes = (typeof MESSAGE_SIZES)[number];

export type MessageModifierProps = Partial<{
  color: Colors;
  size: MessageSizes;
}>;

export type MessageProps = HelpersProps & MessageModifierProps;

const propTypes = {
  ...genericPropTypes,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(MESSAGE_SIZES),
};

export const Message = Object.assign(
  forwardRefAs<MessageProps, "article">(
    (props, ref) => {
      const { as, color, size, ...rest } = transformHelpers(props);
      rest.className = classNames("message", rest.className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
      });
      return React.createElement(as!, { ref, ...rest });
    },
    { as: "article" },
  ),
  {
    Body: MessageBody,
    Header: MessageHeader,
    propTypes,
  },
);