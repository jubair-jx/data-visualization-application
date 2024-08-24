import CustomerLifetimeValueGraph from "@/components/Cohorts/Cohorts";
import CommonHeading from "@/components/CommonHeading/CommonHeading";
import Loading from "@/components/ui/Loading";
import { useGetCohortsByValueQuery } from "@/redux/features/api/apis";

function CLVCohorts() {
  const { data, isLoading } = useGetCohortsByValueQuery("", {
    refetchOnMountOrArgChange: true,
    skip: false,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <CommonHeading
        title="Customer Lifetime Value by Cohorts"
        des="You can see the fifetime Value by Cohorts"
      />

      <CustomerLifetimeValueGraph data={data} />
    </section>
  );
}

export default CLVCohorts;
