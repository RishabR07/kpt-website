import DynamicContentPage from "@/components/DynamicContentPage";

const StatutoryCommittee = () => {
  return (
    <DynamicContentPage
      pageSlug="statutory-committee"
      fallbackTitle="Statutory Committee"
      fallbackSubtitle="Committees ensuring compliance and governance standards"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Statutory Committee" }]}
    />
  );
};

export default StatutoryCommittee;
