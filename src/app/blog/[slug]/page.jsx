import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";


//fetch data wih an API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  const data = await res.json()
  return data
}

const SinglePostPage = async ({ params }) => {

  const { slug } = params;

  const post = await getData(slug)
  //const post = await getPost(slug);
  console.log(post);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
              <PostUser userId={post.userId} />
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            {/* <span className={styles.detailValue}>
              {post.createdAt.toString()}
            </span> */}
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;