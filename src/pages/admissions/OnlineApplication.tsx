import DynamicContentPage from "@/components/DynamicContentPage";

const OnlineApplication = () => {
  return (
    <DynamicContentPage
      pageSlug="online-application"
      fallbackTitle="Online Application"
      fallbackSubtitle="Apply online for admission"
      breadcrumbs={[{ label: "Admissions" }, { label: "Online Application" }]}
    />
  );
};

export default OnlineApplication;
