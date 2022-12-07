const COMPARE_FUNCTION = {
  string: (a, b) => a.localeCompare(b),
  number: (a, b) => a - b,
};

export default COMPARE_FUNCTION;
