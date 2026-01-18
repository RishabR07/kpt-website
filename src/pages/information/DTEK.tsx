import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const DTEK = () => {
  return (
    <MainLayout>
      <PageHeader
        title="DTEK"
        subtitle="Digital Technology & E-Knowledge"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information", href: "/information" },
          { label: "DTEK" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            DTEK information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default DTEK;
