import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs } from "./exotic";
// import { HelpersProps, helpersPropTypes, transformHelpers } from "./helpers";
import { HelpersProps, transformHelpers } from "./helpers";
import { TransformContext } from "./transform-context";

export type GenericProps = HelpersProps;

export const propTypes = {
  /** The component this should render as */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  transform: PropTypes.func,
  // ...helpersPropTypes,
};

export const Generic = Object.assign(
  forwardRefAs<GenericProps, "div", HelpersProps>(
    (props, ref) => {
      const { as, transform: propTransform, ...rest } = props;
      return (
        <TransformContext.Consumer>
          {({ transform }) => {
            const transformed = transform(rest, "Generic");
            return React.createElement(as!, { ref, ...transformed });
          }}
        </TransformContext.Consumer>
      );
    },
    { as: "div", transform: transformHelpers },
  ),
  {
    propTypes,
  },
);