import { useState } from "react";
import { Layout, Button, theme } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from "./Components/Logo";
import SideBar from "./Components/SideBar";
import ContentBody from "./Components/ContentBody";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const { Header, Sider, Content } = Layout;
  const [darkTheme, setDarkTheme] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <Layout className="docs">
        <Sider
          collapsed={isCollapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? "dark" : "light"}
          className="sidebar"
          // style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
        >
          <Logo isCollapsed={isCollapsed} />
          <SideBar darkTheme={darkTheme} isCollapsed={isCollapsed} />
        </Sider>
        <Layout>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: 0,
              background: colorBgContainer,
              // backgroundColor:"#001529"
            }}
          >
            <Button
              type="text"
              className="toggle"
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <ThemeToggle darkTheme={darkTheme} toggleTheme={toggleTheme} />
          </Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              style={{
                padding: 24,
                textAlign: "center",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <ContentBody />
              {Array.from({ length: 50 }, (_, index) => (
                <div key={index}>
                  ...
                  <br />
                </div>
              ))}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
