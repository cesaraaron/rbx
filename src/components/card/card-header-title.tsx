import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/base";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type CardHeaderTitleModifierProps = Partial<{ className: string }>;

export type CardHeaderTitleProps = ModifierProps & CardHeaderTitleModifierProps;

export const CardHeaderTitle = forwardRefAs<CardHeaderTitleProps, "div">(
  (props, ref) => {
    const { as, ...rest } = transformModifiers(props);
    rest.className = cx("card-header-title", rest.className);
    return React.createElement(as!, { ref, ...rest });
  },
  { as: "div" },
);