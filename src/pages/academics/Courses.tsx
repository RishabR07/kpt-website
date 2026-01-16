import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, GraduationCap, ArrowRight } from "lucide-react";

const courses = [
  { name: "Computer Science & Engineering", duration: "3 Years", intake: 60, href: "/departments/cse" },
  { name: "Automobile Engineering", duration: "3 Years", intake: 60, href: "/departments/automobile" },
  { name: "Chemical Engineering", duration: "3 Years", intake: 60, href: "/departments/chemical" },
  { name: "Civil Engineering", duration: "3 Years", intake: 60, href: "/departments/civil" },
  { name: "Electronics & Communication", duration: "3 Years", intake: 60, href: "/departments/ece" },
  { name: "Electrical & Electronics", duration: "3 Years", intake: 60, href: "/departments/eee" },
  { name: "Mechanical Engineering", duration: "3 Years", intake: 60, href: "/departments/mechanical" },
  { name: "Polymer Technology", duration: "3 Years", intake: 60, href: "/departments/polymer" },
];

const Courses = () => {
  return (
    <ContentPage
      title="Courses Offered"
      subtitle="Explore our range of diploma programs in engineering and technology"
      breadcrumbs={[{ label: "Academics", href: "/academics/courses" }, { label: "Courses Offered" }]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={course.href}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors">
                      {course.name}
                    </CardTitle>
                    <Badge variant="secondary">Diploma</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      {course.intake} Seats
                    </div>
                  </div>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:text-secondary transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </ContentPage>
  );
};

export default Courses;
