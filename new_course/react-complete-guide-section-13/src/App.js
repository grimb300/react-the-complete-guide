// import Users from './components/Users';
import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";
import ErrorBoundary from "./components/ErrorBoundary";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  // return (
  //   <div>
  //     <Users />
  //   </div>
  // );
  return (
    <ErrorBoundary>
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
