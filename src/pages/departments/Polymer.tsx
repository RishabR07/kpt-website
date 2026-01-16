import DepartmentPage from "@/components/DepartmentPage";
import { Layers } from "lucide-react";

const Polymer = () => {
  return (
    <DepartmentPage
      name="Polymer Technology"
      shortName="Polymer"
      description="Specializing in polymer science, plastics, and material engineering"
      icon={<Layers className="w-8 h-8" />}
    />
  );
};

export default Polymer;
