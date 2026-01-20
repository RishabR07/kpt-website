import DynamicContentPage from "@/components/DynamicContentPage";

const DepartmentalCirculars = () => {
  return (
    <DynamicContentPage
      pageSlug="departmental-circulars"
      fallbackTitle="Departmental Circulars"
      fallbackSubtitle="Department-specific announcements"
      breadcrumbs={[{ label: "Information" }, { label: "Departmental Circulars" }]}
    />
  );
};

export default DepartmentalCirculars;
