import DynamicContentPage from "@/components/DynamicContentPage";

const AcademicCouncil = () => {
  return (
    <DynamicContentPage
      pageSlug="academic-council"
      fallbackTitle="Academic Council"
      fallbackSubtitle="The academic governing body overseeing curriculum and standards"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Academic Council" }]}
    />
  );
};

export default AcademicCouncil;
