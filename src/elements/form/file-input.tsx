import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type FileInputProps = HelpersProps;

export const FileInput = forwardRefAs<FileInputProps>(
  ({ className, ...rest }, ref) => {
    const htmlProps = { type: "file" };

    return (
      <Generic
        className={classNames("file-input", className)}
        ref={ref}
        {...htmlProps}
        {...rest}
      />
    );
  },
  { as: "input" },
);

FileInput.displayName = "File.Input";
