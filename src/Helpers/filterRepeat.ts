import { UserNormalice } from "../interfaces";

export const filterRepeat = (data: UserNormalice[], state: UserNormalice[]) => {
  const filter = state
    .concat(data)
    .reduce((acc: UserNormalice[], el: UserNormalice) => {
      const { L2, L3, L4, L5, name, id, days, total } = el;
      const igual = acc.find((e) => e.id === id);
      if (igual) {
        const i = acc.indexOf(igual);
        acc[i] = {
          ...acc[i],
          L2: acc[i].L2 + L2,
          L3: acc[i].L3 + L3,
          L4: acc[i].L4 + L4,
          L5: acc[i].L5 + L5,
          name: el.name,
          days: acc[i].days + 1,
          total: total + acc[i].total,
        };
        return acc;
      } else {
        return [
          ...acc,
          {
            L2,
            L3,
            L4,
            L5,
            name,
            id,
            days,
            total,
          },
        ];
      }
    }, []);
  return filter;
};
