import Dashboard from "views/Dashboard/Dashboard.jsx";
import Tarif from "views/Tarif/Tarif.jsx";
import Pelanggan from "views/Pelanggan/Pelanggan.jsx";
import Penggunaan from "views/Penggunaan/Penggunaan.jsx";
import Pembayaran from "views/Pembayaran/Pembayaran.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  {
    path: "/tarif",
    name: "Tarif",
    icon: "business_money-coins",
    component: Tarif
  },
  {
    path: "/pelanggan",
    name: "Pelanggan",
    icon: "users_single-02",
    component: Pelanggan
  },
  {
    path: "/penggunaan",
    name: "Penggunaan",
    icon: "ui-2_settings-90",
    component: Penggunaan
  },
  {
    path: "/pembayaran",
    name: "Pembayaran",
    icon: "files_paper",
    component: Pembayaran
  },
  { redirect: true, path: "/", pathTo: "/home", name: "Client" }
];
export default dashRoutes;
