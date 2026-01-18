import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const Procurement = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Procurement"
        subtitle="Tenders and procurement notices"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information", href: "/information" },
          { label: "Procurement" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Procurement information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Procurement;
