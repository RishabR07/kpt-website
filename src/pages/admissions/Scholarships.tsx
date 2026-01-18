import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const Scholarships = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Scholarships"
        subtitle="Financial assistance and scholarship programs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Scholarships" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Scholarship information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Scholarships;
