import { ReactNode } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface ContentPageProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: ReactNode;
}

const ContentPage = ({ title, subtitle, breadcrumbs, children }: ContentPageProps) => {
  return (
    <MainLayout>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
      <div className="page-container">
        {children || (
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

export default ContentPage;
