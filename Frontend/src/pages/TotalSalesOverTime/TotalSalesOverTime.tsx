import CommonHeading from "@/components/CommonHeading/CommonHeading";
import TotalSalesGraph from "@/components/TotalSalesGraph/TotalSalesGraph";
import { useGetTotalSalesQuery } from "@/redux/features/api/apis";
import { useState } from "react";

const TotalSalesOverTime = () => {
  const [filter, setFilter] = useState<string>("");

  const { data, isLoading } = useGetTotalSalesQuery(filter, {
    refetchOnMountOrArgChange: true,
    skip: false,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <CommonHeading
        des="You can see actual stat and using filtering system"
        title="Your Total Sales Over Time"
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
      <TotalSalesGraph data={data} />
    </section>
  );
};

export default TotalSalesOverTime;
