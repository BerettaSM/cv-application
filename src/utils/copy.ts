export function deepCopy<T>(element: T) {
  if (typeof element !== "object" || element == null) {
    return element;
  }

  const copy = (Array.isArray(element) ? [] : {}) as T;

  for (const key in element) {
    copy[key] = deepCopy(element[key]);
  }

  return copy;
}
