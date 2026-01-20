import DynamicContentPage from "@/components/DynamicContentPage";

const IIIC = () => {
  return (
    <DynamicContentPage
      pageSlug="iiic"
      fallbackTitle="Institute Industry Interaction Cell (IIIC)"
      fallbackSubtitle="Bridging the gap between academia and industry for better employability"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "IIIC" }]}
    />
  );
};

export default IIIC;
