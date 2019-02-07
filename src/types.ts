import React from "react";

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
 * Returns true if P has an index signature, otherwise false.
 * https://www.typescriptlang.org/docs/handbook/interfaces.html
 */
export type HasIndexSignature<P extends {}> = (string | number) extends keyof P
  ? true
  : number extends keyof P
  ? true
  : false;

/**
 * Extracts the keys of a union type
 */
// tslint:disable-next-line:no-any
export type KeysOfUnion<T> = T extends any ? keyof T : never;

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
 * The union of literal types
 */
export type Lit = string | number | boolean | undefined | null | void | {};

/**
 * Omits keys from a type. Supports union types.
 */
// tslint:disable-next-line:no-any
export type OmitU<T, K> = T extends any
  ? { [P in Exclude<KeysOfUnion<T>, K>]: T[P] }
  : never;

type _OptionalKeys<A, B> = {
  [K in KnownKeys<A> & KnownKeys<B>]: A[K] extends B[K] ? never : K
};

/**
 * OptionalKeys grabs the keys which are optional from a type `T`.
 * For example, `{ a: string; b: string | undefined; c?: string }` => `'c'`.
 */
export type OptionalKeys<T> = _OptionalKeys<T, Required<T>>[KnownKeys<T>];

/**
 * Merge types P and T, but omit those keys in T that are in P.
 */
export type Prefer<P, T> = P & Omit<T, keyof P>;

/**
 * RequiredKeys grabs the keys which are required from a type `T`.
 * For example, `{ a: string; b: string | undefined; c?: string }` => `'b' | 'c'`.
 */
export type RequiredKeys<T> = Exclude<KnownKeys<T>, OptionalKeys<T>>;

/**
 * Returns true if T has at least one required key, else false
 */
export type HasRequiredKeys<T extends {}> = RequiredKeys<T> extends never
  ? false
  : true;

/**
 * Returns true if T has at least one optional key, else false
 */
export type HasOptionalKeys<T extends {}> = OptionalKeys<T> extends never
  ? false
  : true;

/** Legacy */
/**
 * Returns those keys which are non-optional
 */
export type NonOptionalKeys<P extends {}> = Required<
  { [K in KnownKeys<P>]: undefined extends P[K] ? never : K }
>[KnownKeys<P>];

/**
 * Returns true if P has at least one non-optional keys, else false
 */
export type HasNonOptionalKeys<P extends {}> = NonOptionalKeys<P> extends never
  ? false
  : true;

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
