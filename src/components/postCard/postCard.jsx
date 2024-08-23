'use client'
import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/27063998/pexels-photo-27063998/free-photo-of-familia-de-osos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Image" fill className={styles.img} />
                </div>
                <span className={styles.date}>23.08.24</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.id}`} >ReadMore</Link>
            </div>
        </div>
    )
}
export default PostCard