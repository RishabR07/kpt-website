import DynamicContentPage from "@/components/DynamicContentPage";

const LifeAtKPT = () => {
  return (
    <DynamicContentPage
      pageSlug="life-at-kpt"
      fallbackTitle="Life at KPT"
      fallbackSubtitle="Experience the vibrant campus life, events, and student activities"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Life at KPT" }]}
    />
  );
};

export default LifeAtKPT;
