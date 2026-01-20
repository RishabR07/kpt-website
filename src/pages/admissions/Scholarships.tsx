import DynamicContentPage from "@/components/DynamicContentPage";

const Scholarships = () => {
  return (
    <DynamicContentPage
      pageSlug="scholarships"
      fallbackTitle="Scholarships"
      fallbackSubtitle="Financial assistance and scholarship programs"
      breadcrumbs={[{ label: "Admissions" }, { label: "Scholarships" }]}
    />
  );
};

export default Scholarships;
