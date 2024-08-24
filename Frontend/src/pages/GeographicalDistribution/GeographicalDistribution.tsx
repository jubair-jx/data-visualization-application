import CommonHeading from "@/components/CommonHeading/CommonHeading";
import CustomerMap from "@/components/CustomerDistribution/CustomerDistribution";
import Loading from "@/components/ui/Loading";
import { useGetGeographicalDistributionQuery } from "@/redux/features/api/apis";

function GeographicalDistribution() {
  const { data, isLoading } = useGetGeographicalDistributionQuery({
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
        title="Geographical Distribution of Customers"
        des="You can see the geographical distribution of customers"
      />
      <CustomerMap data={data}/>
    </section>
  );
}

export default GeographicalDistribution;
