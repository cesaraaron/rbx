import { Lit, Omit, Prefer } from "src/types";

// Always passes when the test is run,
// but only compiles if `T` is a subtype of`U`.
export const assert = <T, U extends T>() => undefined;

describe("Lit", () => {
  it("supports expected types", () => {
    assert<Lit, string | number | boolean | undefined | null | void | {}>();
    assert<string | number | boolean | undefined | null | void | {}, Lit>();
  });
});

describe("Omit", () => {
  type supplied = { a: number; b: number; c: number };

  it("omits one key", () => {
    type received = Omit<supplied, "a">;
    type expected = { b: number; c: number };

    assert<received, expected>();
    assert<expected, received>();
  });

  it("omits the union", () => {
    type received = Omit<supplied, "a" | "b">;
    type expected = { c: number };

    assert<received, expected>();
    assert<expected, received>();
  });

  it("doesn't omit on null", () => {
    type received = Omit<supplied, null>;
    type expected = supplied;

    assert<received, expected>();
    assert<expected, received>();
  });
});

describe("Prefer", () => {
  it("is a union of disjoint sets", () => {
    type a = { a: number; b: number };
    type b = { c: number; d: number };

    type received = Prefer<a, b>;
    type expected = { a: number; b: number; c: number; d: number };

    assert<received, expected>();
    assert<expected, received>();
  });

  it("merges intersecting types, preferring the former", () => {
    type a = { a: number; b: number };
    type b = { a: string; c: number };

    type received = Prefer<a, b>;
    type expected = { a: number; b: number; c: number };

    assert<received, expected>();
    assert<expected, received>();
  });
});
