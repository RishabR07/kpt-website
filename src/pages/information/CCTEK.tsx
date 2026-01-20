import DynamicContentPage from "@/components/DynamicContentPage";

const CCTEK = () => {
  return (
    <DynamicContentPage
      pageSlug="cctek"
      fallbackTitle="CCTEK"
      fallbackSubtitle="Career Counseling & Training for Employability and Knowledge"
      breadcrumbs={[{ label: "Information" }, { label: "CCTEK" }]}
    />
  );
};

export default CCTEK;
