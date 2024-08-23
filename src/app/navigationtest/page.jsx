'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavigationTestPage = () => {
    const router = useRouter();

    const handleClick = () => {
        console.log('clicked')
        router.push('/blog')
    }

  return (
    <div>
        <Link href="/">Click Here to go to the home page</Link>
        <button onClick={handleClick}>Write and redirect</button>
    </div>
  )
};
export default NavigationTestPage;