import Chart from "react-apexcharts";

const RepeatCustomersGraph = ({ data }: { data: any }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "repeat-customers-radar-chart",
      type: "radar",
    },
    xaxis: {
      categories: data?.data?.map((item: any) => item._id), // ['2022', '2023', ...]
    },
    title: {
      text: "Number of Repeat Customers Over Time",
      align: "center",
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
  };

  const series = [
    {
      name: "Repeat Customers",
      data: data?.data?.map((item: any) => item.repeatCustomers),
    },
  ];

  return <Chart options={options} series={series} type="area" height={400} />;
};

export default RepeatCustomersGraph;
