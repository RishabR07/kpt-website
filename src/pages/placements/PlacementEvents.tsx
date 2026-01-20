import DynamicContentPage from "@/components/DynamicContentPage";

const PlacementEvents = () => {
  return (
    <DynamicContentPage
      pageSlug="placement-events"
      fallbackTitle="Placement Events"
      fallbackSubtitle="Training & placement events"
      breadcrumbs={[{ label: "Training & Placements" }, { label: "Events" }]}
    />
  );
};

export default PlacementEvents;
