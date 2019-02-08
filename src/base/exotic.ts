import React from "react";

import {
  FromReactType,
  HasIntersectingRequiredKeys,
  HasRequiredKeys,
  Omit,
} from "../types";

// tslint:disable:no-reserved-keywords

/**
 * Returns true if PReceived accepts PForwarded props, else false
 */
export type CompatibleWithForwardsProps<
  PForwards extends object,
  PReceives extends object
> = keyof PForwards extends undefined
  ? true
  : keyof PReceives extends undefined
  ? false
  : keyof PForwards extends (keyof PForwards & keyof PReceives)
  ? {
      [K in keyof PForwards &
        keyof PReceives]: PForwards[K] extends PReceives[K] ? true : false
    }[keyof PForwards & keyof PReceives] extends false
    ? false
    : true
  : false;

/**
 * Does TOwnProps have an index signature, assumably consuming all keys?
 *   --> return 0
 * Does TAsComponentProps have no required keys?
 *   --> return (1 | 2)
 * Does TAsComponentProps have required keys that don't intersect with TOwnProps
 *   --> return (0 | 2)
 * Does TAsComponentProps have required keys that do intersect with TOwnProps?
 *   --> return 0
 */
export type CompositeProps<
  TOwnProps extends object,
  TAsComponent extends React.ReactType
> = {
  // ComponentPropsWithoutRef flattens the type.
  0: TOwnProps & {
    with: Omit<React.ComponentProps<TAsComponent>, "key" | "ref">;
  };
  1: TOwnProps & {
    with?: Omit<React.ComponentProps<TAsComponent>, "key" | "ref">;
  };
  2: TOwnProps &
    Omit<
      React.ComponentProps<TAsComponent>,
      keyof TOwnProps | "key" | "ref"
    > & {
      with?: never;
    };
}[HasRequiredKeys<React.ComponentProps<TAsComponent>> extends true
  ? HasIntersectingRequiredKeys<
      TOwnProps,
      React.ComponentProps<TAsComponent>
    > extends true
    ? 0
    : TAsComponent extends ForwardRefAsExoticComponent<any> // tslint:disable-line:no-any
    ? 0
    : (0 | 2)
  : TAsComponent extends ForwardRefAsExoticComponent<any> // tslint:disable-line:no-any
  ? 1
  : (1 | 2)];

/**
 * Extracts the React.ReactType from a set of props `P`.
 * If the 'as' is a ForwardRefAsExoticType component, search can continue
 * recursively through its 'with' prop.
 */
export type FinalAsReactType<
  P extends { as?: React.ReactType },
  T extends React.ReactType = P extends { as?: infer U } ? U : never
> = {
  0: T;
  1: P extends { with: { as?: React.ReactType } }
    ? FinalAsReactType<P["with"]>
    : T extends ForwardRefAsExoticComponent<infer V>
    ? FromReactType<V>
    : never;
}[T extends keyof JSX.IntrinsicElements
  ? 0
  : T extends ForwardRefAsExoticComponent<any> // tslint:disable-line:no-any
  ? 1
  : 0];

/**
 * Creates ref attributes for the final 'as' type in props
 */
export type ForwardRefAsExoticComponentRefAttributes<
  P extends { as?: React.ReactType }
> = React.RefAttributes<FromReactType<FinalAsReactType<P>>>;

/**
 * This is used to copy all properties from React.ForwardRefExoticComponent
 * except the callable annotation.
 */
export type NonCallableForwardRefExoticComponentProps<
  TDefaultComponent extends React.ReactType,
  TOwnProps extends object
> = Pick<
  React.ForwardRefExoticComponent<TOwnProps & { as: TDefaultComponent }>,
  keyof React.ForwardRefExoticComponent<TOwnProps & { as: TDefaultComponent }>
>;

// tslint:disable:no-any
export type ForwardRefAsExoticComponent<
  TDefaultComponent extends React.ReactType,
  TOwnProps extends object = {},
  TForwardsProps extends object = {}
> = NonCallableForwardRefExoticComponentProps<TDefaultComponent, TOwnProps> & {
  <TAsComponent extends React.ReactType = TDefaultComponent>(
    props: { as?: TAsComponent } & CompositeProps<TOwnProps, TAsComponent>,
  ): CompatibleWithForwardsProps<
    TForwardsProps,
    React.ComponentProps<TAsComponent>
  > extends false
    ? never
    : React.ReactElement<any> | null;

  defaultProps: CompatibleWithForwardsProps<
    TForwardsProps,
    React.ComponentProps<TDefaultComponent>
  > extends false
    ? never
    : { as: TDefaultComponent } & Partial<TOwnProps>;
  displayName: string;
  propTypes?: React.WeakValidationMap<{ [k in "as" | keyof TOwnProps]: any }>;
};

export function forwardRefAs<
  TDefaultComponent extends React.ReactType,
  TOwnProps extends object,
  TForwardsProps extends object
>(
  Component: React.RefForwardingComponent<
    any,
    TOwnProps & { as: React.ReactType; with?: any }
  >,
  defaultProps: ForwardRefAsExoticComponent<
    TDefaultComponent,
    TOwnProps,
    TForwardsProps
  >["defaultProps"],
) {
  const factory = React.forwardRef(Component);
  factory.defaultProps = {};
  Object.assign(factory.defaultProps, defaultProps);

  return factory as ForwardRefAsExoticComponent<
    TDefaultComponent,
    TOwnProps,
    TForwardsProps
  >;
}
// tslint:enable:no-any
