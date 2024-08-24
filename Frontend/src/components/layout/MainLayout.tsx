import { Layout, theme } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import HomeStat from "../HomeStat/HomeStat";
import SidebarLayout from "./SidebarLayout";

const { Content } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();

  return (
    <Layout style={{ height: "115vh" }}>
      <SidebarLayout />

      <Layout>
        <Content>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {location.pathname === "/" ? <HomeStat /> : <Outlet />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
