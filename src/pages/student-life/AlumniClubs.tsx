import DynamicContentPage from "@/components/DynamicContentPage";

const AlumniClubs = () => {
  return (
    <DynamicContentPage
      pageSlug="alumni-clubs"
      fallbackTitle="Alumni Clubs & Associations"
      fallbackSubtitle="Connect with our alumni network"
      breadcrumbs={[{ label: "Student Life" }, { label: "Alumni Clubs & Associations" }]}
    />
  );
};

export default AlumniClubs;
