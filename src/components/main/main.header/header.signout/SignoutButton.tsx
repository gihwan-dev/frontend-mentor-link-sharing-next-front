import styles from "./header.signout.module.scss";
import {signOut} from "next-auth/react";
import SignoutIcon from "public/assets/images/Vector.svg"

export default function SignoutButton() {
    return <button onClick={() =>signOut()} className={styles.btn}>
        <span className={styles.icon}><SignoutIcon /></span>
        <span className={styles.text}>Sign out</span>
    </button>
}