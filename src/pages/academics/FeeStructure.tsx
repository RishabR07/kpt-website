import DynamicContentPage from "@/components/DynamicContentPage";

const FeeStructure = () => {
  return (
    <DynamicContentPage
      pageSlug="fee-structure"
      fallbackTitle="Fee Structure"
      fallbackSubtitle="Transparent fee details for all diploma programs"
      breadcrumbs={[{ label: "Academics" }, { label: "Fee Structure" }]}
    />
  );
};

export default FeeStructure;
