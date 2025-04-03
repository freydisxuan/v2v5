import Image from "next/image";
import styles from "./page.module.scss";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { FRONTPAGE_QUERY } from "@/sanity/queries";
import Link from "next/link";

const options = { next: { revalidate: 30 } }

export default async function Home() {
  const res = await client.fetch<SanityDocument>(FRONTPAGE_QUERY, {}, options)
  console.log(res);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{res.title}</h1>
        <span>{res.body}</span>
      </main>
      <footer className={styles.footer}>
        <Link href={'/posts'}>Posts!</Link>
      </footer>
    </div>
  );
}
