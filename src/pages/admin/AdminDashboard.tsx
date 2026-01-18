import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Users, 
  Bell,
  TrendingUp,
  ArrowUpRight,
  Calendar,
  Loader2
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalPages: 24,
    facultyCount: 0,
    announcementsCount: 0,
    usersCount: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [recentAnnouncements, setRecentAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch faculty count
        const { count: facultyCount } = await supabase
          .from("faculty")
          .select("*", { count: "exact", head: true });

        // Fetch announcements count
        const { count: announcementsCount } = await supabase
          .from("announcements")
          .select("*", { count: "exact", head: true });

        // Fetch users count
        const { count: usersCount } = await supabase
          .from("profiles")
          .select("*", { count: "exact", head: true });

        // Fetch recent announcements
        const { data: announcements } = await supabase
          .from("announcements")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(4);

        setStats({
          totalPages: 24,
          facultyCount: facultyCount || 0,
          announcementsCount: announcementsCount || 0,
          usersCount: usersCount || 0,
        });
        setRecentAnnouncements(announcements || []);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsData = [
    { label: "Total Pages", value: stats.totalPages.toString(), change: "All sections", icon: FileText, color: "bg-blue-500" },
    { label: "Faculty Members", value: stats.facultyCount.toString(), change: "Active faculty", icon: Users, color: "bg-green-500" },
    { label: "Users", value: stats.usersCount.toString(), change: "Registered", icon: Users, color: "bg-purple-500" },
    { label: "Announcements", value: stats.announcementsCount.toString(), change: "Published", icon: Bell, color: "bg-orange-500" },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

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
        {statsData.map((stat, index) => (
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
        {/* Recent Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Recent Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentAnnouncements.length === 0 ? (
              <p className="text-muted-foreground text-sm">No announcements yet.</p>
            ) : (
              <div className="space-y-4">
                {recentAnnouncements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        {announcement.is_urgent && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-destructive text-destructive-foreground rounded">
                            Urgent
                          </span>
                        )}
                        <p className="font-medium text-foreground">{announcement.title}</p>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="w-3 h-3" />
                        {announcement.date || "No date"}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            )}
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
                { label: "Add Announcement", icon: Bell, href: "/admin/announcements" },
                { label: "Manage Faculty", icon: Users, href: "/admin/faculty" },
                { label: "Manage Users", icon: Users, href: "/admin/users" },
                { label: "Settings", icon: FileText, href: "/admin/settings" },
              ].map((action, index) => (
                <Link
                  key={index}
                  to={action.href}
                  className="p-4 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group text-left"
                >
                  <action.icon className="w-6 h-6 mb-2 text-primary group-hover:text-primary-foreground" />
                  <p className="font-medium text-sm">{action.label}</p>
                </Link>
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
            Changes will be saved to the database and reflected on the public website.
          </p>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
            <strong>Note:</strong> You can manage users, add faculty members, and create announcements 
            using the respective sections in the sidebar.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
