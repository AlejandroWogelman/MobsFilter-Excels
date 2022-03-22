import { UserNormalice } from "../interfaces";

export const changeOrder = (type: string, array: UserNormalice[]) => {
  let newValue: UserNormalice[];
  if (type === "cucas") {
    newValue = [...array].sort((a, b) => {
      const Ta = a.total;
      const Tb = b.total;
      if (Ta < Tb) {
        return -1;
      }
      if (Ta > Tb) {
        return 1;
      }
      return 0;
    });
  } else {
    newValue = [...array].sort((a, b) => {
      const Ta = a.total;
      const Tb = b.total;
      if (Ta > Tb) {
        return -1;
      }
      if (Ta < Tb) {
        return 1;
      }
      return 0;
    });
  }
  return newValue;
};
