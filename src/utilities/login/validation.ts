export const isValidPassword = (password: string) => {
  return password.trim().length >= 8;
};

export const isValidFirstName = (firstName: string) => {
  return firstName.trim().length !== 0;
};

export const isValidLastName = (lastName: string) => {
  return lastName.trim().length !== 0;
};
