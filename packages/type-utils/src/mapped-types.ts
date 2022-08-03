import { Primitive } from './aliases-and-guards';

/**
 * Credits to all the people who given inspiration and shared some very useful code snippets
 * in the following github issue: https://github.com/Microsoft/TypeScript/issues/12215
 */

/**
 * SetIntersection (same as Extract)
 * @desc Set intersection of given union types `A` and `B`
 * @example
 *   // Expect: "2" | "3"
 *   SetIntersection<'1' | '2' | '3', '2' | '3' | '4'>;
 *
 *   // Expect: () => void
 *   SetIntersection<string | number | (() => void), Function>;
 */
export type SetIntersection<A, B> = A extends B ? A : never;

/**
 * Mutable
 * @desc From `T` make all properties become mutable
 * @example
 *    type Props = {
 *      readonly name: string;
 *      readonly age: number;
 *      readonly visible: boolean;
 *    };
 *
 *    // Expect: { name: string; age: number; visible: boolean; }
 *    Mutable<Props>;
 */
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };
