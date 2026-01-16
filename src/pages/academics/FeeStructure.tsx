import ContentPage from "@/components/ContentPage";

const FeeStructure = () => {
  return (
    <ContentPage
      title="Fee Structure"
      subtitle="Transparent fee details for all diploma programs"
      breadcrumbs={[{ label: "Academics", href: "/academics/fee-structure" }, { label: "Fee Structure" }]}
    />
  );
};

export default FeeStructure;
