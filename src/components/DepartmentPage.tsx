import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, BookOpen, Trophy, Wrench } from "lucide-react";

interface DepartmentPageProps {
  name: string;
  shortName: string;
  description: string;
  icon: React.ReactNode;
}

const DepartmentPage = ({ name, shortName, description, icon }: DepartmentPageProps) => {
  return (
    <ContentPage
      title={name}
      subtitle={description}
      breadcrumbs={[{ label: "Departments", href: "/departments/cse" }, { label: shortName }]}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Faculty Members", value: "10+", icon: Users },
          { label: "Courses Offered", value: "5", icon: BookOpen },
          { label: "Labs", value: "4", icon: Wrench },
          { label: "Placements", value: "90%", icon: Trophy },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-primary">About the Department</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              The {name} department at KPT is committed to providing quality education 
              and producing skilled professionals. Our curriculum is designed to meet 
              industry standards and prepare students for real-world challenges.
            </p>
            <p>
              Content will be added by the administrator. Please use the admin panel 
              to update this section with detailed information about the department.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Quick Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Head of Department</p>
              <p className="font-medium">To be updated</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Established</p>
              <p className="font-medium">To be updated</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Intake Capacity</p>
              <p className="font-medium">60 students</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Contact</p>
              <p className="font-medium">dept@kpt.edu.in</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ContentPage>
  );
};

export default DepartmentPage;
