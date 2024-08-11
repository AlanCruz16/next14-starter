import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

    const Links = () => {
        const links = [
            {
                name: 'Home',
                link: '/',
            },
            {
                name: 'About',
                link: '/about',
            },
            {
                name: 'Contact',
                link: '/contact',
            },
            {
                name: 'Login',
                link: '/login',
            },
            {
                name: 'blog',
                link: '/blog',
            }
        ];
        return (
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.name} />
                ))}
            </div>
        )
    }
    export default Links;