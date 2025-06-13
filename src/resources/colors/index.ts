export const colors = {};

export type ColorKeys = keyof typeof colors;
export type ColorDefinitions = {[key in ColorKeys]: string};
