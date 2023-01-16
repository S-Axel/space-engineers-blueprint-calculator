function sortCompareFunction<Type extends string | number>(a: Type, b: Type): number {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  return 0;
}

export default sortCompareFunction;
