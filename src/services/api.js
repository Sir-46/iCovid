// import { Fetch } from "./Fetch";
// const token = sessionStorage.getItem("token");
import Axios from "axios";

export const getData = async () => {
  let datas = "";
  await fetch(
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=thailand",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "f38dd210e1mshdd62715b0497ea4p10480fjsnf762bef6b9d7"
      }
    }
  )
    .then(res => {
      datas = res;
    })
    .catch(err => {
      console.log(err);
    });
  return datas.json();
};

export const getListCase = async () => {
  let datas = "";
  await Axios("https://covid19-cdn.workpointnews.com/api/cases.json", {
    method: "GET"
  })
    .then(res => {
      console.log(res);
      datas = res;
    })
    .catch(err => {
      console.log(err);
    });
  return datas;
};
