import { FaRegUserCircle } from "react-icons/fa";

import { routePaths } from "@/routes/routePath";
import { sideBarItemsGenerators } from "@/utils/sideBarItemsGenerators";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SidebarLayout = () => {
  const sideItems = sideBarItemsGenerators(routePaths);

  return (
    <Sider
      style={{
        background: "#030637",
      }}
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
      onBreakpoint={() => {}}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />

      <div className="  p-4 text-center mt-5 font-bold text-lg text-gray-100">
        {" "}
        <Link className=" hover:text-gray-200" to={"/"}>
          <h1 className="">Data Visualiazation App</h1>
        </Link>
      </div>

      <div className=" mb-4">
        <div className=" mt-6 cursor-pointer">
          <FaRegUserCircle
            className=" text-gray-300 text-center mx-auto"
            fontSize={30}
          />
        </div>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["6"]}
        items={sideItems}
        style={{
          background: "#030637",
          color: "#fff",
          fontWeight: "normal",
        }}
      />
    </Sider>
  );
};

export default SidebarLayout;
