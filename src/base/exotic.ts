import React from "react";

import {
  FromReactType,
  HasNonOptionalKeys,
  NonOptionalKeys,
  Omit,
} from "../types";

// tslint:disable:no-reserved-keywords

/**
 * Returns `true` or `false` depending on whether `TAsComponentProps` has
 * required props that overlap with either required or optional TOwnProps.
 */
export type HasIntersectingNonOptionalKeys<
  TOwnProps extends {},
  TAsComponentProps extends {}
> = Extract<
  NonOptionalKeys<TAsComponentProps>,
  keyof TOwnProps
> extends undefined
  ? false
  : true;

/**
 * Returns true if PReceived accepts PForwarded props, else false
 */
export type CompatibleWithForwardsProps<
  PForwards extends {},
  PReceives extends {}
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
  TOwnProps extends {},
  TAsComponent extends React.ReactType
> = {
  // ComponentPropsWithoutRef flattens the type.
  0: TOwnProps & { with: React.ComponentProps<TAsComponent> };
  1: TOwnProps & { with?: React.ComponentProps<TAsComponent> };
  2: TOwnProps &
    Omit<React.ComponentProps<TAsComponent>, keyof TOwnProps> & {
      with?: never;
    };
}[HasNonOptionalKeys<React.ComponentProps<TAsComponent>> extends true
  ? HasIntersectingNonOptionalKeys<
      TOwnProps,
      React.ComponentProps<TAsComponent>
    > extends true
    ? 0
    : TAsComponent extends ForwardRefAsExoticComponent<any, any, any> // tslint:disable-line:no-any
    ? 0
    : (0 | 2)
  : TAsComponent extends ForwardRefAsExoticComponent<any, any, any> // tslint:disable-line:no-any
  ? 1
  : (1 | 2)];

/**
 * This is used to copy all properties from React.ForwardRefExoticComponent
 * except the callable annotation.
 */
export type NonCallableForwardRefExoticComponentProps<
  TDefaultComponent extends React.ReactType,
  TOwnProps extends {}
> = Pick<
  React.ForwardRefExoticComponent<TOwnProps & { as: TDefaultComponent }>,
  keyof React.ForwardRefExoticComponent<TOwnProps & { as: TDefaultComponent }>
>;

// tslint:disable:no-any
export type ForwardRefAsExoticComponent<
  TDefaultComponent extends React.ReactType,
  TOwnProps extends {},
  TForwardsProps extends {}
> = NonCallableForwardRefExoticComponentProps<TDefaultComponent, TOwnProps> & {
  <TAsComponent extends React.ReactType = TDefaultComponent>(
    props: { as?: TAsComponent } & CompositeProps<TOwnProps, TAsComponent> &
      React.RefAttributes<
        TAsComponent extends keyof JSX.IntrinsicElements
          ? FromReactType<TAsComponent>
          : TAsComponent extends ForwardRefAsExoticComponent<infer U, any, any> // tslint:disable-line:no-any
          ? U
          : TAsComponent
      >,
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
  TOwnProps extends {},
  TForwardsProps extends {}
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
