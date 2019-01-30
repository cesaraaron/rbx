import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { MenuListItem } from "./menu-list-item";

export type MenuListProps = HelpersProps;

export const MenuList = Object.assign(
  forwardRefAs<"ul", MenuListProps>(
    ({ className, ...rest }, ref) => (
      <Generic
        className={classNames("menu-list", className)}
        ref={ref}
        {...rest}
      />
    ),
    { as: "ul" },
  ),
  { Item: MenuListItem },
);

MenuList.displayName = "Menu.List";
