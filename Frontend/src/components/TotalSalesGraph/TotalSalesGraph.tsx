import { ApexOptions } from "apexcharts"; // Import ApexOptions type
import Chart from "react-apexcharts";

const TotalSalesGraph = ({ data }: { data: any }) => {
  // Define the chart options with proper typing
  const options: ApexOptions = {
    chart: {
      id: "sales-line-chart",
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      categories: data?.data?.map((item: { _id: string }) => item._id),
      title: {
        text: "Time Stamp", // Adjust based on your filter (e.g., Month, Day)
      },
    },
    yaxis: {
      title: {
        text: "Total Sales",
      },
    },
    stroke: {
      curve: "smooth", // Correct typing with "smooth" as a valid value
    },
    title: {
      text: "Total Sales",
      align: "center",
    },
  };

  // Define the series data
  const series = [
    {
      name: "Total Sales",
      data: data?.data?.map((item: { totalSales: number }) => item.totalSales),
    },
  ];

  return <Chart options={options} series={series} type="line" height={400} />;
};

export default TotalSalesGraph;
