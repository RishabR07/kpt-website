import DynamicContentPage from "@/components/DynamicContentPage";

const Administration = () => {
  return (
    <DynamicContentPage
      pageSlug="administration"
      fallbackTitle="Administration"
      fallbackSubtitle="Our administrative team ensuring smooth operations and academic excellence"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Administration" }]}
    />
  );
};

export default Administration;
