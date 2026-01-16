import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  ArrowRight,
  Calendar,
  Bell,
  Building2,
  Cpu,
  Cog,
  Zap,
  FlaskConical
} from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const departments = [
  { name: "Computer Science", icon: Cpu, href: "/departments/cse", color: "bg-blue-500" },
  { name: "Mechanical", icon: Cog, href: "/departments/mechanical", color: "bg-orange-500" },
  { name: "Civil", icon: Building2, href: "/departments/civil", color: "bg-green-500" },
  { name: "Electrical", icon: Zap, href: "/departments/eee", color: "bg-yellow-500" },
  { name: "Electronics", icon: Cpu, href: "/departments/ece", color: "bg-purple-500" },
  { name: "Chemical", icon: FlaskConical, href: "/departments/chemical", color: "bg-pink-500" },
];

const stats = [
  { value: "9+", label: "Departments", icon: BookOpen },
  { value: "5000+", label: "Students", icon: Users },
  { value: "200+", label: "Faculty", icon: GraduationCap },
  { value: "50+", label: "Years Legacy", icon: Award },
];

const announcements = [
  { title: "Admission Open 2024-25", date: "Jan 15, 2024", urgent: true },
  { title: "Annual Sports Meet Schedule", date: "Jan 10, 2024", urgent: false },
  { title: "Placement Drive - TCS", date: "Jan 8, 2024", urgent: true },
  { title: "Technical Symposium Registration", date: "Jan 5, 2024", urgent: false },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCampus})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
                Established 1970
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Shaping Tomorrow's <span className="text-secondary">Engineers</span>
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
                Welcome to KPT - Where knowledge meets innovation. We are committed to 
                providing world-class technical education and nurturing future leaders 
                in engineering and technology.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link to="/academics/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-medium">About Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Excellence in Technical Education Since 1970
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KPT has been at the forefront of technical education for over five decades. 
                Our institution is dedicated to providing quality education, fostering innovation, 
                and developing skilled professionals who contribute to the nation's growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With state-of-the-art laboratories, experienced faculty, and industry partnerships, 
                we ensure our students are ready for the challenges of the modern world.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">
                  Read More About KPT
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <Card className="bg-primary text-primary-foreground p-6">
                  <GraduationCap className="w-8 h-8 mb-3 text-secondary" />
                  <h3 className="font-display font-semibold mb-2">Quality Education</h3>
                  <p className="text-sm text-primary-foreground/80">Industry-aligned curriculum</p>
                </Card>
                <Card className="bg-muted p-6">
                  <Users className="w-8 h-8 mb-3 text-primary" />
                  <h3 className="font-display font-semibold text-foreground mb-2">Expert Faculty</h3>
                  <p className="text-sm text-muted-foreground">Experienced professionals</p>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="bg-muted p-6">
                  <Award className="w-8 h-8 mb-3 text-primary" />
                  <h3 className="font-display font-semibold text-foreground mb-2">Placements</h3>
                  <p className="text-sm text-muted-foreground">Top company recruitments</p>
                </Card>
                <Card className="bg-secondary text-secondary-foreground p-6">
                  <BookOpen className="w-8 h-8 mb-3" />
                  <h3 className="font-display font-semibold mb-2">Modern Labs</h3>
                  <p className="text-sm text-secondary-foreground/80">State-of-art facilities</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium">Our Departments</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2">
              Explore Our Programs
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Choose from 9 specialized departments offering diploma programs in various engineering disciplines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={dept.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${dept.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <dept.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                        {dept.name}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/departments/cse">
                View All Departments
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements & Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Announcements */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-secondary" />
                <h2 className="font-display text-2xl font-bold text-primary">Announcements</h2>
              </div>
              <div className="space-y-4">
                {announcements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {item.urgent && (
                            <span className="px-2 py-1 text-xs font-medium bg-destructive text-destructive-foreground rounded">
                              New
                            </span>
                          )}
                          <div>
                            <h3 className="font-medium text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                              <Calendar className="w-3 h-3" />
                              {item.date}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-6">Quick Links</h2>
              <div className="space-y-3">
                {[
                  { label: "Admission Enquiry", href: "/academics/courses" },
                  { label: "Fee Structure", href: "/academics/fee-structure" },
                  { label: "Time Table", href: "/academics/time-table" },
                  { label: "Academic Calendar", href: "/academics/calendar" },
                  { label: "Download Forms", href: "#" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of students who have built successful careers through KPT. 
              Take the first step towards your future today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
