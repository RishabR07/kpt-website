import DepartmentPage from "@/components/DepartmentPage";
import { Zap } from "lucide-react";

const EEE = () => {
  return (
    <DepartmentPage
      name="Electrical & Electronics Engineering"
      shortName="EEE"
      description="Powering innovation in electrical systems and power electronics"
      icon={<Zap className="w-8 h-8" />}
    />
  );
};

export default EEE;
