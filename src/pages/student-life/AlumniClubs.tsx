import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const AlumniClubs = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Alumni Clubs & Associations"
        subtitle="Connect with our alumni network"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Student Life", href: "/student-life" },
          { label: "Alumni Clubs & Associations" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Alumni clubs and associations information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AlumniClubs;
