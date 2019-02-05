import React from "react";

import { Omit } from "../types";

// tslint:disable:no-reserved-keywords

/**
 * Extracts the known keys from an object – regardless of whether it has an
 * index signature.
 */
export type KnownKeys<T extends {}> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K
} extends { [_ in keyof T]: infer U }
  ? {} extends U
    ? never
    : U
  : never;

/**
 * Maps a keyof JSX.IntrinsicElement (e.g. 'div' or 'svg') or a
 * React.ComponentType to it's type.
 *
 * For example:
 *   FromReactType<"div"> ==> HTMLDivElement
 *   FromReactType<"svg"> ==> SVGSVGElement
 *   FromReactType<React.FC<P>. ==> React.FC<P>
 */
export type FromReactType<
  T extends React.ReactType
> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T] extends React.DetailedHTMLFactory<
      React.HTMLAttributes<infer U>,
      infer U
    >
    ? U
    : JSX.IntrinsicElements[T] extends React.SVGProps<infer V>
    ? V
    : never
  : T;

/**
 * Returns those keys which are non-optional
 */
export type NonOptionalKeys<P extends {}> = Required<
  { [K in KnownKeys<P>]: undefined extends P[K] ? never : K }
>[KnownKeys<P>];

/**
 * Returns true if P has an index signature, otherwise false.
 * https://www.typescriptlang.org/docs/handbook/interfaces.html
 */
export type HasIndexSignature<P extends {}> = (string | number) extends keyof P
  ? true
  : number extends keyof P
  ? true
  : false;

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
 * Returns true if P has at least one non-optional keys, else false
 */
export type HasNonOptionalKeys<P extends {}> = NonOptionalKeys<P> extends never
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
  TAsComponentProps extends {}
> = {
  0: TOwnProps & { with: TAsComponentProps };
  1: TOwnProps & { with?: TAsComponentProps };
  2: TOwnProps & Omit<TAsComponentProps, keyof TOwnProps> & { with?: never };
}[HasIndexSignature<TOwnProps> extends false
  ? HasNonOptionalKeys<TAsComponentProps> extends false
    ? (1 | 2)
    : HasIntersectingNonOptionalKeys<TOwnProps, TAsComponentProps> extends false
    ? (0 | 2)
    : 0
  : 0];

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
    props: { as?: TAsComponent } & CompositeProps<
      TOwnProps,
      React.ComponentPropsWithoutRef<TAsComponent>
    > &
      React.RefAttributes<
        TAsComponent extends keyof JSX.IntrinsicElements
          ? FromReactType<TAsComponent>
          : TAsComponent
      >,
  ): CompatibleWithForwardsProps<
    TForwardsProps,
    React.ComponentPropsWithoutRef<TAsComponent>
  > extends false
    ? never
    : React.ReactElement<any> | null;

  defaultProps: CompatibleWithForwardsProps<
    TForwardsProps,
    React.ComponentPropsWithoutRef<TDefaultComponent>
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
