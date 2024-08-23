 'use client'
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

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
        name: 'Blog',
        link: '/blog',
    }
];
    const Links = () => {
        const [open, setOpen] = useState(false);
        //temporary
        const session = true;
        const isAdmin = true;

        return (
            <div className={styles.container}>
                
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.name} />
                ))}
                {session ? (
                    <>
                    {isAdmin && <NavLink item={{name: 'Admin', link: '/admin'}} key={'Admin'} />}    
                    <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{name: 'Login', link: '/login'}} key={'Login'} />
                )
            }
            </div> 
            <Image src="/menu.png" alt="menu" width={30} height={30} onClick={() => setOpen((prev => !prev))} className={styles.menuButton}/>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.name} />
                    ))}
                </div>
            )
            
            }

            </div>
        );
    };
    export default Links;