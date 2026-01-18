import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const AdmissionProcedure = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Admission Procedure"
        subtitle="Step-by-step guide to join KPT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Admission Procedure" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Information about admission procedure will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdmissionProcedure;
