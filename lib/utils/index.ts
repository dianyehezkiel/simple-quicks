export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function isString (text: unknown): text is string {
  return typeof text === 'string' || text instanceof String;
}