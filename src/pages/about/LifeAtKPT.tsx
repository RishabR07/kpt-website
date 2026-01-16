import ContentPage from "@/components/ContentPage";

const LifeAtKPT = () => {
  return (
    <ContentPage
      title="Life at KPT"
      subtitle="Experience the vibrant campus life, events, and student activities"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Life at KPT" }]}
    />
  );
};

export default LifeAtKPT;
