import DynamicContentPage from "@/components/DynamicContentPage";

const PlacementContact = () => {
  return (
    <DynamicContentPage
      pageSlug="placement-contact"
      fallbackTitle="Placement Contact"
      fallbackSubtitle="Get in touch with placement cell"
      breadcrumbs={[{ label: "Training & Placements" }, { label: "Contact" }]}
    />
  );
};

export default PlacementContact;
