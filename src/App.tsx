import React, { useState } from "react";
import fetch from "node-fetch";
import { operations } from "./generated/schema";

const baseUrl = "http://localhost:3001/public/api";

async function login(
  body: operations["AuthController_login"]["requestBody"]["application/json"]
) {
  const path = `${baseUrl}/auth`;
  return fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export default () => (
  <div>
    <Login />
  </div>
);

const Login = () => {
  const [state, setState] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string>("");

  const handleLogin = async () => {
    const res = await login({ code, state });
    const result = (await res.json()) as operations["AuthController_login"]["responses"]["200"]["application/json"];
    if (result.accessToken) {
      setAccessToken(result.accessToken);
    }
  };

  return (
    <>
      {accessToken ? (
        <p>로그인됨: {accessToken}</p>
      ) : (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <button onClick={handleLogin}>로그인</button>
        </div>
      )}
    </>
  );
};
