import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const TableHeader = () => {
  return (
     <div className="mt-10 container max-w-7xl mx-auto mb-10 lg:text-left text-center">
      <>
  <Title level={2} style={{ margin: 0 }}>Support Tickets</Title>
  
  <Paragraph type="secondary" style={{ margin: 0 , padding:3} }>
    Manage and track customer support tickets. Click on any row to view detailed information.
  </Paragraph>

 
</>
     </div>
  )
}

export default TableHeader