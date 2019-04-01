import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Client from "views/Client/Client.jsx";

var indexRoutes = [{ path: "/home", name: "Client", component: Client }, { path: "/", name: "Home", component: Dashboard }];

export default indexRoutes;
