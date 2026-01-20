import DynamicContentPage from "@/components/DynamicContentPage";

const MandatoryFiles = () => {
  return (
    <DynamicContentPage
      pageSlug="mandatory-files"
      fallbackTitle="Mandatory Files"
      fallbackSubtitle="Required documents and disclosures"
      breadcrumbs={[{ label: "Information" }, { label: "Mandatory Files" }]}
    />
  );
};

export default MandatoryFiles;
