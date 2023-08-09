export const isValidPassword = (password: string) => {
  return password.trim().length >= 8;
};
