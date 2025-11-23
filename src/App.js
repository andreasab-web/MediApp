import React, { useState } from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { auth, db } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={(loggedInUser) => setUser(loggedInUser)} />
      ) : (
        <Chat user={user} onLogout={() => setUser(null)} />
      )}
    </div>
  );
}

export default App;
