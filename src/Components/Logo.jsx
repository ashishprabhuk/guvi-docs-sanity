import { Image } from "antd";
import { Typography } from "antd";

export default function Logo({isCollapsed}) {
  const { Title } = Typography;
  return (
    <div className="logo">
      <div className="logo-icon">
        <Image
          width={40}
          src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_b2b52bf26a769b861fae19c5f65643cf/guvi.png"
        />
        {!isCollapsed && <Title level={3} style={{ color: "#0DBA4B", paddingTop: "5px" }}>Guvi Docs</Title>}
      </div>
    </div>
  );
}
