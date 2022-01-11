import React from "react";
import "./App.css";
import Login from "./login";
import { SessionStore } from "./stores/sessionStore";
const sessionStore = new SessionStore();
class App extends React.Component<any, any> {
  render() {
    return <Login store={sessionStore} />;
  }
}

export default App;
