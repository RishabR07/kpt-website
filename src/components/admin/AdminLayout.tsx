import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  LayoutDashboard,
  FileText,
  Building2,
  BookOpen,
  Users,
  Bell,
  Settings,
  ChevronDown,
  ChevronRight,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href?: string;
  icon: React.ReactNode;
  children?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
  {
    label: "About Pages",
    icon: <FileText className="w-5 h-5" />,
    children: [
      { label: "About KPT", href: "/admin/about/about-kpt" },
      { label: "Governing Body", href: "/admin/about/governing-body" },
      { label: "Administration", href: "/admin/about/administration" },
      { label: "Statutory Committee", href: "/admin/about/statutory-committee" },
      { label: "Academic Council", href: "/admin/about/academic-council" },
      { label: "IIIC", href: "/admin/about/iiic" },
      { label: "IQAC", href: "/admin/about/iqac" },
      { label: "Life at KPT", href: "/admin/about/life-at-kpt" },
    ],
  },
  {
    label: "Departments",
    icon: <Building2 className="w-5 h-5" />,
    children: [
      { label: "Computer Science", href: "/admin/departments/cse" },
      { label: "Automobile", href: "/admin/departments/automobile" },
      { label: "Chemical", href: "/admin/departments/chemical" },
      { label: "Civil", href: "/admin/departments/civil" },
      { label: "ECE", href: "/admin/departments/ece" },
      { label: "EEE", href: "/admin/departments/eee" },
      { label: "Mechanical", href: "/admin/departments/mechanical" },
      { label: "Polymer", href: "/admin/departments/polymer" },
      { label: "Science", href: "/admin/departments/science" },
    ],
  },
  {
    label: "Academics",
    icon: <BookOpen className="w-5 h-5" />,
    children: [
      { label: "Fee Structure", href: "/admin/academics/fee-structure" },
      { label: "Time Table", href: "/admin/academics/time-table" },
      { label: "Academic Calendar", href: "/admin/academics/calendar" },
      { label: "Curriculum", href: "/admin/academics/curriculum" },
      { label: "Courses", href: "/admin/academics/courses" },
    ],
  },
  { label: "Announcements", href: "/admin/announcements", icon: <Bell className="w-5 h-5" /> },
  { label: "Faculty", href: "/admin/faculty", icon: <Users className="w-5 h-5" /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => location.pathname === href;
  const isChildActive = (children?: { href: string }[]) =>
    children?.some((child) => location.pathname === child.href);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-40 h-screen bg-sidebar text-sidebar-foreground transition-all duration-300",
          sidebarOpen ? "w-64" : "w-0 lg:w-20"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-sidebar-border flex items-center gap-3">
            <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-sidebar-primary-foreground" />
            </div>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="overflow-hidden"
              >
                <h1 className="font-display font-bold text-lg">KPT Admin</h1>
                <p className="text-xs text-sidebar-foreground/70">Content Management</p>
              </motion.div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                      isActive(item.href)
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                    )}
                  >
                    {item.icon}
                    {sidebarOpen && <span className="font-medium">{item.label}</span>}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleExpand(item.label)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                        isChildActive(item.children)
                          ? "bg-sidebar-accent text-sidebar-primary"
                          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                      )}
                    >
                      {item.icon}
                      {sidebarOpen && (
                        <>
                          <span className="font-medium flex-1 text-left">{item.label}</span>
                          {expandedItems.includes(item.label) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </>
                      )}
                    </button>
                    <AnimatePresence>
                      {sidebarOpen && expandedItems.includes(item.label) && item.children && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-8 mt-1 space-y-1 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={cn(
                                "block px-3 py-2 rounded-lg text-sm transition-colors",
                                isActive(child.href)
                                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
            >
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span className="font-medium">Back to Site</span>}
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-foreground"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
