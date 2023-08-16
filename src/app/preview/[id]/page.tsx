import { sql } from "@vercel/postgres";

import styles from "./page.module.scss";

interface PreviewPageParams {
  params: {
    id: string;
  };
}

const PreviewPage: React.FC<PreviewPageParams> = async ({ params }) => {
  const { rows } = await sql`SELECT * FROM users WHERE User_id=${params.id}`;
  return (
    <div>
      <div className={styles.decoration}></div>
      <h1>{params.id} Preview Page.</h1>
    </div>
  );
};

export default PreviewPage;
