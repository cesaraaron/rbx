export type Lit = string | number | boolean | undefined | null | void | {};
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Prefer<P, T> = P & Omit<T, keyof P>;
