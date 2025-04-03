import { client } from '@/sanity/client';
import styles from '../page.module.scss'
import { POSTS_QUERY } from '@/sanity/queries';
import Link from 'next/link';
import { SanityDocument } from 'next-sanity';

const options = { next: { revalidate: 30 } };

export default async function PostsPage() {
  const pages = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(pages);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Posts!</h1>
        {pages.map((page, i) => (
          <div key={i}>
            <Link key={i} href={`posts/${page.slug.current}`}>{page.title}</Link>
          </div>
        ))}
      </main>
    </div>
  );
}
