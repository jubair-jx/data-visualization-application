import Dashboard from "@/pages/Dashboard/Dashboard";
import TotalSalesOverTime from "@/pages/TotalSalesOverTime/TotalSalesOverTime";

export const routePaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Total Sales Over Time",
    path: "total-sales",
    element: <TotalSalesOverTime />,
  },
];
