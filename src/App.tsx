import { useEffect, useState, useRef } from "react";

import "./App.css";
import { ButtonsCopy } from "./components/ButtonsCopy/ButtonsCopy";
import { ButtonsFilter } from "./components/ButtonsFilter/ButtonsFilter";
import { InputFiles } from "./components/InputFiles";
import { UserCard } from "./components/UserCard";
import { filterRepeat } from "./Helpers/filterRepeat";

import { normaliceUser } from "./Helpers/normaliceUser";
import { User, UserNormalice } from "./interfaces";

function App() {
  const [users, setUsers] = useState<UserNormalice[]>([]);
  const [filesNames, setFilesNames] = useState<string[]>([]);
  const [total, settotal] = useState<number>(0);

  const actualizeFilesNames = (name: string): void => {
    if (filesNames.includes(name)) return;
    setFilesNames((files) => [...files, name]);
  };
  const actualizeUsers = (jsonData: User[]): void => {
    const filter = filterRepeat(normaliceUser(jsonData), users);
    setUsers(filter);
  };

  const handlerClear = () => {
    setUsers([]);
    setFilesNames([]);
    settotal(0);
  };

  useEffect(() => {
    const newTotal = users.reduce((acc, el, i) => {
      if (i > 0) {
        const { L2, L3, L4, L5 } = el;
        return L2 + L3 + L4 + L5 + acc;
      } else {
        return acc;
      }
    }, 0);

    settotal(newTotal);
  }, [filesNames]);

  return (
    <div className="App">
      <header>
        <h1>CONTROL DE CACERIA</h1>
      </header>
      <ButtonsFilter setUsers={setUsers} users={users} />
      <InputFiles
        actualizeFilesNames={actualizeFilesNames}
        actualizeUsers={actualizeUsers}
        filesNames={filesNames}
      />

      <section className="filesName-container">
        {filesNames.length > 0 &&
          filesNames.map((name) => (
            <article key={name}>{<p>{name}</p>}</article>
          ))}
      </section>

      <div className="total-div">
        <p>
          COFRES <span>{total}</span>
        </p>
        <ButtonsCopy users={users} filesNames={filesNames} />
        <button className="btn" type="button" onClick={handlerClear}>
          CLEAR
        </button>
      </div>

      <section className="list-containter">
        {users.length > 0 &&
          users.map((user, i) => {
            if (i > 0) {
              return (
                <UserCard user={user} files={filesNames.length} key={user.id} />
              );
            }
          })}
      </section>
    </div>
  );
}

export default App;
