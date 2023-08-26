import { accessToken } from "./auth";

export async function getAllCookieStands() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}api/v1/cookie_stands/`;
  const options = createAuthorizedOptions("GET");

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addCookieStand(cookie) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}api/v1/cookie_stands/`;
  const options = createAuthorizedOptions("POST", cookie);

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteCookieStand(id) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}api/v1/cookie_stands/${id}/`;
  const options = createAuthorizedOptions("DELETE");

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function createAuthorizedOptions(method, body = null) {
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return options;
}
