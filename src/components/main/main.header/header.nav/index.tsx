"use client";

import styles from "./header.nav.module.scss";
import LinkIcon from "public/assets/images/icon-link.svg";
import Link from "next/link";
import ProfileIcon from "public/assets/images/icon-profile-details-header.svg";
import { usePathname } from "next/navigation";

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <section className={styles.container}>
      <Link
        className={pathname === "/main/links" ? styles.active : ""}
        href={"/main/links"}
      >
        <LinkIcon />
        <p>Links</p>
      </Link>
      <Link
        className={pathname === "/main/profile" ? styles.active : ""}
        href={"/main/profile"}
      >
        <ProfileIcon />
        <p>Profile Details</p>
      </Link>
    </section>
  );
};

export default HeaderNav;
