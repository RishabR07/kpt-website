import DynamicContentPage from "@/components/DynamicContentPage";

const GoverningBody = () => {
  return (
    <DynamicContentPage
      pageSlug="governing-body"
      fallbackTitle="Governing Body"
      fallbackSubtitle="Meet the distinguished members who guide our institution's strategic direction"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Governing Body" }]}
    />
  );
};

export default GoverningBody;
