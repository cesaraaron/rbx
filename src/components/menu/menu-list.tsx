import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { MenuListItem } from "./menu-list-item";

export type MenuListOwnProps = HelpersProps;
export type MenuListForwardsProps = { className: string };

export const MenuList = Object.assign(
  forwardRefAs<"ul", MenuListOwnProps, MenuListForwardsProps>(
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
