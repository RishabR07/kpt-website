import ContentPage from "@/components/ContentPage";

const Curriculum = () => {
  return (
    <ContentPage
      title="Curriculum"
      subtitle="Detailed syllabus and course structure for all programs"
      breadcrumbs={[{ label: "Academics", href: "/academics/curriculum" }, { label: "Curriculum" }]}
    />
  );
};

export default Curriculum;
