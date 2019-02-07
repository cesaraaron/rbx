import React from "react";
import { HelpersProps, makeRootValidatingTransform } from "./helpers";
import { ValidatingTransformFunction } from "./helpers/factory";

export interface ThemeContextValue<T extends object = HelpersProps> {
  transform: ValidatingTransformFunction<T>;
}

export const initialValue: ThemeContextValue = {
  transform: makeRootValidatingTransform(),
};

export const ThemeContext = React.createContext(initialValue);
