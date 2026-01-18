import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const Contact = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Contact"
        subtitle="Get in touch with us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information", href: "/information" },
          { label: "Contact" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Contact information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
