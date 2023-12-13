"use client";

import styles from "./header.signout.module.scss";
import SignoutIcon from "public/assets/images/Vector.svg"
import {SERVER_URL} from "@/const";
import {useRouter} from "next/navigation";

export default function SignoutButton() {
    const router = useRouter();

    async function signOutHandler() {
        try {
            const response = await fetch(`${SERVER_URL}/auth/signout`, {
                credentials: "include",
            });
            if (!response.ok) {
                window.alert("네트워크 상태가 불안정합니다. 다시 시도해 주세요.");``
                return;
            }
            const data = await response.json();
            window.alert(data.message);
            router.replace("/login")
            return;
        } catch (e) {
            window.alert("네트워크 상태가 불안정합니다. 다시 시도해 주세요.");
            return;
        } finally {

        }
    }

    return <button onClick={signOutHandler} className={styles.btn}>
        <span className={styles.icon}><SignoutIcon /></span>
        <span className={styles.text}>Sign out</span>
    </button>
}