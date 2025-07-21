import { Card } from "antd";
import { data } from "../../data/cardData.json";
import type { DataCardProps } from "../../typs/prop.type";


const DataCard = ({ total, open, pending, closed }: DataCardProps) => {
  return (
   <div className="flex flex-wrap gap-4 justify-center mt-8 container max-w-[1300px] mx-auto">

      {data.map((item) => {
        let value = 0;
        if (item.content === "Total Tickets") value = total;
        else if (item.content === "Open Tickets") value = open;
        else if (item.content === "Pending Tickets") value = pending;
        else if (item.content === "Closed Tickets") value = closed;

        return (
          <Card
            key={item.id}
           
          className="w-full sm:w-[300px] !bg-gray-200 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-xl font-medium text-center"
          >

            <p className="mb-3">{item.content}</p>
            <p className="text-2xl">
              <item.icon
                style={{ fontSize: "23px",  marginRight: "5px" , color: item.color }}
              />
              {value}
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default DataCard;
