import CommonHeading from "@/components/CommonHeading/CommonHeading";
import RepeatCustomersGraph from "@/components/Customers/RepeatCustomers";
import Loading from "@/components/ui/Loading";
import { useGetReapeatCutomersQuery } from "@/redux/features/api/apis";
import { useState } from "react";

function RepeatCustomer() {
  const [filter, setFilter] = useState<string>("");

  const { data, isLoading } = useGetReapeatCutomersQuery(filter, {
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
        des="You can number of repeat customers"
        title="Number of Repeat Customers"
      />

      <div className=" flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-3 font-outfit">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="select h-12 text-base font-medium bg-neutral-200 rounded-lg p-1 select-accent select-sm w-40"
        >
          <option value={""} selected className="">
            Filter By
          </option>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <RepeatCustomersGraph data={data} />
    </section>
  );
}

export default RepeatCustomer;
