export function concat(...str: Array<string | null | undefined | boolean>) {
  return str.filter(Boolean).join(' ')
}
