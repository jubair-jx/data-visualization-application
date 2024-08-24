import Chart from "react-apexcharts";

const NewCustomersBarGraph = ({ data }: { data: any }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "new-customers-bar-chart",
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      categories: data?.data?.map((item: { _id: unknown }) => item._id), // ['2020-01', '2020-02', ...]
      title: {
        text: "Stat Duration",
      },
    },
    yaxis: {
      title: {
        text: "New Customers",
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    title: {
      text: "New Customers Added Over Time",
      align: "center",
    },
  };

  const series: ApexAxisChartSeries = [
    {
      name: "New Customers",
      data: data?.data?.map(
        (item: { newCustomers: unknown }) => item.newCustomers
      ),
    },
  ];

  return <Chart options={options} series={series} type="bar" height={400} />;
};

export default NewCustomersBarGraph;
