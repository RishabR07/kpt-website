import DepartmentPage from "@/components/DepartmentPage";
import { Atom } from "lucide-react";

const Science = () => {
  return (
    <DepartmentPage
      name="Science Department"
      shortName="Science"
      description="Foundation of engineering education with physics, chemistry, and mathematics"
      icon={<Atom className="w-8 h-8" />}
    />
  );
};

export default Science;
