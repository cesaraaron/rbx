import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type FileInputOwnProps = HelpersProps;
export type FileInputForwardsProps = {
  className: string;
  type: "file"; // tslint:disable-line:no-reserved-keywords
};

export const FileInput = forwardRefAs<
  "input",
  FileInputOwnProps,
  FileInputForwardsProps
>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("file-input", className)}
      ref={ref}
      type="file"
      {...rest}
    />
  ),
  { as: "input" },
);

FileInput.displayName = "File.Input";
