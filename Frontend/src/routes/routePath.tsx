import CLVCohorts from "@/pages/CLVCohorts/CLVCohorts";
import Dashboard from "@/pages/Dashboard/Dashboard";
import NewCustomers from "@/pages/NewCustomers/NewCustomers";
import RepeatCustomer from "@/pages/RepeatCustomer/RepeatCustomer";
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
  {
    name: "New Customers Added",
    path: "new-customers",
    element: <NewCustomers />,
  },
  {
    name: "Repeat Customers",
    path: "repeat-customers",
    element: <RepeatCustomer />,
  },
  {
    name: "Customer Lifetime Value",
    path: "clv-cohorts",
    element: <CLVCohorts />,
  },
];
