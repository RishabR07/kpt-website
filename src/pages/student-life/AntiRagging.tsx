import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const AntiRagging = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Anti Ragging"
        subtitle="Zero tolerance policy against ragging"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Student Life", href: "/student-life" },
          { label: "Anti Ragging" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Anti-ragging policies and information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AntiRagging;
