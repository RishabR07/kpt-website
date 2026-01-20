import DynamicContentPage from "@/components/DynamicContentPage";

const StudentUnion = () => {
  return (
    <DynamicContentPage
      pageSlug="student-union"
      fallbackTitle="Student Union"
      fallbackSubtitle="Voice of the students"
      breadcrumbs={[{ label: "Student Life" }, { label: "Student Union" }]}
    />
  );
};

export default StudentUnion;
