import ContentPage from "@/components/ContentPage";

const TimeTable = () => {
  return (
    <ContentPage
      title="Time Table"
      subtitle="Class schedules and timetables for all departments"
      breadcrumbs={[{ label: "Academics", href: "/academics/time-table" }, { label: "Time Table" }]}
    />
  );
};

export default TimeTable;
