import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save, Upload, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const handleSave = () => {
    toast.success("Settings saved!", {
      description: "Note: Connect a database to persist changes.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage website settings and branding</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                defaultValue="KPT - Knowledge Progress Technology"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                defaultValue="Excellence in Technical Education"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="description">Site Description</Label>
              <Textarea
                id="description"
                defaultValue="Official website of KPT Polytechnic College"
                rows={3}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Branding */}
        <Card>
          <CardHeader>
            <CardTitle>Branding</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>College Logo</Label>
              <div className="mt-2 flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Logo
                </Button>
              </div>
            </div>
            <div>
              <Label>Favicon</Label>
              <div className="mt-2 flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Favicon
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                defaultValue="+91-XXXXX-XXXXX"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="info@kpt.edu.in"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                defaultValue="College Campus Address, City, State - PIN"
                rows={3}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="facebook">Facebook</Label>
              <Input
                id="facebook"
                placeholder="https://facebook.com/kpt"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="twitter">Twitter</Label>
              <Input
                id="twitter"
                placeholder="https://twitter.com/kpt"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                placeholder="https://linkedin.com/company/kpt"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="instagram">Instagram</Label>
              <Input
                id="instagram"
                placeholder="https://instagram.com/kpt"
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} className="bg-primary">
          <Save className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;
