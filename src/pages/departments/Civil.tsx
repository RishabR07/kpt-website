import DepartmentPage from "@/components/DepartmentPage";
import { Building2 } from "lucide-react";

const Civil = () => {
  return (
    <DepartmentPage
      name="Civil Engineering"
      shortName="Civil"
      description="Building the infrastructure of tomorrow with sustainable engineering solutions"
      icon={<Building2 className="w-8 h-8" />}
    />
  );
};

export default Civil;
