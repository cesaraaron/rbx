import React from "react";

import { Omit } from "../types";

// tslint:disable:no-reserved-keywords

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
  { [K in keyof P]: undefined extends P[K] ? never : K }
>[keyof P];

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
 * Does TAsComponentProps have an index signature, masking it's required props?
 *   --> return 0
 * Does TAsComponentProps have no required props?
 *   --> return 0 | 1
 * Is there an interesection between TAsComponentProps props that are required
 * and TOwnProps?
 *   --> return 0
 * --> return 0 | 1
 */
export type CompositeProps<
  TOwnProps extends {},
  TAsComponentProps extends {}
> = {
  0: TOwnProps & { with: TAsComponentProps };
  1: TOwnProps & { with?: TAsComponentProps };
  2: TOwnProps & Omit<TAsComponentProps, keyof TOwnProps> & { with?: never };
}[HasIndexSignature<TAsComponentProps> extends false
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
  TOwnProps extends {},
  TExtendedProps = TOwnProps & {
    as?: TDefaultComponent;
    with?: React.ComponentProps<TDefaultComponent>;
  }
> = Pick<
  React.ForwardRefExoticComponent<TExtendedProps>,
  keyof React.ForwardRefExoticComponent<TExtendedProps>
>;

// tslint:disable:no-any
export type ForwardRefAsExoticComponent<
  TDefaultComponent extends React.ReactType<TDefaultComponentProps>,
  TOwnProps extends {},
  TForwardsProps extends {},
  TDefaultComponentProps extends {} = React.ComponentProps<TDefaultComponent>
> = NonCallableForwardRefExoticComponentProps<TDefaultComponent, TOwnProps> & {
  (
    props: { as: never } & CompositeProps<TOwnProps, TDefaultComponentProps> &
      React.RefAttributes<
        TDefaultComponent extends keyof JSX.IntrinsicElements
          ? FromReactType<TDefaultComponent>
          : TDefaultComponent
      >,
  ): React.ReactElement<any> | null;

  <
    TAsComponent extends React.ReactType = TDefaultComponent,
    TAsComponentProps = React.ComponentProps<TAsComponent>
  >(
    props: { as: TAsComponent } & CompositeProps<TOwnProps, TAsComponentProps> &
      React.RefAttributes<
        TAsComponent extends keyof JSX.IntrinsicElements
          ? FromReactType<TAsComponent>
          : TAsComponent
      >,
  ): React.ReactElement<any> | null;

  defaultProps: { as: TDefaultComponent } & Partial<TOwnProps>;
  displayName: string;
  propTypes?: React.WeakValidationMap<{ [k in "as" | keyof TOwnProps]: any }>;
};

export function forwardRefAs<
  TDefaultComponent extends React.ReactType<TDefaultComponentProps>,
  TOwnProps extends {},
  TForwardsProps extends {},
  TDefaultComponentProps extends {} = React.ComponentProps<TDefaultComponent>
>(
  Component: React.RefForwardingComponent<
    any,
    TOwnProps & { as: React.ReactType; with?: any }
  >,
  defaultProps: ForwardRefAsExoticComponent<
    TDefaultComponent,
    TOwnProps,
    TForwardsProps,
    TDefaultComponentProps
  >["defaultProps"],
) {
  const factory = React.forwardRef(Component);
  factory.defaultProps = {};
  Object.assign(factory.defaultProps, defaultProps);

  return factory as ForwardRefAsExoticComponent<
    TDefaultComponent,
    TOwnProps,
    TForwardsProps,
    TDefaultComponentProps
  >;
}
// tslint:enable:no-any
