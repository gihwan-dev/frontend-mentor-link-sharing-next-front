import styles from "./index.module.scss";
import React from "react";
import { sql } from "@vercel/postgres";
import BodyLinkItem from "@/components/preview/preview.body/preview.body.link/body.link.item";

interface Platform {
  title: string;
  link: string;
  platform_id: string;
}

const PreviewBodyLink: React.FC<{
  id: string;
}> = async ({ id }) => {
  try {
    const { rows } =
      await sql`SELECT platform_id, title, link FROM platforms WHERE owner=${id}`;

    const platforms = [...rows] as Platform[];

    if (!platforms) {
      return <p>목록을 찾을 수 없습니다. 다시 시도해 주세요.</p>;
    }

    return (
      <ul className={styles.list}>
        {platforms.map(item => {
          return (
            <BodyLinkItem
              key={item.platform_id}
              title={item.title}
              link={item.link}
            />
          );
        })}
      </ul>
    );
  } catch (error) {
    return <p>에러가 발생했습니다. 다시 시도해 주세요. </p>;
  }
};

export default PreviewBodyLink;
