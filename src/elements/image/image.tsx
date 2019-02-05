import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { ImageContainer } from "./image-container";

export type ImageModifierProps = Partial<{
  rounded: boolean;
}>;

export type ImageOwnProps = HelpersProps & ImageModifierProps;
export type ImageForwardsProps = { className: string };

export const Image = Object.assign(
  forwardRefAs<"img", ImageOwnProps, ImageForwardsProps>(
    ({ className, rounded, ...rest }, ref) => (
      <Generic
        className={classNames({ "is-rounded": rounded }, className)}
        ref={ref}
        {...rest}
      />
    ),
    { as: "img" },
  ),
  { Container: ImageContainer },
);

Image.displayName = "Image";
Image.propTypes = {
  rounded: PropTypes.bool,
};
