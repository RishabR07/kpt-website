import DynamicContentPage from "@/components/DynamicContentPage";

const Calendar = () => {
  return (
    <DynamicContentPage
      pageSlug="calendar"
      fallbackTitle="Academic Calendar"
      fallbackSubtitle="Important dates, events, and examination schedules"
      breadcrumbs={[{ label: "Academics" }, { label: "Academic Calendar" }]}
    />
  );
};

export default Calendar;
