import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type ContentOrderedListItemOwnProps = HelpersProps;
export type ContentOrderedListItemForwardsProps = { className: string };

export const ContentOrderedListItem = forwardRefAs<
  "li",
  ContentOrderedListItemOwnProps,
  ContentOrderedListItemForwardsProps
>((props, ref) => <Generic ref={ref} {...props} />, { as: "li" });

ContentOrderedListItem.displayName = "Content.OrderedList.Item";
