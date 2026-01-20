import DynamicContentPage from "@/components/DynamicContentPage";

const AntiRagging = () => {
  return (
    <DynamicContentPage
      pageSlug="anti-ragging"
      fallbackTitle="Anti Ragging"
      fallbackSubtitle="Zero tolerance policy against ragging"
      breadcrumbs={[{ label: "Student Life" }, { label: "Anti Ragging" }]}
    />
  );
};

export default AntiRagging;
