import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const AdmissionFeeStructure = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Fee Structure"
        subtitle="Admission fees and payment details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Structure" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Fee structure information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdmissionFeeStructure;
