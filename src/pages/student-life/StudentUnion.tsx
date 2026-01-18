import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const StudentUnion = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Student Union"
        subtitle="Voice of the students"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Student Life", href: "/student-life" },
          { label: "Student Union" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Student union information will be displayed here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentUnion;
