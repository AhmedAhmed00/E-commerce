import BASE_URL from "./BaseUrl";

export async function getLoggedUserData(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "get",
  });

  if (!res.ok) {
    throw new Error("cannot get");
  }

  const data = await res.json();

  console.log("lksddddddddddddd");
  console.log("data", data);

  return data;
}

export async function updateUserData(body, token) {
  const res = await fetch(`${BASE_URL}/users/updateMe`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("cannot update");
  }

  const data = await res.json();
  console.log("data from update function ", data);

  return data;
}

export async function updateUserPassword(body, token) {
  const res = await fetch(
    `${BASE_URL}/users/changeMyPassword`,

    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error("cannot update");
  }

  const data = await res.json();
  return data;
}

export async function forgotPassword(body) {
  const res = await fetch(
    `${BASE_URL}/auth/forgotPasswords`,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error("cannot update");
  }

  const data = await res.json();
  return data;
}

export async function verifyResetCode(verifyCode) {
  const res = await fetch(
    `${BASE_URL}/auth/verifyResetCode`,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verifyCode),
    }
  );

  if (!res.ok) {
    throw new Error("cannot update");
  }

  const data = await res.json();
  return data;
}

export async function resetPass(body) {
  const res = await fetch(
    `${BASE_URL}/auth/resetPassword`,

    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error("cannot update");
  }

  const data = await res.json();
  return data;
}
