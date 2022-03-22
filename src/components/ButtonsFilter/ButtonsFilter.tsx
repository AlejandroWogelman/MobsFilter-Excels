import { changeOrder } from "../../Helpers/changeOrder";
import { UserNormalice } from "../../interfaces";

interface Props {
  users: UserNormalice[];
  setUsers: (e: UserNormalice[]) => void;
}

export const ButtonsFilter = ({ users, setUsers }: Props) => {
  const setOrderUsers = (name: string): void => {
    if (users.length < 1) return;
    const newState = changeOrder(name, users);
    setUsers(newState);
  };
  return (
    <div className="btn-container">
      <small>Ordenar por:</small>
      <button type="button" name="cucas" onClick={() => setOrderUsers("cucas")}>
        CUCAS
      </button>
      <button
        type="button"
        name="no-cucas"
        onClick={() => setOrderUsers("no-cucas")}
      >
        NO-CUCAS
      </button>
    </div>
  );
};
