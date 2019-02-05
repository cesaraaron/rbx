import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type FileIconOwnProps = HelpersProps;
export type FileIconForwardsProps = { className: string };

export const FileIcon = forwardRefAs<
  "span",
  FileIconOwnProps,
  FileIconForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("file-icon", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "span" },
);

FileIcon.displayName = "File.Icon";
