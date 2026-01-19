import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About KPT", href: "/about" },
      { label: "Governing Body", href: "/about/governing-body" },
      { label: "Administration", href: "/about/administration" },
      { label: "Statutory Committee", href: "/about/statutory-committee" },
      { label: "Academic Council", href: "/about/academic-council" },
      { label: "IIIC", href: "/about/iiic" },
      { label: "IQAC", href: "/about/iqac" },
      { label: "Life at KPT", href: "/about/life-at-kpt" },
    ],
  },
  {
    label: "Departments",
    children: [
      { label: "Computer Science & Engineering", href: "/departments/cse" },
      { label: "Automobile Engineering", href: "/departments/automobile" },
      { label: "Chemical Engineering", href: "/departments/chemical" },
      { label: "Civil Engineering", href: "/departments/civil" },
      { label: "Electronics & Communication", href: "/departments/ece" },
      { label: "Electrical & Electronics", href: "/departments/eee" },
      { label: "Mechanical Engineering", href: "/departments/mechanical" },
      { label: "Polymer Technology", href: "/departments/polymer" },
      { label: "Science Department", href: "/departments/science" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Fee Structure", href: "/academics/fee-structure" },
      { label: "Time Table", href: "/academics/time-table" },
      { label: "Academic Calendar", href: "/academics/calendar" },
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Courses Offered", href: "/academics/courses" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Admission Procedure", href: "/admissions/procedure" },
      { label: "Online Application", href: "/admissions/online-application" },
      { label: "Fee Structure", href: "/admissions/fee-structure" },
      { label: "Scholarships", href: "/admissions/scholarships" },
    ],
  },
  {
    label: "Student Life",
    children: [
      { label: "Anti Ragging", href: "/student-life/anti-ragging" },
      { label: "Achievements", href: "/student-life/achievements" },
      { label: "Alumni Clubs & Associations", href: "/student-life/alumni-clubs" },
      { label: "Student Union", href: "/student-life/student-union" },
    ],
  },
  {
    label: "Training & Placements",
    children: [
      { label: "Placement Events", href: "/placements/events" },
      { label: "Contact", href: "/placements/contact" },
    ],
  },
  {
    label: "Information",
    children: [
      { label: "Events", href: "/information/events" },
      { label: "College Circulars", href: "/information/college-circulars" },
      { label: "Contact", href: "/information/contact" },
      { label: "Departmental Circulars", href: "/information/departmental-circulars" },
      { label: "DTEK", href: "/information/dtek" },
      { label: "Mandatory Files", href: "/information/mandatory-files" },
      { label: "Procurement", href: "/information/procurement" },
      { label: "CCTEK", href: "/information/cctek" },
      { label: "FAQ", href: "/information/faq" },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

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
            to="/admin" 
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
          <div className="hidden lg:flex items-center gap-1">
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
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-xl border border-border overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block px-4 py-3 text-sm transition-colors ${
                            location.pathname === child.href
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-primary/5 hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
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
            className="lg:hidden"
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
              className="lg:hidden border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )
                          }
                        >
                          {item.label}
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
                              className="pl-4 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.label}
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
