export function initError(init: string): void {
  const msg = init + " has not been initialized!";
  throw Error(msg);
}
