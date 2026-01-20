import DynamicContentPage from "@/components/DynamicContentPage";

const IQAC = () => {
  return (
    <DynamicContentPage
      pageSlug="iqac"
      fallbackTitle="Internal Quality Assurance Cell (IQAC)"
      fallbackSubtitle="Ensuring continuous improvement in academic and administrative quality"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "IQAC" }]}
    />
  );
};

export default IQAC;
