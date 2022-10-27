import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import SetAvatar from "./setAvatar";
export default function Layout() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat Realtime App</title>
        <meta
          name="description"
          content="Generated by create chat realtime app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/setAvatar">
        <SetAvatar></SetAvatar>
      </Link>
    </div>
  );
}
