import Image from 'next/image';
import styles from './singlePost.module.css';

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {next:{revalidate: 3600}})
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  const data = await res.json()
  return data
}

const SinglePostPage = async ({params}) => {

  const {slug} = params;

  const post = await getData(slug)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/27063998/pexels-photo-27063998/free-photo-of-familia-de-osos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/27063998/pexels-photo-27063998/free-photo-of-familia-de-osos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50} height={50} className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.04.24</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
};
export default SinglePostPage;