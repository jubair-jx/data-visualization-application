import { BsCartDash } from "react-icons/bs";
import {
  MdOutlineWorkHistory,
  MdSignalWifiStatusbarNotConnected,
} from "react-icons/md";
import { PiMoneyDuotone } from "react-icons/pi";
import ShowProductStat from "./ShowProductStat";

const ProductStat = () => {
  const productStatData = [
    {
      icon: <BsCartDash fontSize={28} />,
      statName: "All Gift Orders",
      statCount: 1350,
      statStatus: "Order Recieved",
      profit: false,
      profitStatus: "decrease",
      percent: 45,
    },
    {
      icon: <MdOutlineWorkHistory fontSize={28} />,
      statName: "Order History",
      statCount: 640,
      statStatus: "Order Processing",
      profitStatus: "increase",
      profit: true,
      percent: 79,
    },
    {
      icon: <MdSignalWifiStatusbarNotConnected fontSize={28} />,
      statName: "Order Status",
      statCount: 1654,
      statStatus: "Order Completed",
      profitStatus: "decrease",
      profit: false,
      percent: 23,
    },
    {
      icon: <PiMoneyDuotone fontSize={28} />,
      statName: "Payment Info",
      statCount: "1243 $",
      profitStatus: "increase",
      statStatus: "Payment Due",
      profit: true,
      percent: 89,
    },
  ];
  return (
    <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 mt-8 mb-6">
      {productStatData?.map((data: object, index: number) => (
        <ShowProductStat key={index} data={data} />
      ))}
    </section>
  );
};

export default ProductStat;
