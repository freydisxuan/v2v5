import { client } from "@/sanity/client";
import styles from '../../page.module.scss'
import { POST_QUERY } from "@/sanity/queries";
import Link from "next/link";
import { PortableText } from "next-sanity";
import Image from "next/image";

const options = { next: { revalidate: 30 } }

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await client.fetch(POST_QUERY, await params, options);
  console.log(post);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={500}
          height={500}
        />
        <h1>{post.title}</h1>
        <PortableText value={post.body} />
      </main>
      <footer className={styles.footer}>
        <Link href={'/posts'}>Posts!</Link>
      </footer>
    </div>
  )
}