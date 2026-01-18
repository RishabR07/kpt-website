import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const FAQ = () => {
  return (
    <MainLayout>
      <PageHeader
        title="FAQ"
        subtitle="Frequently Asked Questions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information", href: "/information" },
          { label: "FAQ" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Frequently asked questions will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
