import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { ListItem } from "./list-item";

export type ListOwnProps = HelpersProps;
export type ListForwardsProps = { className: string };

export const List = Object.assign(
  forwardRefAs<"div", ListOwnProps, ListForwardsProps>(
    ({ className, ...rest }, ref) => (
      <Generic className={classNames("list", className)} ref={ref} {...rest} />
    ),
    { as: "div" },
  ),
  { Item: ListItem },
);

List.displayName = "List";
