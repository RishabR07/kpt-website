import DynamicContentPage from "@/components/DynamicContentPage";

const AdmissionProcedure = () => {
  return (
    <DynamicContentPage
      pageSlug="procedure"
      fallbackTitle="Admission Procedure"
      fallbackSubtitle="Step-by-step guide to join KPT"
      breadcrumbs={[{ label: "Admissions" }, { label: "Admission Procedure" }]}
    />
  );
};

export default AdmissionProcedure;
