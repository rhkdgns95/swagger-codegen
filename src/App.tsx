import React, { useState } from "react";
import fetch from "node-fetch";
import { operations } from "./generated/schema";
import { Api } from "./generated/swagger.schema";

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
    <Login2 />
  </div>
);

/**
 *  openapi-typescript
 */
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

/**
 *  swagger-typescript-api
 */
const api = new Api({
  baseUrl: "https://dev-m-cafe24-api.bankda.com",
  baseApiParams: {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiYW5rZGFtIiwiZXhwIjoiMTYwNzc5ODE2Njg3OCIsIm0iOiIxIiwiciI6IlAiLCJ0IjoiY2FmZTI0IiwicyI6Ilt7XCJuXCI6XCJxXCIsXCJlXCI6MTYwOTQyNjc5OTAwMCxcImNcIjozfV0iLCJvIjoiMCIsIm1pZCI6Imlsb3ZldTg4ODciLCJpcCI6IjExMi4yMTYuMzIuMTQwIn0.t4upd9PmHYcltgKWQMsP0nLssDplUlLR3tcwUzXQsQ4`,
    }
  }
});

const Login2 = () => {
  const [state, setState] = useState<string>("");
  const [accessToken, setAccessToken] = useState<undefined | string>(undefined);

  const handleLogin = async () => {
    const res = await api.public.authControllerLogin({ state, code: "" });
    if (res.ok) {
      if (res.data?.accessToken) {
        setAccessToken(res.data.accessToken);
      }
    }
  };

  const test = async () => {
    // api.setSecurityData({
      // Authorization:
        // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiYW5rZGFtIiwiZXhwIjoiMTYwNzc5ODE2Njg3OCIsIm0iOiIxIiwiciI6IlAiLCJ0IjoiY2FmZTI0IiwicyI6Ilt7XCJuXCI6XCJxXCIsXCJlXCI6MTYwOTQyNjc5OTAwMCxcImNcIjozfV0iLCJvIjoiMCIsIm1pZCI6Imlsb3ZldTg4ODciLCJpcCI6IjExMi4yMTYuMzIuMTQwIn0.t4upd9PmHYcltgKWQMsP0nLssDplUlLR3tcwUzXQsQ4",
    // });

    const res = await api.public.matchControllerGetOrderMatch(1, 1);
    console.log("RES: ", res);
  }

  return (
    <div>
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
          <button onClick={test}>test</button>
        </div>
      )}
    </div>
  );
};
