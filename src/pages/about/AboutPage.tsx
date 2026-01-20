import DynamicContentPage from "@/components/DynamicContentPage";

const AboutPage = () => {
  return (
    <DynamicContentPage
      pageSlug="about-kpt"
      fallbackTitle="About KPT"
      fallbackSubtitle="Learn about our history, mission, and vision for technical education excellence"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "About KPT" }]}
    />
  );
};

export default AboutPage;
