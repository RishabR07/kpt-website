import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Save, Eye, Upload, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface ContentBlock {
  id: string;
  type: "text" | "image" | "heading";
  content: string;
}

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
};

const ContentEditor = () => {
  const { section, page } = useParams();
  const pageTitle = pageTitles[page || ""] || "Page Editor";

  const [title, setTitle] = useState(pageTitle);
  const [subtitle, setSubtitle] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([
    { id: "1", type: "text", content: "" },
  ]);

  const addBlock = (type: ContentBlock["type"]) => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type,
      content: "",
    };
    setContentBlocks([...contentBlocks, newBlock]);
  };

  const updateBlock = (id: string, content: string) => {
    setContentBlocks(
      contentBlocks.map((block) =>
        block.id === id ? { ...block, content } : block
      )
    );
  };

  const removeBlock = (id: string) => {
    if (contentBlocks.length > 1) {
      setContentBlocks(contentBlocks.filter((block) => block.id !== id));
    }
  };

  const handleSave = () => {
    toast.success("Content saved successfully!", {
      description: "Note: Connect a database to persist changes.",
    });
  };

  const handlePreview = () => {
    toast.info("Preview mode", {
      description: "Opening preview in new tab...",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground capitalize">
            {section?.replace("-", " ")} / Edit Page
          </p>
          <h1 className="text-2xl font-display font-bold text-foreground">{pageTitle}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button onClick={handleSave} className="bg-primary">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Page Details */}
          <Card>
            <CardHeader>
              <CardTitle>Page Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Page Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter page title"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="subtitle">Subtitle / Description</Label>
                <Input
                  id="subtitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  placeholder="Enter a short description"
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Blocks */}
          <Card>
            <CardHeader>
              <CardTitle>Page Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contentBlocks.map((block, index) => (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative group"
                >
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      {block.type === "heading" && (
                        <Input
                          value={block.content}
                          onChange={(e) => updateBlock(block.id, e.target.value)}
                          placeholder="Enter heading..."
                          className="font-semibold text-lg"
                        />
                      )}
                      {block.type === "text" && (
                        <Textarea
                          value={block.content}
                          onChange={(e) => updateBlock(block.id, e.target.value)}
                          placeholder="Enter paragraph text..."
                          rows={4}
                        />
                      )}
                      {block.type === "image" && (
                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                          <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                          <Input
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeBlock(block.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}

              {/* Add Block Buttons */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addBlock("heading")}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Heading
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addBlock("text")}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Paragraph
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addBlock("image")}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Image
                </Button>
              </div>
            </CardContent>
          </Card>
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
          <Card className="bg-muted">
            <CardContent className="p-4">
              <h4 className="font-medium text-foreground mb-2">Need Help?</h4>
              <p className="text-sm text-muted-foreground">
                Use the content blocks to build your page. Add headings, 
                paragraphs, and images to create rich content.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
