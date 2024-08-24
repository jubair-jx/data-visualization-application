import { FaRegUserCircle } from "react-icons/fa";

import { routePaths } from "@/routes/routePath";
import { sideBarItemsGenerators } from "@/utils/sideBarItemsGenerators";
import { Layout, Menu } from "antd";

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

      <div className=" p-2 text-center mt-5 font-semibold text-lg text-white">
        <h1>Data Visualiazation App</h1>
      </div>

      <div className=" mb-4">
        <div className=" mt-6">
          <FaRegUserCircle
            className=" text-gray-300 text-center mx-auto"
            fontSize={30}
          />
        </div>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideItems}
        style={{ background: "#030637" }}
      />
    </Sider>
  );
};

export default SidebarLayout;
