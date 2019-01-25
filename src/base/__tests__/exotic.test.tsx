import { ForwardRefAsExoticComponentAsFinalType } from "src/base/exotic";
import { Generic } from "src/base/generic";

export type Y1 = ForwardRefAsExoticComponentAsFinalType<typeof Generic, {}>;
export type Y2 = ForwardRefAsExoticComponentAsFinalType<
  typeof Generic,
  { as: "span" }
>;
export type Z = React.ComponentPropsWithoutRef<typeof Generic>;

// import classNames from "classnames";
// import Enzyme from "enzyme";
// import React from "react";

// import { Prefer } from "src/types";

// // notice the collision between these types with the `a` prop.
// type GrandParentProps = Partial<{ a: string; b: string; className: string }>;
// type ParentProps = Partial<{ a: number; c: string; className: string }>;
// type ChildProps = Partial<{ a: boolean; d: string; className: string }>;

// const GrandParent = forwardRefAs<GrandParentProps>(
//   ({ as, a, b, className, asProps, ...rest }, ref) => {
//     return React.createElement(as, {
//       className: classNames(
//         {
//           [`grandparent-a-${a}`]: a,
//           [`grandparent-b-${b}`]: b,
//         },
//         className,
//       ),
//       ref,
//       ...rest,
//       ...asProps,
//     });
//   },
//   { as: "div" },
// );
// GrandParent.displayName = "GrandParent";

// export type X = React.ComponentPropsWithoutRef<typeof GrandParent>;

// const Parent = forwardRefAs<ParentProps>(
//   ({ as, a, c, className, asProps, ...rest }, ref) => {
//     return React.createElement(as, {
//       className: classNames(
//         {
//           [`parent-a-${a}`]: a,
//           [`parent-c-${c}`]: c,
//         },
//         className,
//       ),
//       ref,
//       ...rest,
//       ...asProps,
//     });
//   },
//   { as: "span" },
// );
// Parent.displayName = "Parent";

// const Child = forwardRefAs<ChildProps>(
//   ({ as, a, d, className, asProps, ...rest }, ref) => {
//     return React.createElement(as, {
//       className: classNames(
//         {
//           [`child-a-${a}`]: a,
//           [`child-d-${d}`]: d,
//         },
//         className,
//       ),
//       ref,
//       ...rest,
//       ...asProps,
//     });
//   },
//   { as: "p" },
// );
// Child.displayName = "Child";

// describe("exotic", () => {
//   it("should have the proper structure (complex)", () => {
//     const node = (
//       <GrandParent
//         a="a"
//         as={Parent}
//         asProps={{ as: Child, a: "asdf", c: "c", e: "e" }}
//       />
//     );
//     const parentWrapper = Enzyme.shallow(node);
//     const childWrapper = parentWrapper.dive();
//     console.log(childWrapper.debug());
//     console.log("x");
//     console.log("x");
//     console.log("x");
//   });
// });

// import React from "react";

// // tslint:disable:no-reserved-keywords

// /**
//  * Maps a keyof JSX.IntrinsicElement (e.g. 'div' or 'svg') or a
//  * React.ComponentType to it's type.
//  *
//  * For example:
//  *   FromReactType<"div"> ==> HTMLDivElement
//  *   FromReactType<"svg"> ==> SVGSVGElement
//  *   FromReactType<React.FC<P>. ==> React.FC<P>
//  */
// export type FromReactType<
//   T extends React.ReactType
// > = T extends keyof JSX.IntrinsicElements
//   ? JSX.IntrinsicElements[T] extends React.DetailedHTMLFactory<
//       React.HTMLAttributes<infer U>,
//       infer U
//     >
//     ? U
//     : JSX.IntrinsicElements[T] extends React.SVGProps<infer V>
//     ? V
//     : never
//   : T;

// export type ForwardRefAsExoticComponent<
//   TOwnProps,
//   TDefaultComponent extends React.ReactType
// > = Pick<
//   React.ForwardRefExoticComponent<TDefaultComponent>,
//   Exclude<
//     keyof React.ForwardRefExoticComponent<TDefaultComponent>,
//     "defaultProps"
//   >
// > & {
//   <TAsComponent extends React.ReactType = TDefaultComponent>(
//     props: {
//       as?: TAsComponent;
//       // asProps?: React.ComponentPropsWithoutRef<TAsComponent>;
//       asProps?: React.ComponentPropsWithoutRef<TAsComponent>;
//     } & Prefer<TOwnProps, React.ComponentProps<TAsComponent>> &
//       React.RefAttributes<
//         TAsComponent extends keyof JSX.IntrinsicElements
//           ? FromReactType<TAsComponent>
//           : TAsComponent
//       >,
//   ): JSX.Element | null;
//   defaultProps: {
//     as: TDefaultComponent;
//     asProps?: React.ComponentPropsWithoutRef<TDefaultComponent>;
//   } & Partial<TOwnProps & React.ComponentPropsWithoutRef<TDefaultComponent>>;
//   displayName: string;
//   propTypes: React.WeakValidationMap<
//     {
//       [k in
//         | "as"
//         | keyof TOwnProps
//         // tslint:disable-next-line:no-any
//         | keyof React.ComponentPropsWithoutRef<TDefaultComponent>]: any
//     }
//   >;
// };

// export function forwardRefAs<
//   TOwnProps,
//   TDefaultComponent extends React.ReactType = React.ReactType
// >(
//   factory: React.RefForwardingComponent<
//     HTMLElement | SVGElement | React.ComponentType,
//     TOwnProps & {
//       as: React.ReactType;
//       asProps?: React.ComponentPropsWithoutRef<TDefaultComponent>;
//     }
//   >,
//   defaultProps: Partial<
//     Prefer<
//       React.PropsWithoutRef<
//         TOwnProps & {
//           as: TDefaultComponent;
//           asProps?: React.ComponentPropsWithoutRef<TDefaultComponent>;
//         }
//       > &
//         React.RefAttributes<FromReactType<TDefaultComponent>>,
//       React.ComponentPropsWithoutRef<TDefaultComponent>
//     >
//   >,
// ) {
//   const forward = React.forwardRef(factory);
//   forward.defaultProps = defaultProps;

//   return forward as ForwardRefAsExoticComponent<TOwnProps, TDefaultComponent>;
// }
