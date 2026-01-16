import ContentPage from "@/components/ContentPage";

const AboutPage = () => {
  return (
    <ContentPage
      title="About KPT"
      subtitle="Learn about our history, mission, and vision for technical education excellence"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "About KPT" }]}
    />
  );
};

export default AboutPage;
