'use client'

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({item}) => {

    const pathName = usePathname();
    return (
        <div className={`${styles.container} ${pathName === item.link && styles.active}`}>
            <Link href={item.link} key={item.name}>{item.name}</Link> 
        </div>
    )
}
export default NavLink;