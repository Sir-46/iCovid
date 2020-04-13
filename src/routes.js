import { lazy } from "react";

const Dashboard = lazy(() => import("./views/Dashboard"));
const FAQ = lazy(() => import("./views/FAQ"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/faq", name: "FAQ", component: FAQ },
];

export default routes;
