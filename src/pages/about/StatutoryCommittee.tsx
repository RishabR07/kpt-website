import ContentPage from "@/components/ContentPage";

const StatutoryCommittee = () => {
  return (
    <ContentPage
      title="Statutory Committee"
      subtitle="Committees ensuring compliance and governance standards"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Statutory Committee" }]}
    />
  );
};

export default StatutoryCommittee;
