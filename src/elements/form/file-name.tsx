import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type FileNameOwnProps = HelpersProps;
export type FileNameForwardsProps = { className: string };

export const FileName = forwardRefAs<
  "span",
  FileNameOwnProps,
  FileNameForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("file-name", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "span" },
);

FileName.displayName = "File.Name";
