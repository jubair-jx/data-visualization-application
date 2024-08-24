import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

function SalesGrowthGraph({ data }: { data: any }) {
  const options: ApexOptions = {
    chart: {
      id: "growth-rate-bar-chart",
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      categories: data?.data?.map((item: { period: string }) => item.period), // ['2022-Q1', '2022-Q2', etc.]
      title: {
        text: "Period",
      },
    },
    yaxis: {
      title: {
        text: "Growth Rate (%)",
      },
    },
    title: {
      text: "Sales Growth Rate Over Time",
      align: "center",
    },
  };

  const series = [
    {
      name: "Growth Rate",
      data: data?.data?.map(
        (item: { growthRate: number | null }) => item.growthRate || 0
      ), // Null values replaced with 0
    },
  ];
  return <Chart options={options} series={series} type="area" height={400} />;
}

export default SalesGrowthGraph;
