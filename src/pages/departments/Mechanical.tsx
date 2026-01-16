import DepartmentPage from "@/components/DepartmentPage";
import { Cog } from "lucide-react";

const Mechanical = () => {
  return (
    <DepartmentPage
      name="Mechanical Engineering"
      shortName="Mechanical"
      description="Engineering excellence in design, manufacturing, and thermal systems"
      icon={<Cog className="w-8 h-8" />}
    />
  );
};

export default Mechanical;
