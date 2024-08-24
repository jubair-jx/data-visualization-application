import { LuArrowUpRightFromCircle } from "react-icons/lu";

type propsTypes = {
  data: any;
};

const ShowProductStat = ({ data }: propsTypes) => {
  const {
    icon,
    statName,
    statCount,
    statStatus,
    profit,
    percent,
    profitStatus,
  } = data;
  return (
    <>
      <section className="flex flex-wrap w-56 mx-auto flex-col gap-6 font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer">
        <div className="flex flex-wrap flex-col gap-4">
          <div className="">
            <div className=" rounded-lg">
              <span className="text-[#1e40afb2]">{icon}</span>
            </div>
          </div>
          <div className="">
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-[16px] font-semi-bold"
            >
              {statName}
            </p>
            <div className=" gap-10  ">
              <h2
                style={{ fontFamily: "Roboto" }}
                className=" font-medium text-2xl"
              >
                {statCount}
              </h2>
              <h2
                style={{ fontFamily: "Roboto" }}
                className=" font-medium text-sm"
              >
                {statStatus}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-end">
          <div
            className={`first-line flex flex-wrap items-center border ${
              profit
                ? "border-green-300 text-green-600"
                : "border-[#EE7214] text-[#FF004D]"
            }  px-2 py-1 rounded-xl text-sm gap-1`}
          >
            <span className="text-[13px]">
              <LuArrowUpRightFromCircle />
            </span>
            <span>{percent}%</span> {profitStatus}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowProductStat;
