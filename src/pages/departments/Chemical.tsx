import DepartmentPage from "@/components/DepartmentPage";
import { FlaskConical } from "lucide-react";

const Chemical = () => {
  return (
    <DepartmentPage
      name="Chemical Engineering"
      shortName="Chemical"
      description="Excellence in chemical processes, plant design, and industrial chemistry"
      icon={<FlaskConical className="w-8 h-8" />}
    />
  );
};

export default Chemical;
