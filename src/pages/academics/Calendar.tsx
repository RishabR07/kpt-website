import ContentPage from "@/components/ContentPage";

const Calendar = () => {
  return (
    <ContentPage
      title="Academic Calendar"
      subtitle="Important dates, events, and examination schedules"
      breadcrumbs={[{ label: "Academics", href: "/academics/calendar" }, { label: "Academic Calendar" }]}
    />
  );
};

export default Calendar;
