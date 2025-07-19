import { Card  } from "antd";
import { data } from "../../data/cardData.json";


const DataCard = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8 container max-w-[1300px] mx-auto">
      {data.map((item) => (
        <Card key={item.id} style={{ width: 300 }} className=" !bg-gray-200 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-xl font-medium">
          <p className="mb-3">{item.content}</p>
          <p className="text-2xl"> <item.icon style={{ fontSize: "23px", color: "#08c", marginRight :"5px" }} /> {item.value}</p>
         
        </Card>
      ))}
    </div>
  );
};

export default DataCard;
