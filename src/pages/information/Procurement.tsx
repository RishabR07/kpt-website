import DynamicContentPage from "@/components/DynamicContentPage";

const Procurement = () => {
  return (
    <DynamicContentPage
      pageSlug="procurement"
      fallbackTitle="Procurement"
      fallbackSubtitle="Tenders and procurement notices"
      breadcrumbs={[{ label: "Information" }, { label: "Procurement" }]}
    />
  );
};

export default Procurement;
