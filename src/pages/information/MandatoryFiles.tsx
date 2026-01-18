import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const MandatoryFiles = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Mandatory Files"
        subtitle="Required documents and disclosures"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information", href: "/information" },
          { label: "Mandatory Files" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Mandatory files will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default MandatoryFiles;
