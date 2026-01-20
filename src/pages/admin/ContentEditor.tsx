import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Eye, Code, FileText, Image as ImageIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const pageTitles: Record<string, string> = {
  "about-kpt": "About KPT",
  "governing-body": "Governing Body",
  "administration": "Administration",
  "statutory-committee": "Statutory Committee",
  "academic-council": "Academic Council",
  "iiic": "IIIC",
  "iqac": "IQAC",
  "life-at-kpt": "Life at KPT",
  "cse": "Computer Science & Engineering",
  "automobile": "Automobile Engineering",
  "chemical": "Chemical Engineering",
  "civil": "Civil Engineering",
  "ece": "Electronics & Communication",
  "eee": "Electrical & Electronics",
  "mechanical": "Mechanical Engineering",
  "polymer": "Polymer Technology",
  "science": "Science Department",
  "fee-structure": "Fee Structure",
  "time-table": "Time Table",
  "calendar": "Academic Calendar",
  "curriculum": "Curriculum",
  "courses": "Courses Offered",
  "procedure": "Admission Procedure",
  "online-application": "Online Application",
  "admission-fee-structure": "Fee Structure (Admissions)",
  "scholarships": "Scholarships",
  "anti-ragging": "Anti Ragging",
  "achievements": "Achievements",
  "alumni-clubs": "Alumni Clubs & Associations",
  "student-union": "Student Union",
  "events": "Events",
  "college-circulars": "College Circulars",
  "contact": "Contact",
  "departmental-circulars": "Departmental Circulars",
  "dtek": "DTEK",
  "mandatory-files": "Mandatory Files",
  "procurement": "Procurement",
  "cctek": "CCTEK",
  "faq": "FAQ",
  "placement-events": "Placement Events",
  "placement-contact": "Placement Contact",
};

const allPages = [
  { slug: "about-kpt", label: "About KPT", section: "about" },
  { slug: "governing-body", label: "Governing Body", section: "about" },
  { slug: "administration", label: "Administration", section: "about" },
  { slug: "statutory-committee", label: "Statutory Committee", section: "about" },
  { slug: "academic-council", label: "Academic Council", section: "about" },
  { slug: "iiic", label: "IIIC", section: "about" },
  { slug: "iqac", label: "IQAC", section: "about" },
  { slug: "life-at-kpt", label: "Life at KPT", section: "about" },
  { slug: "cse", label: "Computer Science & Engineering", section: "departments" },
  { slug: "automobile", label: "Automobile Engineering", section: "departments" },
  { slug: "chemical", label: "Chemical Engineering", section: "departments" },
  { slug: "civil", label: "Civil Engineering", section: "departments" },
  { slug: "ece", label: "Electronics & Communication", section: "departments" },
  { slug: "eee", label: "Electrical & Electronics", section: "departments" },
  { slug: "mechanical", label: "Mechanical Engineering", section: "departments" },
  { slug: "polymer", label: "Polymer Technology", section: "departments" },
  { slug: "science", label: "Science Department", section: "departments" },
  { slug: "fee-structure", label: "Fee Structure", section: "academics" },
  { slug: "time-table", label: "Time Table", section: "academics" },
  { slug: "calendar", label: "Academic Calendar", section: "academics" },
  { slug: "curriculum", label: "Curriculum", section: "academics" },
  { slug: "courses", label: "Courses Offered", section: "academics" },
  { slug: "procedure", label: "Admission Procedure", section: "admissions" },
  { slug: "online-application", label: "Online Application", section: "admissions" },
  { slug: "admission-fee-structure", label: "Fee Structure (Admissions)", section: "admissions" },
  { slug: "scholarships", label: "Scholarships", section: "admissions" },
  { slug: "anti-ragging", label: "Anti Ragging", section: "student-life" },
  { slug: "achievements", label: "Achievements", section: "student-life" },
  { slug: "alumni-clubs", label: "Alumni Clubs & Associations", section: "student-life" },
  { slug: "student-union", label: "Student Union", section: "student-life" },
  { slug: "events", label: "Events", section: "information" },
  { slug: "college-circulars", label: "College Circulars", section: "information" },
  { slug: "contact", label: "Contact", section: "information" },
  { slug: "departmental-circulars", label: "Departmental Circulars", section: "information" },
  { slug: "dtek", label: "DTEK", section: "information" },
  { slug: "mandatory-files", label: "Mandatory Files", section: "information" },
  { slug: "procurement", label: "Procurement", section: "information" },
  { slug: "cctek", label: "CCTEK", section: "information" },
  { slug: "faq", label: "FAQ", section: "information" },
  { slug: "placement-events", label: "Placement Events", section: "placements" },
  { slug: "placement-contact", label: "Placement Contact", section: "placements" },
];

const ContentEditor = () => {
  const { section, page } = useParams();
  const [selectedPage, setSelectedPage] = useState(page || "");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contentId, setContentId] = useState<string | null>(null);

  // Load existing content when page changes
  useEffect(() => {
    if (selectedPage) {
      loadPageContent(selectedPage);
    }
  }, [selectedPage]);

  // Set initial page from URL params
  useEffect(() => {
    if (page) {
      setSelectedPage(page);
    }
  }, [page]);

  const loadPageContent = async (pageSlug: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("page_content")
        .select("*")
        .eq("page_slug", pageSlug)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setContentId(data.id);
        setTitle(data.title);
        setSubtitle(data.subtitle || "");
        setIsPublished(data.is_published || false);
        
        // Parse content - it's stored as JSONB
        const content = data.content as { html?: string; imageUrl?: string } | null;
        if (content) {
          setHtmlContent(content.html || "");
          setImageUrl(content.imageUrl || "");
        } else {
          setHtmlContent("");
          setImageUrl("");
        }
      } else {
        // Reset form for new page
        setContentId(null);
        setTitle(pageTitles[pageSlug] || "");
        setSubtitle("");
        setHtmlContent("");
        setImageUrl("");
        setIsPublished(false);
      }
    } catch (error) {
      console.error("Error loading content:", error);
      toast.error("Failed to load page content");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedPage) {
      toast.error("Please select a page to edit");
      return;
    }

    setIsSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const contentData = {
        page_slug: selectedPage,
        title: title || pageTitles[selectedPage] || "Untitled",
        subtitle,
        content: {
          html: htmlContent,
          imageUrl: imageUrl,
        },
        is_published: isPublished,
        updated_by: user?.id || null,
      };

      let error;

      if (contentId) {
        // Update existing content
        const result = await supabase
          .from("page_content")
          .update(contentData)
          .eq("id", contentId);
        error = result.error;
      } else {
        // Insert new content
        const result = await supabase
          .from("page_content")
          .insert(contentData)
          .select()
          .single();
        error = result.error;
        if (result.data) {
          setContentId(result.data.id);
        }
      }

      if (error) throw error;

      toast.success("Content saved successfully!");
    } catch (error: any) {
      console.error("Error saving content:", error);
      toast.error(error.message || "Failed to save content");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreview = () => {
    const pageInfo = allPages.find(p => p.slug === selectedPage);
    if (pageInfo) {
      window.open(`/${pageInfo.section}/${pageInfo.slug}`, "_blank");
    } else {
      toast.info("Select a page to preview");
    }
  };

  const groupedPages = allPages.reduce((acc, page) => {
    if (!acc[page.section]) {
      acc[page.section] = [];
    }
    acc[page.section].push(page);
    return acc;
  }, {} as Record<string, typeof allPages>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Content Management</p>
          <h1 className="text-2xl font-display font-bold text-foreground">Page Editor</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={handlePreview} disabled={!selectedPage}>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button onClick={handleSave} disabled={isSaving || !selectedPage}>
            {isSaving ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Page Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Select Page
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedPage} onValueChange={setSelectedPage}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a page to edit..." />
                </SelectTrigger>
                <SelectContent className="bg-background border">
                  {Object.entries(groupedPages).map(([section, pages]) => (
                    <div key={section}>
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {section.replace("-", " ")}
                      </div>
                      {pages.map((p) => (
                        <SelectItem key={p.slug} value={p.slug}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {isLoading ? (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </CardContent>
            </Card>
          ) : selectedPage ? (
            <>
              {/* Page Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Page Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Page Title *</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter page title"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subtitle">Subtitle / Tag</Label>
                      <Input
                        id="subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        placeholder="Enter a short description"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="imageUrl" className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" />
                      Header Image URL
                    </Label>
                    <Input
                      id="imageUrl"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Paste image URL from uploads..."
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Content Editor with Source Code */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Page Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="source" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="source" className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Source Code
                      </TabsTrigger>
                      <TabsTrigger value="preview" className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Preview
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="source">
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Paste your HTML content below. You can copy HTML from any AI tool and paste it here.
                        </p>
                        <Textarea
                          value={htmlContent}
                          onChange={(e) => setHtmlContent(e.target.value)}
                          placeholder={`<!-- Paste your HTML content here -->
<div class="content">
  <h2>Section Title</h2>
  <p>Your content goes here...</p>
  
  <table class="table">
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </table>
</div>`}
                          className="font-mono text-sm min-h-[400px] bg-muted/30"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="preview">
                      <div className="border rounded-lg p-6 min-h-[400px] bg-background">
                        {htmlContent ? (
                          <div 
                            className="prose prose-sm max-w-none dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                          />
                        ) : (
                          <p className="text-muted-foreground text-center py-12">
                            No content to preview. Add some HTML in the Source Code tab.
                          </p>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select a page from the dropdown above to start editing.</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Publish Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Published</p>
                  <p className="text-sm text-muted-foreground">
                    Make this page visible
                  </p>
                </div>
                <Switch
                  checked={isPublished}
                  onCheckedChange={setIsPublished}
                  disabled={!selectedPage}
                />
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Status:{" "}
                  <span
                    className={`font-medium ${
                      isPublished ? "text-green-600" : "text-yellow-600"
                    }`}
                  >
                    {isPublished ? "Published" : "Draft"}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Help */}
          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <h4 className="font-medium text-foreground mb-2">How to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>1. Select a page from the dropdown</li>
                <li>2. Fill in the title and subtitle</li>
                <li>3. Paste your HTML content in the Source Code tab</li>
                <li>4. Preview your changes</li>
                <li>5. Toggle "Published" and save</li>
              </ul>
            </CardContent>
          </Card>

          {/* HTML Tips */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4">
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" />
                HTML Tips
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use standard HTML tags</li>
                <li>• Tables, lists, and images work</li>
                <li>• Ask AI to generate HTML</li>
                <li>• Copy-paste directly</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
