import React, { useState, useEffect } from "react";
import rpc from "rage-rpc";
import { CLIENT_EVENTS, CEF_EVENTS } from "@repo/events-names";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    rpc.register(CEF_EVENTS.LOGIN.RESPONSE, (response: string) => {
      setMessage(response);
    });

    return () => {
      rpc.unregister(CEF_EVENTS.LOGIN.RESPONSE);
    };
  }, []);

  const handleLogin = () => {
    rpc
      .callClient(CLIENT_EVENTS.LOGIN.SEND_DATA, { username, password })
      .catch((err) => {
        setMessage("Login failed");
        console.error(err);
      });
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default LoginPage;
