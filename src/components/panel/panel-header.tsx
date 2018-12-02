import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/exotic";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type PanelHeaderProps = ModifierProps;

export const PanelHeader = forwardRefAs<PanelHeaderProps, "div">(
  (props, ref) => {
    const { as, ...rest } = transformModifiers(props);
    rest.className = cx("panel-heading", rest.className);
    return React.createElement(as!, { ref, ...rest });
  },
  "div",
);
