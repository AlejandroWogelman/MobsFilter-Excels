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
      .filter((u) => u.total >= u.days * 5)
      .map((u, i) =>
        u.name !== "Anonymous"
          ? `${u.name} D:${u.days} ${
              u.days > filesNames.length ? "(D +1)" : ""
            } T: ${u.total}  \n`
          : null
      );

    navigator.clipboard.writeText(filter.join("-"));
    setTimeout(() => {
      ref.current!.innerHTML = "Copiar";
    }, 3000);
  } else {
    ref.current!.innerText = "Copiado";
    const filter = users
      .filter((u) => u.total < u.days * 5)
      .map((u) =>
        u.name !== "Anonymous"
          ? `${u.name} D:${u.days} ${
              u.days > filesNames.length ? "(D +1)" : ""
            } T: ${u.total}  \n`
          : null
      )
      .join("-");

    navigator.clipboard.writeText(filter);
    setTimeout(() => {
      ref.current!.innerHTML = "Copiar";
    }, 3000);
  }
};
