import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const PlacementEvents = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Events"
        subtitle="Training & placement events"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Training & Placements", href: "/placements" },
          { label: "Events" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Placement events will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlacementEvents;
