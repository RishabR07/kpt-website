import ContentPage from "@/components/ContentPage";

const AcademicCouncil = () => {
  return (
    <ContentPage
      title="Academic Council"
      subtitle="The academic governing body overseeing curriculum and standards"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Academic Council" }]}
    />
  );
};

export default AcademicCouncil;
