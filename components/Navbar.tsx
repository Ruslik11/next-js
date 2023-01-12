import styles from '../styles/Navbar.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";

const navigation = [
    {id:1, title:'Home',path:'/'},
    {id:2, title:'Posts',path:'/posts'},
    {id:3, title:'Contacts',path:'/contacts'}
]

const Navbar = () => {
    const {pathname} = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/next.svg" width={120} height={40}  alt="webDev" />
            </div>
            <div>
                {navigation.map(({ id, title, path }) =>
                    <Link className={pathname === path ? styles.active : null} key={id} href={path}>{title}</Link>)}
            </div>
        </nav>
    )
}

export default Navbar
