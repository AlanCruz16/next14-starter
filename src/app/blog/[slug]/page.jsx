import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/27063998/pexels-photo-27063998/free-photo-of-familia-de-osos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, delectus aspernatur beatae dolores quae distinctio alias recusandae a! Illum consequatur dolore at rem inventore maiores eum, praesentium amet consectetur aperiam.

        </div>
      </div>
    </div>
  )
};
export default SinglePostPage;