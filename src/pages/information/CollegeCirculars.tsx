import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const CollegeCirculars = () => {
  return (
    <MainLayout>
      <PageHeader
        title="College Circulars"
        subtitle="Official college announcements"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information", href: "/information" },
          { label: "College Circulars" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            College circulars will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default CollegeCirculars;
