import React, { useState, useEffect } from "react";
import rpc from "rage-rpc";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    rpc.register("cef::login::response", (response: string) => {
      setMessage(response);
    });

    return () => {
      rpc.unregister("cef::login::response");
    };
  }, []);

  const handleLogin = () => {
    rpc
      .callClient("client::login::sendData", { username, password })
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
