const CR = {
  [1 / 8]: "1/8",
  [1 / 4]: "1/4",
  [1 / 2]: "1/2",
};

export function toFraction(n: number) {
  return CR[n] ?? n?.toString() ?? "ERROR";
}
