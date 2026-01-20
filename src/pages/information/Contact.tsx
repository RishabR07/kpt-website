import DynamicContentPage from "@/components/DynamicContentPage";

const Contact = () => {
  return (
    <DynamicContentPage
      pageSlug="contact"
      fallbackTitle="Contact"
      fallbackSubtitle="Get in touch with us"
      breadcrumbs={[{ label: "Information" }, { label: "Contact" }]}
    />
  );
};

export default Contact;
