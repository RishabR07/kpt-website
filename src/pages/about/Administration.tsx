import ContentPage from "@/components/ContentPage";

const Administration = () => {
  return (
    <ContentPage
      title="Administration"
      subtitle="Our administrative team ensuring smooth operations and academic excellence"
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Administration" }]}
    />
  );
};

export default Administration;
