
import { UserOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <div className="h-[50px]  shadow-sm  ">
      <h1 className="ml-10 mt-3 text-xl font-medium">
       
        <UserOutlined style={{ fontSize: "23px", color: "#08c", marginRight :"5px" }} /> 
        
       Customer Support Dashboard
      </h1>
    </div>
  );
};

export default Header;
