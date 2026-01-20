import DynamicContentPage from "@/components/DynamicContentPage";

const Achievements = () => {
  return (
    <DynamicContentPage
      pageSlug="achievements"
      fallbackTitle="Achievements"
      fallbackSubtitle="Our students' accomplishments"
      breadcrumbs={[{ label: "Student Life" }, { label: "Achievements" }]}
    />
  );
};

export default Achievements;
