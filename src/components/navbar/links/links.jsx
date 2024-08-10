import Link from "next/link";

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
            <div>
                {links.map((link) => (
                    <Link key={link.name} href={link.link}>
                        {link.name}
                    </Link>
                ))}
            </div>
        )
    }
    export default Links;