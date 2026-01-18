import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const DepartmentalCirculars = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Departmental Circulars"
        subtitle="Department-specific announcements"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information", href: "/information" },
          { label: "Departmental Circulars" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Departmental circulars will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default DepartmentalCirculars;
