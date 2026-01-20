import DynamicContentPage from "@/components/DynamicContentPage";

const TimeTable = () => {
  return (
    <DynamicContentPage
      pageSlug="time-table"
      fallbackTitle="Time Table"
      fallbackSubtitle="Class schedules and timetables for all departments"
      breadcrumbs={[{ label: "Academics" }, { label: "Time Table" }]}
    />
  );
};

export default TimeTable;
