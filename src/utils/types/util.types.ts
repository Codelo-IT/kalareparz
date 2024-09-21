export type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

export enum ExhibitorColor {
    GREEN = "green",
    YELLOW = "yellow",
    ORANGE = "orange",
}
