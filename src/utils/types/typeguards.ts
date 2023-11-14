
export type Nullable<T> = T | null | undefined;

export const isNotNull = <T>(object: Nullable<T>): object is T => object !== null && object !== undefined;
export const isNull = <T>(object: Nullable<T>): object is T => object === null || object === undefined;
