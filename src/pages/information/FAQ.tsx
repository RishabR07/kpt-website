import DynamicContentPage from "@/components/DynamicContentPage";

const FAQ = () => {
  return (
    <DynamicContentPage
      pageSlug="faq"
      fallbackTitle="FAQ"
      fallbackSubtitle="Frequently Asked Questions"
      breadcrumbs={[{ label: "Information" }, { label: "FAQ" }]}
    />
  );
};

export default FAQ;
