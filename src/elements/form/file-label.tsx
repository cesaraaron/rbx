import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type FileLabelOwnProps = HelpersProps;
export type FileLabelForwardsProps = { className: string };

export const FileLabel = forwardRefAs<
  "label",
  FileLabelOwnProps,
  FileLabelForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("file-label", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "label" },
);

FileLabel.displayName = "File.Label";
