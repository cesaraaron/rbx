import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/base";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type FileLabelModifierProps = Partial<{ className: string }>;

export type FileLabelProps = ModifierProps & FileLabelModifierProps;

export const FileLabel = forwardRefAs<FileLabelProps, "label">(
  (props, ref) => {
    const { as, ...rest } = transformModifiers(props);
    rest.className = cx("file-label", rest.className);
    return React.createElement(as!, { ref, ...rest });
  },
  { as: "label" },
);