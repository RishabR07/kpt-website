import DynamicContentPage from "@/components/DynamicContentPage";

const CollegeCirculars = () => {
  return (
    <DynamicContentPage
      pageSlug="college-circulars"
      fallbackTitle="College Circulars"
      fallbackSubtitle="Official college announcements"
      breadcrumbs={[{ label: "Information" }, { label: "College Circulars" }]}
    />
  );
};

export default CollegeCirculars;
