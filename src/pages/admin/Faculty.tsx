import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, Edit, Users, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

interface Faculty {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
}

const departments = [
  "Computer Science",
  "Mechanical",
  "Civil",
  "Electrical",
  "Electronics",
  "Chemical",
  "Automobile",
  "Polymer",
  "Science",
];

const Faculty = () => {
  const [facultyList, setFacultyList] = useState<Faculty[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    email: "",
    phone: "",
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.department) {
      toast.error("Please fill in required fields");
      return;
    }

    if (editingId) {
      setFacultyList(
        facultyList.map((f) =>
          f.id === editingId ? { ...f, ...formData } : f
        )
      );
      toast.success("Faculty updated");
    } else {
      const newFaculty: Faculty = {
        id: Date.now().toString(),
        ...formData,
      };
      setFacultyList([...facultyList, newFaculty]);
      toast.success("Faculty added");
    }

    setFormData({ name: "", designation: "", department: "", email: "", phone: "" });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (faculty: Faculty) => {
    setFormData({
      name: faculty.name,
      designation: faculty.designation,
      department: faculty.department,
      email: faculty.email,
      phone: faculty.phone,
    });
    setEditingId(faculty.id);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    setFacultyList(facultyList.filter((f) => f.id !== id));
    toast.success("Faculty removed");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Faculty Management</h1>
          <p className="text-muted-foreground">Add and manage faculty members</p>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Faculty
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
              <CardTitle>{editingId ? "Edit Faculty" : "Add Faculty"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Dr. John Doe"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={(e) =>
                      setFormData({ ...formData, designation: e.target.value })
                    }
                    placeholder="Professor, HOD, Lecturer"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="department">Department *</Label>
                  <Select
                    value={formData.department}
                    onValueChange={(value) =>
                      setFormData({ ...formData, department: value })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@kpt.edu.in"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91-XXXXXXXXXX"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleSubmit}>
                  {editingId ? "Update" : "Add"} Faculty
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setEditingId(null);
                    setFormData({ name: "", designation: "", department: "", email: "", phone: "" });
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
      {facultyList.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-semibold text-foreground mb-2">No Faculty Added</h3>
            <p className="text-muted-foreground">
              Click "Add Faculty" to start adding faculty members.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facultyList.map((faculty) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(faculty)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(faculty.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground">{faculty.name}</h3>
                  <p className="text-sm text-muted-foreground">{faculty.designation}</p>
                  <p className="text-sm text-primary font-medium mt-1">{faculty.department}</p>
                  {(faculty.email || faculty.phone) && (
                    <div className="mt-3 pt-3 border-t border-border space-y-1">
                      {faculty.email && (
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {faculty.email}
                        </p>
                      )}
                      {faculty.phone && (
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {faculty.phone}
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Faculty;
