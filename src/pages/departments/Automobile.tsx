import DepartmentPage from "@/components/DepartmentPage";
import { Car } from "lucide-react";

const Automobile = () => {
  return (
    <DepartmentPage
      name="Automobile Engineering"
      shortName="Automobile"
      description="Training future automotive engineers in vehicle design and manufacturing"
      icon={<Car className="w-8 h-8" />}
    />
  );
};

export default Automobile;
