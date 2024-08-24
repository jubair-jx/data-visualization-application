import Dashboard from "@/pages/Dashboard/Dashboard";
import SalesGrowth from "@/pages/SalesGrowth/SalesGrowth";
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
  {
    name: "Sales Growth Over Time",
    path: "sales-growth",
    element: <SalesGrowth />,
  },
];
