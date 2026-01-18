import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const Events = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Events"
        subtitle="Upcoming and past events"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information", href: "/information" },
          { label: "Events" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Events information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Events;
