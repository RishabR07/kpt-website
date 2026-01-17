import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2, Edit, Bell, Calendar, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string | null;
  is_urgent: boolean;
  is_published: boolean;
}

const Announcements = () => {
  const { user } = useAuth();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: "",
    is_urgent: false,
  });

  const fetchAnnouncements = async () => {
    try {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAnnouncements(data || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      toast.error("Failed to fetch announcements");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async () => {
    if (!formData.title || !formData.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      if (editingId) {
        const { error } = await supabase
          .from("announcements")
          .update({
            title: formData.title,
            content: formData.content,
            date: formData.date || null,
            is_urgent: formData.is_urgent,
          })
          .eq("id", editingId);

        if (error) throw error;
        toast.success("Announcement updated");
      } else {
        const { error } = await supabase.from("announcements").insert({
          title: formData.title,
          content: formData.content,
          date: formData.date || null,
          is_urgent: formData.is_urgent,
          created_by: user?.id,
        });

        if (error) throw error;
        toast.success("Announcement added");
      }

      setFormData({ title: "", content: "", date: "", is_urgent: false });
      setIsEditing(false);
      setEditingId(null);
      fetchAnnouncements();
    } catch (error) {
      console.error("Error saving announcement:", error);
      toast.error("Failed to save announcement");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (announcement: Announcement) => {
    setFormData({
      title: announcement.title,
      content: announcement.content,
      date: announcement.date || "",
      is_urgent: announcement.is_urgent,
    });
    setEditingId(announcement.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("announcements").delete().eq("id", id);
      if (error) throw error;
      toast.success("Announcement deleted");
      fetchAnnouncements();
    } catch (error) {
      console.error("Error deleting announcement:", error);
      toast.error("Failed to delete announcement");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Announcements</h1>
          <p className="text-muted-foreground">Manage news and announcements</p>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            New Announcement
          </Button>
        )}
      </div>

      {/* Form */}
      {isEditing && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                {editingId ? "Edit Announcement" : "New Announcement"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Announcement title"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Write the announcement content..."
                  rows={4}
                  className="mt-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={formData.is_urgent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, is_urgent: checked })
                  }
                />
                <Label>Mark as Urgent</Label>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>{editingId ? "Update" : "Add"} Announcement</>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setEditingId(null);
                    setFormData({ title: "", content: "", date: "", is_urgent: false });
                  }}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* List */}
      <div className="space-y-4">
        {announcements.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-foreground mb-2">No Announcements</h3>
              <p className="text-muted-foreground">
                Click "New Announcement" to add your first announcement.
              </p>
            </CardContent>
          </Card>
        ) : (
          announcements.map((announcement) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Card>
                <CardContent className="p-4 flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {announcement.is_urgent && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-destructive text-destructive-foreground rounded">
                          Urgent
                        </span>
                      )}
                      <h3 className="font-semibold text-foreground">
                        {announcement.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {announcement.content}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {announcement.date || "No date set"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(announcement)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(announcement.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Announcements;
