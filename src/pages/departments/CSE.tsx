import DepartmentPage from "@/components/DepartmentPage";
import { Cpu } from "lucide-react";

const CSE = () => {
  return (
    <DepartmentPage
      name="Computer Science & Engineering"
      shortName="CSE"
      description="Developing skilled professionals in software, hardware, and emerging technologies"
      icon={<Cpu className="w-8 h-8" />}
    />
  );
};

export default CSE;
