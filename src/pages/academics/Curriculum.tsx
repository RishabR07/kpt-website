import DynamicContentPage from "@/components/DynamicContentPage";

const Curriculum = () => {
  return (
    <DynamicContentPage
      pageSlug="curriculum"
      fallbackTitle="Curriculum"
      fallbackSubtitle="Detailed syllabus and course structure for all programs"
      breadcrumbs={[{ label: "Academics" }, { label: "Curriculum" }]}
    />
  );
};

export default Curriculum;
