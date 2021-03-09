import React from "react";
import "./App.css";
import Login from "./login";
import { SessionStore } from "./stores/sessionStore";

class App extends React.Component<any, any> {
  render() {
    const sessionStore = new SessionStore();
    return (
      <>
        <Login store={sessionStore} />
      </>
    )
  }
}

export default App;
