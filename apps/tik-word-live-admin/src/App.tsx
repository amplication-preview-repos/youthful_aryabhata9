import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GuessList } from "./guess/GuessList";
import { GuessCreate } from "./guess/GuessCreate";
import { GuessEdit } from "./guess/GuessEdit";
import { GuessShow } from "./guess/GuessShow";
import { GameSessionList } from "./gameSession/GameSessionList";
import { GameSessionCreate } from "./gameSession/GameSessionCreate";
import { GameSessionEdit } from "./gameSession/GameSessionEdit";
import { GameSessionShow } from "./gameSession/GameSessionShow";
import { WordList } from "./word/WordList";
import { WordCreate } from "./word/WordCreate";
import { WordEdit } from "./word/WordEdit";
import { WordShow } from "./word/WordShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TikWordLive"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Guess"
          list={GuessList}
          edit={GuessEdit}
          create={GuessCreate}
          show={GuessShow}
        />
        <Resource
          name="GameSession"
          list={GameSessionList}
          edit={GameSessionEdit}
          create={GameSessionCreate}
          show={GameSessionShow}
        />
        <Resource
          name="Word"
          list={WordList}
          edit={WordEdit}
          create={WordCreate}
          show={WordShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
