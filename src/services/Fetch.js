import { url_api } from "../config";

export const Fetch = async (method = "POST", token, path, data = {}) => {
  try {
    const url = `${url_api}${path}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: token !== "" ? "Bearer " + token : ""
      },
      method: method || "POST",
      body: method === "POST" ? JSON.stringify(data) : null
    });
    const datas = await res.json();
    return datas;
  } catch (error) {
    return error;
  }
};
