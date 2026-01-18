import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const PlacementContact = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Contact"
        subtitle="Get in touch with placement cell"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Training & Placements", href: "/placements" },
          { label: "Contact" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Placement contact information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlacementContact;
