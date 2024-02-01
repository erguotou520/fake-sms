export function randomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generateAppId(): string {
  // generate a random string as app id
  return randomString(16);
}

export function generateSecret(): string {
  // generate a random string as secret
  return randomString(32);
}
