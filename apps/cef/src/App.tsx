import React from "react";
import usePageManager from "./core/hooks/usePageManager";
import LoginPage from "./pages/login.page";

const App: React.FC = () => {
  const pageVisibility = usePageManager();

  return <div className="app">{pageVisibility.login && <LoginPage />}</div>;
};

export default App;
