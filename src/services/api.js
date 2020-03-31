// import { Fetch } from "./Fetch";
// const token = sessionStorage.getItem("token");

export const getData = async () => {
  const res = await fetch(
    "https://covid19-cdn.workpointnews.com/api/constants.json",
    {
      method: "GET"
    }
  );

  return res.json();
};

export const getListCase = async () => {
  const res = await fetch(
    "https://covid19-cdn.workpointnews.com/api/cases.json",
    {
      method: "GET"
    }
  );

  return res.json();
};

export const getTrend = async () => {
  const res = await fetch(
    "https://covid19-cdn.workpointnews.com/api/trend/th.json",
    {
      method: "GET"
    }
  );
  return res.json();
};
