import DynamicContentPage from "@/components/DynamicContentPage";

const Events = () => {
  return (
    <DynamicContentPage
      pageSlug="events"
      fallbackTitle="Events"
      fallbackSubtitle="Upcoming and past events"
      breadcrumbs={[{ label: "Information" }, { label: "Events" }]}
    />
  );
};

export default Events;
