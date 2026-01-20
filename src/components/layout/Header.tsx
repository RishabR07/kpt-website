import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap,
  Users,
  Building2,
  BookOpen,
  FileText,
  ClipboardCheck,
  Heart,
  Trophy,
  UserCheck,
  Briefcase,
  Phone,
  Calendar,
  FileSpreadsheet,
  Award,
  HelpCircle,
  Info,
  Shield,
  Cpu,
  Car,
  Beaker,
  HardHat,
  Radio,
  Zap,
  Wrench,
  FlaskConical,
  Atom
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavChild {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
  megaMenu?: boolean;
  columns?: number;
}

const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    megaMenu: true,
    columns: 2,
    children: [
      { label: "About KPT", href: "/about", icon: <Info className="w-4 h-4" />, description: "Learn about our institution" },
      { label: "Governing Body", href: "/about/governing-body", icon: <Users className="w-4 h-4" />, description: "Our leadership team" },
      { label: "Administration", href: "/about/administration", icon: <Building2 className="w-4 h-4" />, description: "Administrative structure" },
      { label: "Statutory Committee", href: "/about/statutory-committee", icon: <FileText className="w-4 h-4" />, description: "Regulatory committees" },
      { label: "Academic Council", href: "/about/academic-council", icon: <BookOpen className="w-4 h-4" />, description: "Academic governance" },
      { label: "IIIC", href: "/about/iiic", icon: <Briefcase className="w-4 h-4" />, description: "Industry interaction" },
      { label: "IQAC", href: "/about/iqac", icon: <ClipboardCheck className="w-4 h-4" />, description: "Quality assurance" },
      { label: "Life at KPT", href: "/about/life-at-kpt", icon: <Heart className="w-4 h-4" />, description: "Campus experience" },
    ],
  },
  {
    label: "Departments",
    megaMenu: true,
    columns: 3,
    children: [
      { label: "Computer Science & Engineering", href: "/departments/cse", icon: <Cpu className="w-4 h-4" />, description: "Software & computing" },
      { label: "Automobile Engineering", href: "/departments/automobile", icon: <Car className="w-4 h-4" />, description: "Vehicle technology" },
      { label: "Chemical Engineering", href: "/departments/chemical", icon: <Beaker className="w-4 h-4" />, description: "Process engineering" },
      { label: "Civil Engineering", href: "/departments/civil", icon: <HardHat className="w-4 h-4" />, description: "Infrastructure & construction" },
      { label: "Electronics & Communication", href: "/departments/ece", icon: <Radio className="w-4 h-4" />, description: "Communication systems" },
      { label: "Electrical & Electronics", href: "/departments/eee", icon: <Zap className="w-4 h-4" />, description: "Power & electronics" },
      { label: "Mechanical Engineering", href: "/departments/mechanical", icon: <Wrench className="w-4 h-4" />, description: "Machine design" },
      { label: "Polymer Technology", href: "/departments/polymer", icon: <FlaskConical className="w-4 h-4" />, description: "Polymer science" },
      { label: "Science Department", href: "/departments/science", icon: <Atom className="w-4 h-4" />, description: "Applied sciences" },
    ],
  },
  {
    label: "Academics",
    megaMenu: true,
    columns: 2,
    children: [
      { label: "Fee Structure", href: "/academics/fee-structure", icon: <FileSpreadsheet className="w-4 h-4" />, description: "Tuition & fees details" },
      { label: "Time Table", href: "/academics/time-table", icon: <Calendar className="w-4 h-4" />, description: "Class schedules" },
      { label: "Academic Calendar", href: "/academics/calendar", icon: <Calendar className="w-4 h-4" />, description: "Important dates" },
      { label: "Curriculum", href: "/academics/curriculum", icon: <BookOpen className="w-4 h-4" />, description: "Course structure" },
      { label: "Courses Offered", href: "/academics/courses", icon: <GraduationCap className="w-4 h-4" />, description: "Available programs" },
    ],
  },
  {
    label: "Admissions",
    megaMenu: true,
    columns: 2,
    children: [
      { label: "Admission Procedure", href: "/admissions/procedure", icon: <ClipboardCheck className="w-4 h-4" />, description: "How to apply" },
      { label: "Online Application", href: "/admissions/online-application", icon: <FileText className="w-4 h-4" />, description: "Apply online now" },
      { label: "Fee Structure", href: "/admissions/fee-structure", icon: <FileSpreadsheet className="w-4 h-4" />, description: "Admission fees" },
      { label: "Scholarships", href: "/admissions/scholarships", icon: <Award className="w-4 h-4" />, description: "Financial aid options" },
    ],
  },
  {
    label: "Student Life",
    megaMenu: true,
    columns: 2,
    children: [
      { label: "Anti Ragging", href: "/student-life/anti-ragging", icon: <Shield className="w-4 h-4" />, description: "Safe campus initiative" },
      { label: "Achievements", href: "/student-life/achievements", icon: <Trophy className="w-4 h-4" />, description: "Student accomplishments" },
      { label: "Alumni Clubs & Associations", href: "/student-life/alumni-clubs", icon: <Users className="w-4 h-4" />, description: "Stay connected" },
      { label: "Student Union", href: "/student-life/student-union", icon: <UserCheck className="w-4 h-4" />, description: "Student governance" },
    ],
  },
  {
    label: "Training & Placements",
    megaMenu: true,
    columns: 1,
    children: [
      { label: "Placement Events", href: "/placements/events", icon: <Calendar className="w-4 h-4" />, description: "Upcoming drives" },
      { label: "Contact", href: "/placements/contact", icon: <Phone className="w-4 h-4" />, description: "Placement cell" },
    ],
  },
  {
    label: "Information",
    megaMenu: true,
    columns: 3,
    children: [
      { label: "Events", href: "/information/events", icon: <Calendar className="w-4 h-4" />, description: "Campus events" },
      { label: "College Circulars", href: "/information/college-circulars", icon: <FileText className="w-4 h-4" />, description: "Official notices" },
      { label: "Contact", href: "/information/contact", icon: <Phone className="w-4 h-4" />, description: "Get in touch" },
      { label: "Departmental Circulars", href: "/information/departmental-circulars", icon: <FileSpreadsheet className="w-4 h-4" />, description: "Dept. notices" },
      { label: "DTEK", href: "/information/dtek", icon: <Briefcase className="w-4 h-4" />, description: "DTEK info" },
      { label: "Mandatory Files", href: "/information/mandatory-files", icon: <FileText className="w-4 h-4" />, description: "Required documents" },
      { label: "Procurement", href: "/information/procurement", icon: <ClipboardCheck className="w-4 h-4" />, description: "Tenders & purchases" },
      { label: "CCTEK", href: "/information/cctek", icon: <Building2 className="w-4 h-4" />, description: "CCTEK info" },
      { label: "FAQ", href: "/information/faq", icon: <HelpCircle className="w-4 h-4" />, description: "Common questions" },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const getGridCols = (columns: number) => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      default:
        return "grid-cols-2";
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📞 +91-XXXXX-XXXXX</span>
            <span className="hidden sm:inline">✉️ info@kpt.edu.in</span>
          </div>
          <Link 
            to="/admin/login" 
            className="hover:text-secondary transition-colors font-medium"
          >
            Admin Login
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-primary">KPT</h1>
              <p className="text-xs text-muted-foreground">Knowledge. Progress. Technology.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                )}

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-card rounded-xl shadow-2xl border border-border overflow-hidden"
                      style={{ minWidth: item.columns === 1 ? '280px' : item.columns === 3 ? '720px' : '520px' }}
                    >
                      {/* Header */}
                      <div className="bg-primary/5 px-6 py-3 border-b border-border">
                        <h3 className="font-semibold text-primary">{item.label}</h3>
                      </div>
                      
                      {/* Menu Items Grid */}
                      <div className={`grid ${getGridCols(item.columns || 2)} gap-1 p-3`}>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`group flex items-start gap-3 p-3 rounded-lg transition-all ${
                              location.pathname === child.href
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-primary/5"
                            }`}
                          >
                            <div className={`flex-shrink-0 p-2 rounded-md transition-colors ${
                              location.pathname === child.href
                                ? "bg-primary-foreground/20"
                                : "bg-primary/10 group-hover:bg-primary/20"
                            }`}>
                              {child.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium truncate ${
                                location.pathname === child.href
                                  ? "text-primary-foreground"
                                  : "text-foreground group-hover:text-primary"
                              }`}>
                                {child.label}
                              </p>
                              {child.description && (
                                <p className={`text-xs truncate mt-0.5 ${
                                  location.pathname === child.href
                                    ? "text-primary-foreground/70"
                                    : "text-muted-foreground"
                                }`}>
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 rounded-md"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )
                          }
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && item.children && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden bg-muted/30 rounded-lg mx-2 my-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.icon && (
                                    <span className="text-primary/60">{child.icon}</span>
                                  )}
                                  <span>{child.label}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
