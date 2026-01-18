import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const OnlineApplication = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Online Application"
        subtitle="Apply online for admission"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Online Application" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Online application form will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default OnlineApplication;
