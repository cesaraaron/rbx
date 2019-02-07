import React from "react";

import {
  FromReactType,
  HasIndexSignature,
  HasOptionalKeys,
  HasRequiredKeys,
  KeysOfUnion,
  KnownKeys,
  Lit,
  Merge,
  Omit,
  OptionalKeys,
  Prefer,
  RequiredKeys,
} from "src/types";

// Always passes when the test is run,
// but only compiles if `T` is a subtype of`U`.
export const assert = <T, U extends T>() => undefined;

describe("FromReactType", () => {
  it("should map 'div' => HTMLDivElement", () => {
    type supplied = "div";
    type received = FromReactType<supplied>;
    type expected = HTMLDivElement;

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should map 'svg' => SVGSVGElement", () => {
    type supplied = "svg";
    type received = FromReactType<supplied>;
    type expected = SVGSVGElement;

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should map React.FC<P> => React.FC<P>", () => {
    type MyComponentProps = { className: string };
    const MyComponent: React.FC<MyComponentProps> = () =>
      React.createElement("div");

    type supplied = typeof MyComponent;
    type received = FromReactType<supplied>;
    type expected = React.FC<MyComponentProps>;

    assert<received, expected>();
    assert<expected, received>();
  });
});

describe("HasIndexSignature", () => {
  it("should be true for type with string index signature", () => {
    // tslint:disable-next-line: no-any
    type supplied = { [K: string]: any };
    type received = HasIndexSignature<supplied>;
    type expected = true;

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should be true for type with number index signature", () => {
    // tslint:disable-next-line: no-any
    type supplied = { [K: number]: any };
    type received = HasIndexSignature<supplied>;
    type expected = true;

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should be true for type with string and number index signature", () => {
    // tslint:disable-next-line: no-any
    type supplied = { [K: string]: any; [K2: number]: any };
    type received = HasIndexSignature<supplied>;
    type expected = true;

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should be false for type without index signature", () => {
    type supplied = { a: string };
    type received = HasIndexSignature<supplied>;
    type expected = false;

    assert<received, expected>();
    assert<expected, received>();
  });
});

describe("HasOptionalKeys", () => {
  it("should be true when a optional key exists", () => {
    type a = { a?: string };
    type supplied = HasOptionalKeys<a>;
    type expected = true;

    assert<supplied, expected>();
  });

  it("should be false when keys are required", () => {
    type a = { a: string };
    type supplied = HasOptionalKeys<a>;
    type expected = false;

    assert<supplied, expected>();
  });

  it("should be false when no keys are present", () => {
    type a = {};
    type supplied = HasOptionalKeys<a>;
    type expected = false;

    assert<supplied, expected>();
  });

  it("should be true when keys are mixed", () => {
    type a = { a: string; b?: string };
    type supplied = HasOptionalKeys<a>;
    type expected = true;

    assert<supplied, expected>();
  });
});

describe("HasRequiredKeys", () => {
  it("should be true when a non-optional key exists", () => {
    type a = { a: string };
    type supplied = HasRequiredKeys<a>;
    type expected = true;

    assert<supplied, expected>();
  });

  it("should be false when keys are optional", () => {
    type a = { a?: string };
    type supplied = HasRequiredKeys<a>;
    type expected = false;

    assert<supplied, expected>();
  });

  it("should be false when no keys are present", () => {
    type a = {};
    type supplied = HasRequiredKeys<a>;
    type expected = false;

    assert<supplied, expected>();
  });

  it("should be true when keys are mixed", () => {
    type a = { a: string; b?: string };
    type supplied = HasRequiredKeys<a>;
    type expected = true;

    assert<supplied, expected>();
  });
});

describe("KeysOfUnion", () => {
  it("should get keys from non-union", () => {
    type supplied = { a: string };
    type received = KeysOfUnion<supplied>;
    type expected = "a";

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should get keys from non-overlapping union", () => {
    type supplied = { a: string } | { b: string };
    type received = KeysOfUnion<supplied>;
    type expected = "a" | "b";

    assert<received, expected>();
    assert<expected, received>();
  });
});

describe("KnownKeys", () => {
  it("should extract known keys with string index signature", () => {
    type supplied = {
      [K: string]: any; // tslint:disable-line:no-any
      a: string;
    };
    type received = KnownKeys<supplied>;
    type expected = "a";
    assert<received, expected>();
    assert<expected, received>();
  });

  it("should extract known keys with number index signature", () => {
    type supplied = {
      [K: number]: any; // tslint:disable-line:no-any
      1: number;
    };
    type received = KnownKeys<supplied>;
    type expected = 1;
    assert<received, expected>();
    assert<expected, received>();
  });

  it("should extract known keys with string or number index signature", () => {
    type supplied = {
      [K: string]: any; // tslint:disable-line:no-any
      [K2: number]: any; // tslint:disable-line:no-any
      a: string;
      1: number;
    };
    type received = KnownKeys<supplied>;
    type expected = "a" | 1;
    assert<received, expected>();
    assert<expected, received>();
  });

  it("should return never from something without keys", () => {
    type supplied = {};
    type received = KnownKeys<supplied>;
    type expected = never;
    assert<received, expected>();
    assert<expected, received>();
  });

  it("should return never from something with only index signature", () => {
    type supplied = { [K: string]: any }; // tslint:disable-line:no-any
    type received = KnownKeys<supplied>;
    type expected = never;
    assert<received, expected>();
    assert<expected, received>();
  });
});

describe("Lit", () => {
  it("supports expected types", () => {
    assert<Lit, string | number | boolean | undefined | null | void | {}>();
    assert<string | number | boolean | undefined | null | void | {}, Lit>();
  });
});

describe("OptionalKeys", () => {
  describe("simple", () => {
    it("should not identify required", () => {
      type a = { a: string };
      type supplied = OptionalKeys<a>;
      type expected = never;

      assert<supplied, expected>();
      assert<expected, supplied>();
    });

    it("should not identify required - type | undefined", () => {
      type a = { a: string | undefined };
      type supplied = OptionalKeys<a>;
      type expected = never;

      assert<supplied, expected>();
      assert<expected, supplied>();
    });

    it("should identify optional", () => {
      type a = { a?: string };
      type supplied = OptionalKeys<a>;
      type expected = "a";

      assert<supplied, expected>();
      assert<expected, supplied>();
    });

    it("should identify only non-optional-keys", () => {
      type a = { a: string; b: string | undefined; c?: string };
      type supplied = OptionalKeys<a>;
      type expected = "c";

      assert<supplied, expected>();
      assert<expected, supplied>();
    });

    it("should identify an optional any key", () => {
      type a = { a?: any }; // tslint:disable-line:no-any
      type supplied = OptionalKeys<a>;
      type expected = "a";

      assert<supplied, expected>();
      assert<expected, supplied>();
    });

    it("should not identify a non-optional any key", () => {
      type a = { a: any }; // tslint:disable-line:no-any
      type supplied = OptionalKeys<a>;
      type expected = never;

      assert<supplied, expected>();
      assert<expected, supplied>();
    });
  });

  describe("index signature", () => {
    it("should not identify required", () => {
      type a = { [K: string]: any; a: string }; // tslint:disable-line:no-any
      type supplied = OptionalKeys<a>;
      type expected = never;

      assert<supplied, expected>();
      assert<expected, supplied>();
    });

    it("should not identify required - type | undefined", () => {
      type a = { [K: string]: any; a: string | undefined }; // tslint:disable-line:no-any
      type supplied = OptionalKeys<a>;
      type expected = never;

      assert<supplied, expected>();
      assert<expected, supplied>();
    });

    it("should identify optional", () => {
      type a = { [K: string]: any; a?: string }; // tslint:disable-line:no-any
      type supplied = OptionalKeys<a>;
      type expected = "a";

      assert<supplied, expected>();
      assert<expected, supplied>();
    });

    it("should identify only non-optional-keys", () => {
      type a = {
        [K: string]: any; // tslint:disable-line:no-any
        a: string;
        b: string | undefined;
        c?: string;
      };
      type supplied = OptionalKeys<a>;
      type expected = "c";

      assert<supplied, expected>();
      assert<expected, supplied>();
    });
  });
});

describe("Merge", () => {
  it("should support the identity property", () => {
    type supplied = { a: string };
    type received = Merge<supplied>;
    type expected = supplied;

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should merge required, optional, and index signature", () => {
    type supplied = { a: string } & { b?: string } & {
      [K: string]: string | undefined;
    };
    type received = Merge<supplied>;
    type expected = { [K: string]: string | undefined; a: string; b?: string };

    assert<received, expected>();
    assert<expected, received>();
  });
});

describe("Omit", () => {
  describe("singleton", () => {
    it("should omit one key from singleton", () => {
      type supplied = { a: number; b: number; c: number };
      type received = Omit<supplied, "a">;
      type expected = { b: number; c: number };

      assert<received, expected>();
      assert<expected, received>();
    });

    it("should omit the union of keys from singleton", () => {
      type supplied = { a: number; b: number; c: number };
      type received = Omit<supplied, "a" | "b">;
      type expected = { c: number };

      assert<received, expected>();
      assert<expected, received>();
    });

    it("should return same type as singleton when key not present", () => {
      type supplied = { a: string };
      type received = Omit<supplied, "b">;

      assert<received, supplied>();
      assert<supplied, received>();
    });

    it("should maintain optionals", () => {
      type supplied = { a?: string };
      type received = Omit<supplied, null>;

      assert<received, supplied>();
      assert<supplied, received>();
    });

    it("should maintain index signature", () => {
      type supplied = { [K: string]: string; a: string };
      type received = Omit<supplied, "a">;
      type expected = { [K: string]: string };

      assert<received, expected>();
      assert<expected, received>();
    });

    it("should not omit on null", () => {
      type supplied = { a: number; b: number; c: number };
      type received = Omit<supplied, null>;
      type expected = supplied;

      assert<received, expected>();
      assert<expected, received>();
    });

    it("should not omit on undefined", () => {
      type supplied = { a: number; b: number };
      type received = Omit<supplied, undefined>;

      assert<received, supplied>();
      assert<supplied, received>();
    });
  });

  describe("union", () => {
    it("should omit one key from union", () => {
      type supplied = { a: string; c: number } | { b: string; c: number };
      type received = Omit<supplied, "c">;
      type expected = { a: string } | { b: string };

      assert<received, expected>();
      assert<expected, received>();
    });

    it("should omit the union of keys from union", () => {
      type supplied =
        | { a: number; d: number; e: number }
        | { b: number; d: number; e: number };
      type received = Omit<supplied, "d" | "e">;
      type expected = { a: number } | { b: number };

      assert<received, expected>();
      assert<expected, received>();
    });

    it("should return same type as union when key not present", () => {
      type supplied = { a: string } | { b: string };
      type received = Omit<supplied, "c">;

      assert<received, supplied>();
      assert<supplied, received>();
    });

    it("should maintain optionals", () => {
      type supplied = { a?: string } | { b?: string };
      type received = Omit<supplied, null>;

      assert<received, supplied>();
      assert<supplied, received>();
    });

    it("should maintain index signature", () => {
      type supplied = { [K: string]: string; a: string } | { b: string };
      type received = Omit<supplied, "a">;
      type expected = { [K: string]: string } | { b: string };

      assert<received, expected>();
      assert<expected, received>();
    });

    it("should not omit on null", () => {
      type supplied = { a: number; b: number } | { c: number; d: number };
      type received = Omit<supplied, null>;

      assert<received, supplied>();
      assert<supplied, received>();
    });

    it("should not omit on undefined", () => {
      type supplied = { a: number; b: number } | { c: number; d: number };
      type received = Omit<supplied, undefined>;

      assert<received, supplied>();
      assert<supplied, received>();
    });

    it("should exclude key from union with key optionally present", () => {
      type supplied = { a: string; c: number } | { b: string };
      type received = Omit<supplied, "c">;
      type expected = { a: string } | { b: string };

      assert<received, expected>();
      assert<expected, received>();
    });
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

describe("RequiredKeys", () => {
  it("should return 'never' when no required keys", () => {
    type supplied = { a?: string; b?: string; c?: string };
    type received = RequiredKeys<supplied>;
    type expected = never;

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should return non-optional keys", () => {
    type supplied = { a?: string; b: string; c: string };
    type received = RequiredKeys<supplied>;
    type expected = "b" | "c";

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should return required keys with an index signature", () => {
    // tslint:disable-next-line: no-any
    type supplied = { [K: string]: any; a: string; b: string };
    type received = RequiredKeys<supplied>;
    type expected = "a" | "b";

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should return never no required keys and an index signature", () => {
    type supplied = { [k: string]: string | undefined; a?: string; b?: string };
    type received = RequiredKeys<supplied>;
    type expected = never;

    assert<received, expected>();
    assert<expected, received>();
  });

  it("should not identify an optional any key", () => {
    type a = { a?: any }; // tslint:disable-line:no-any
    type supplied = RequiredKeys<a>;
    type expected = never;

    assert<supplied, expected>();
    assert<expected, supplied>();
  });

  it("should identify a non-optional any key", () => {
    type a = { a: any }; // tslint:disable-line:no-any
    type supplied = RequiredKeys<a>;
    type expected = "a";

    assert<supplied, expected>();
    assert<expected, supplied>();
  });
});
