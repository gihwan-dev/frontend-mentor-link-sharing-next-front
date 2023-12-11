"use client";

import styles from "./header.signout.module.scss";
import SignoutIcon from "public/assets/images/Vector.svg"
import {SERVER_URL} from "@/const";

export default function SignoutButton() {

    async function signOutHandler() {
        try {
            const response = await fetch(`${SERVER_URL}/auth/signOut`)
        } catch (e) {

        } finally {

        }
    }

    return <button onClick={signOutHandler} className={styles.btn}>
        <span className={styles.icon}><SignoutIcon /></span>
        <span className={styles.text}>Sign out</span>
    </button>
}