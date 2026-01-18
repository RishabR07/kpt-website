import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const CCTEK = () => {
  return (
    <MainLayout>
      <PageHeader
        title="CCTEK"
        subtitle="Career Counseling & Training for Employability and Knowledge"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information", href: "/information" },
          { label: "CCTEK" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            CCTEK information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default CCTEK;
