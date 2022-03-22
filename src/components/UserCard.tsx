import { UserNormalice } from "../interfaces";

type Prop = {
  user: UserNormalice;
  files: number;
};

export const UserCard = ({ user, files }: Prop) => {
  const { L2, L3, L4, L5, days, name, total } = user;
  return (
    <article className="user">
      <div className="name-user">
        <h2>{name}</h2>
        <span className={days * 5 > total ? "disapproval" : "approved"}></span>
      </div>

      <table>
        <tbody>
          <tr>
            <th>Lvl 2</th>
            <th>Lvl 3</th>
            <th>Lvl 4</th>
            <th>Lvl 5</th>
            <th>D</th>
            <th className="total">T</th>
          </tr>
          <tr>
            <td>{L2}</td>
            <td>{L3}</td>
            <td>{L4}</td>
            <td>{L5}</td>
            <td className={days > files ? "alertDay" : ""}>{days}</td>
            <td className="total">{total}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};
