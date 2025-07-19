import { Button } from "antd";
import type { FormPageProps } from "../../typs/prop.type";



export default function FormPage({ onAddUser }: FormPageProps) {
  return (
    <div className="mt-10 container max-w-7xl mx-auto">
      <Button type="primary" onClick={onAddUser}>
        Add User
      </Button>
    </div>
  );
}
