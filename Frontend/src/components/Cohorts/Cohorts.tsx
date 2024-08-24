import Chart from "react-apexcharts";

const CustomerLifetimeValueGraph = ({ data }: { data: any }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "clv-heatmap-chart",
      type: "heatmap",
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            { from: 0, to: 5000, color: "#522B47", name: "Low CLV" },
            { from: 5000, to: 6000, color: "#8DAA9D", name: "Medium CLV" },
            { from: 6000, to: 7000, color: "#0F0E0E", name: "High CLV" },
          ],
        },
      },
    },
    xaxis: {
      categories: data?.data?.map((item: any) => item.cohortMonth),
      title: {
        text: "Cohort Month",
      },
    },
    yaxis: {
      title: {
        text: "Customer Lifetime Value",
      },
    },
    title: {
      text: "Customer Lifetime Value by Cohorts",
      align: "center",
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "CLV",
      data: data?.data?.map((item: any) => ({
        x: item.cohortMonth,
        y: item.clv,
      })),
    },
  ];

  return (
    <Chart options={options} series={series} type="heatmap" height={400} />
  );
};

export default CustomerLifetimeValueGraph;
