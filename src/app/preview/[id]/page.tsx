import styles from "./page.module.scss";
import PreviewHeader from "@/components/preview/preview.header/preview.header";
import PreviewBody from "@/components/preview/preview.body";

interface PreviewPageParams {
  params: {
    id: string;
  };
}

const PreviewPage: React.FC<PreviewPageParams> = async ({ params }) => {
  return (
    <div>
      <div className={styles.decoration}></div>
      <PreviewHeader />
      <PreviewBody id={params.id} />
    </div>
  );
};

export default PreviewPage;
