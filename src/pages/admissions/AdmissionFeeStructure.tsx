import DynamicContentPage from "@/components/DynamicContentPage";

const AdmissionFeeStructure = () => {
  return (
    <DynamicContentPage
      pageSlug="admission-fee-structure"
      fallbackTitle="Fee Structure"
      fallbackSubtitle="Admission fees and payment details"
      breadcrumbs={[{ label: "Admissions" }, { label: "Fee Structure" }]}
    />
  );
};

export default AdmissionFeeStructure;
