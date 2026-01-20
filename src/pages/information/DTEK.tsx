import DynamicContentPage from "@/components/DynamicContentPage";

const DTEK = () => {
  return (
    <DynamicContentPage
      pageSlug="dtek"
      fallbackTitle="DTEK"
      fallbackSubtitle="Digital Technology & E-Knowledge"
      breadcrumbs={[{ label: "Information" }, { label: "DTEK" }]}
    />
  );
};

export default DTEK;
