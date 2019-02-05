import React from "react";

import { renderablePropType } from "../prop-types-extensions";
import { forwardRefAs } from "./exotic";
import { HelpersProps } from "./helpers";
import { ThemeContext } from "./theme";

export type GenericOwnProps = HelpersProps;
export type GenericForwardsProps = { className: string };

export const Generic = forwardRefAs<
  "div",
  GenericOwnProps,
  GenericForwardsProps
>(
  ({ as, ...rest }, ref) => (
    <ThemeContext.Consumer>
      {({ transform }) =>
        React.createElement(as, { ref, ...transform(rest, "Generic") })
      }
    </ThemeContext.Consumer>
  ),
  { as: "div" },
);

Generic.displayName = "Generic";
Generic.propTypes = {
  as: renderablePropType,
};

type FooProps = { a: string; className?: string };
const Foo: React.FC<FooProps> = () => <div />;

const f = <Generic as={Generic} />;
