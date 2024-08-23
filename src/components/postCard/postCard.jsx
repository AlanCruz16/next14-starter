'use client'
import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/27063998/pexels-photo-27063998/free-photo-of-familia-de-osos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Image" fill className={styles.img} />
                </div>
                <span className={styles.date}>23.08.24</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto aspernatur numquam porro minima aliquam voluptatibus architecto repellat rerum magni voluptate, ratione voluptatum corrupti natus iure aperiam delectus minus veritatis vel!</p>
                <Link className={styles.link} href="/blog/post" >ReadMore</Link>
            </div>
        </div>
    )
}
export default PostCard