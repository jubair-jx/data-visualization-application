import CommonHeading from "@/components/CommonHeading/CommonHeading";
import Loading from "@/components/ui/Loading";
import { useGetNewCutomersQuery } from "@/redux/features/api/apis";

function GeographicalDistribution() {
  const { data, isLoading } = useGetNewCutomersQuery("", {
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
    </section>
  );
}

export default GeographicalDistribution;
