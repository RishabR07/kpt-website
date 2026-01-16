import DepartmentPage from "@/components/DepartmentPage";
import { Radio } from "lucide-react";

const ECE = () => {
  return (
    <DepartmentPage
      name="Electronics & Communication Engineering"
      shortName="ECE"
      description="Advancing communication technologies and electronic systems"
      icon={<Radio className="w-8 h-8" />}
    />
  );
};

export default ECE;
