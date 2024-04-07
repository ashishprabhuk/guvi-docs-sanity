import { Menu, Input, Button, AutoComplete } from "antd";
import { FaHtml5, FaBootstrap, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { CloseSquareFilled } from "@ant-design/icons";
import { useState } from "react";

export default function SideBar({ darkTheme, isCollapsed }) {
  const [options, setOptions] = useState([]);
  return (
    <Menu theme={darkTheme ? "dark" : "light"} mode="inline" className="menu">
      {!isCollapsed ? (
        <Input
          className="search-box"
          size="large"
          placeholder="Search..."
          prefix={<FiSearch />}
          classNames="search-box"
        />
      ) : (
        // <AutoComplete
        //   options={options}
        //   style={{
        //     width: 200,
        //   }}
        //   prefix={<FiSearch />}
        //   onSearch={(text) => setOptions(getPanelValue(text))}
        //   placeholder="Search..."
        //   allowClear={{
        //     clearIcon: <CloseSquareFilled />,
        //   }}
        // />
        // <Button
        //   className="search-box"
        //   style={{
        //     width: "40px",
        //     height: "40px",
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //   }}

        // >
        <FiSearch
          className="search-box"
          style={{ fontSize: "25px", marginTop: "3px", marginBottom: "5px" }}
        />
        // </Button>
      )}
      <Menu.SubMenu
        key="html"
        icon={<FaHtml5 style={{ fontSize: "22px", verticalAlign: "middle" }} />}
        title="HTML"
      >
        <Menu.SubMenu key="Elements" title="Elements">
          <Menu.Item key="h1">h1</Menu.Item>
          <Menu.Item key="h2">h2</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="Attributes" title="Attributes">
          <Menu.Item key="alt">alt</Menu.Item>
          <Menu.Item key="class">class</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="CSS"
        icon={
          <IoLogoCss3 style={{ fontSize: "22px", verticalAlign: "middle" }} />
        }
        title="CSS"
      >
        <Menu.SubMenu key="Selectors" title="Selectors">
          <Menu.Item key="active">:active</Menu.Item>
          <Menu.Item key="disabled">:disabled</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="Display" title="Display">
          <Menu.Item key="display-box">display-box</Menu.Item>
          <Menu.Item key="display-inside">display-inside</Menu.Item>
          <Menu.Item key="display-outside">display-outside</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="JavaScript"
        icon={
          <RiJavascriptFill
            style={{ fontSize: "22px", verticalAlign: "middle" }}
          />
        }
        title="JavaScript"
      >
        <Menu.SubMenu key="Arrays" title="Arrays">
        <Menu.Item key="array.map">array.map</Menu.Item>
          <Menu.Item key="array.filter">array.filter</Menu.Item>
          <Menu.Item key="array.reduce">array.reduce</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="Strings" title="Strings">
        <Menu.Item key="string.split">string.split</Menu.Item>
          <Menu.Item key="string.trim">string.trim</Menu.Item>
          <Menu.Item key="string.toLowerCase">string.toLowerCase</Menu.Item>
          <Menu.Item key="string.toUpperCase">string.toUpperCase</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="BootStrap"
        icon={
          <FaBootstrap style={{ fontSize: "22px", verticalAlign: "middle" }} />
        }
        title="BootStrap"
      ></Menu.SubMenu>
      <Menu.SubMenu
        key="ReactJS"
        icon={<FaReact style={{ fontSize: "22px", verticalAlign: "middle" }} />}
        title="ReactJS"
      ></Menu.SubMenu>
      <Menu.SubMenu
        key="NodeJS"
        icon={
          <FaNodeJs style={{ fontSize: "22px", verticalAlign: "middle" }} />
        }
        title="NodeJS"
      ></Menu.SubMenu>
      <Menu.SubMenu
        key="ExpressJS"
        icon={
          <SiExpress style={{ fontSize: "22px", verticalAlign: "middle" }} />
        }
        title="ExpressJS"
      ></Menu.SubMenu>
      <Menu.SubMenu
        key="MongoDB"
        icon={
          <DiMongodb style={{ fontSize: "22px", verticalAlign: "middle" }} />
        }
        title="MongoDB"
      ></Menu.SubMenu>
      <Menu.SubMenu
        key="MySQL"
        icon={<SiMysql style={{ fontSize: "22px", verticalAlign: "middle" }} />}
        title="MySQL"
      ></Menu.SubMenu>
      <Menu.SubMenu
        key="AWS"
        icon={<FaAws style={{ fontSize: "22px", verticalAlign: "middle" }} />}
        title="AWS"
      ></Menu.SubMenu>
    </Menu>
  );
}
