import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const Achievements = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Achievements"
        subtitle="Our students' accomplishments"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Student Life", href: "/student-life" },
          { label: "Achievements" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Student achievements will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Achievements;
