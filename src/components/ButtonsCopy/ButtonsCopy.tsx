import { useRef } from "react";
import { copyData } from "../../Helpers/copyUsers";
import { UserNormalice } from "../../interfaces";

import { SvgNegative, SvgPositive } from "../../assets/ThumbSvgs";
import "./style.css";

interface Props {
  users: UserNormalice[];
  filesNames: string[];
}

export const ButtonsCopy = ({ users, filesNames }: Props) => {
  const noCucasRef = useRef<HTMLButtonElement | null>(null);
  const cucasRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="buttons-copy" style={{ display: "flex" }}>
      {filesNames.length > 0 && (
        <>
          <button
            className="btn-green"
            type="button"
            ref={noCucasRef}
            name="no-cucas"
            onClick={() => copyData("no-cucas", users, filesNames, noCucasRef)}
          >
            Copiar
          </button>
          <SvgPositive width={20} />

          <div className="separate"></div>

          <button
            className="btn-red"
            type="button"
            ref={cucasRef}
            name="cucas"
            onClick={() => copyData("cucas", users, filesNames, cucasRef)}
          >
            Copiar
          </button>
          <SvgNegative width={20} />
        </>
      )}
    </div>
  );
};
