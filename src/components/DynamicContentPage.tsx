import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface DynamicContentPageProps {
  pageSlug: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

interface PageContent {
  title: string;
  subtitle: string | null;
  content: {
    html?: string;
    imageUrl?: string;
  } | null;
  is_published: boolean | null;
}

const DynamicContentPage = ({ 
  pageSlug, 
  fallbackTitle, 
  fallbackSubtitle,
  breadcrumbs 
}: DynamicContentPageProps) => {
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const { data, error: fetchError } = await supabase
          .from("page_content")
          .select("title, subtitle, content, is_published")
          .eq("page_slug", pageSlug)
          .eq("is_published", true)
          .maybeSingle();

        if (fetchError) throw fetchError;
        
        if (data) {
          setPageContent({
            ...data,
            content: data.content as PageContent['content']
          });
        } else {
          setPageContent(null);
        }
      } catch (err) {
        console.error("Error fetching page content:", err);
        setError("Failed to load page content");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [pageSlug]);

  const title = pageContent?.title || fallbackTitle;
  const subtitle = pageContent?.subtitle || fallbackSubtitle;
  const htmlContent = pageContent?.content?.html;
  const imageUrl = pageContent?.content?.imageUrl;

  return (
    <MainLayout>
      <PageHeader 
        title={title} 
        subtitle={subtitle || undefined} 
        breadcrumbs={breadcrumbs}
        backgroundImage={imageUrl}
      />
      <div className="page-container">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-foreground mb-2">Error Loading Content</h2>
                <p className="text-muted-foreground">{error}</p>
              </CardContent>
            </Card>
          </motion.div>
        ) : htmlContent ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div 
              className="prose prose-lg max-w-none dark:prose-invert
                prose-headings:text-foreground prose-headings:font-display
                prose-p:text-muted-foreground
                prose-a:text-primary hover:prose-a:text-primary/80
                prose-strong:text-foreground
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-border
                prose-td:p-3 prose-td:border prose-td:border-border
                prose-tr:even:bg-muted/30
                prose-ul:list-disc prose-ol:list-decimal
                prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-foreground mb-2">Content Coming Soon</h2>
                <p className="text-muted-foreground">
                  This page is awaiting content. Please use the admin panel to add content to this section.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
};

export default DynamicContentPage;
