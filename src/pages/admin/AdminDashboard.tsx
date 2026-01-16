import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Users, 
  Eye, 
  Bell,
  TrendingUp,
  ArrowUpRight,
  Calendar
} from "lucide-react";

const stats = [
  { label: "Total Pages", value: "24", change: "+2 this week", icon: FileText, color: "bg-blue-500" },
  { label: "Faculty Members", value: "0", change: "Pending update", icon: Users, color: "bg-green-500" },
  { label: "Page Views", value: "---", change: "Analytics pending", icon: Eye, color: "bg-purple-500" },
  { label: "Announcements", value: "0", change: "Add new", icon: Bell, color: "bg-orange-500" },
];

const recentPages = [
  { name: "Home Page", status: "Published", updated: "Today" },
  { name: "About KPT", status: "Draft", updated: "Pending" },
  { name: "CSE Department", status: "Draft", updated: "Pending" },
  { name: "Fee Structure", status: "Draft", updated: "Pending" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to the KPT Admin Panel. Manage your website content from here.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Recent Pages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPages.map((page, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground">{page.name}</p>
                    <p className="text-sm text-muted-foreground">{page.updated}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        page.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {page.status}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Add Announcement", icon: Bell },
                { label: "Update Faculty", icon: Users },
                { label: "Edit Home Page", icon: FileText },
                { label: "Upload Documents", icon: FileText },
              ].map((action, index) => (
                <button
                  key={index}
                  className="p-4 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group text-left"
                >
                  <action.icon className="w-6 h-6 mb-2 text-primary group-hover:text-primary-foreground" />
                  <p className="font-medium text-sm">{action.label}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="font-display font-semibold text-primary mb-2">Getting Started</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Use the sidebar navigation to access different sections of the website. 
            Each page can be edited with rich content including text, images, and documents. 
            Changes will be reflected on the public website after saving.
          </p>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
            <strong>Note:</strong> This is a static CMS interface. To enable full content management, 
            you'll need to connect a backend database. Contact your developer to set this up.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
