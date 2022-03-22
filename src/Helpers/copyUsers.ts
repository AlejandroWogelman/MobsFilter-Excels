import { UserNormalice } from "../interfaces";

export const copyData = (
  name: string,
  users: UserNormalice[],
  filesNames: string[],
  ref: { current: HTMLButtonElement | null }
) => {
  if (name === "no-cucas") {
    ref.current!.innerText = "Copiado";
    const filter = users
      .filter((u) => u.total >= filesNames.length * 5)
      .map((u, i) =>
        u.name !== "Anonymous"
          ? `${u.name} -lvl2: ${u.L2} -lvl3: ${u.L3} -lvl4: ${u.L4} -lvl5: ${u.L5} -T: ${u.total} \n`
          : null
      )
      .join("-");

    navigator.clipboard.writeText(filter);
    setTimeout(() => {
      ref.current!.innerHTML = "Copiar";
    }, 3000);
  } else {
    ref.current!.innerText = "Copiado";
    const filter = users
      .filter((u) => u.total < filesNames.length * 5)
      .map((u) =>
        u.name !== "Anonymous"
          ? `${u.name} -lvl2: ${u.L2} -lvl3: ${u.L3} -lvl4: ${u.L4} -lvl5: ${u.L5} -T: ${u.total} \n`
          : null
      )
      .join("-");

    navigator.clipboard.writeText(filter);
    setTimeout(() => {
      ref.current!.innerHTML = "Copiar";
    }, 3000);
  }
};
