import { UserNormalice, User } from "../interfaces/index";

export const normaliceUser = (data: User[]): UserNormalice[] => {
  const result = data.map((user: User) => {
    const {
      ["L2 (Hunt)"]: L2,
      ["L3 (Hunt)"]: L3,
      ["L4 (Hunt)"]: L4,
      ["L5 (Hunt)"]: L5,
      Name: name,
      ["User ID"]: id,
    } = user;

    return {
      L2,
      L3,
      L4,
      L5,
      name,
      id,
      days: 1,
      total: L2 + L3 * 3 + L4 * 6 + L5 * 12,
    };
  });
  return result;
};
