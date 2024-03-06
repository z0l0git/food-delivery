import bcrypt from "bcrypt";

// eslint-disable-next-line import/prefer-default-export
export const passwordHash = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const compareHash = async (password: string, hash: string) => {
  const compare = await bcrypt.compare(password, hash);
  return compare;
};
