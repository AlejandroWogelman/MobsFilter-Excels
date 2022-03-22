import { ChangeEvent, useRef } from "react";
import { read, utils } from "xlsx";
import { User } from "../interfaces";

type propsParam = {
  actualizeFilesNames: (e: string) => void;
  actualizeUsers: (jsonData: User[]) => void;
  filesNames: string[];
};

export const InputFiles = ({
  actualizeUsers,
  actualizeFilesNames,
  filesNames,
}: propsParam) => {
  const ref = useRef<any>();
  const readExcel = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (e.target.files !== null) {
      if (filesNames.includes(e.target.files[0].name)) {
        e.target.value = "";
        return;
      }
      const file = e.target.files[0];

      const data = await file.arrayBuffer();

      const workbook = read(data);

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      const jsonData: User[] = utils.sheet_to_json(worksheet);

      actualizeUsers(jsonData);

      actualizeFilesNames(file.name);
      e.target.value = "";
    }
  };

  return (
    <div className="input-container">
      <label htmlFor="input">Seleccionar Excels</label>
      <input
        title="archivos"
        onChange={(e) => readExcel(e)}
        type="file"
        name="exel"
        id="input"
        ref={ref}
      />
    </div>
  );
};
