export function concat(...str: Array<string | null | boolean>) {
  return str.filter(Boolean).join(' ')
}