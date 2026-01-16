import ContentPage from "@/components/ContentPage";

const GoverningBody = () => {
  return (
    <ContentPage
      title="Governing Body"
      subtitle="Meet the distinguished members who guide our institution's strategic direction"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Governing Body" }]}
    />
  );
};

export default GoverningBody;
