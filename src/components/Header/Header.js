import style from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
    return ( 
        <header className={style.header}>
            <Image src='/image/Logo.png'  width={169} height={30} alt="logo" />
         <nav >
            <Link href={'/action'} className={style.nav} >aкции</Link>
            <Link href={'/action'} className={style.nav}>горячее</Link>
            <Link href={'/action'} className={style.nav}>холодное</Link>
            <Link href={'/action'} className={style.nav}>свежая выпечка</Link>
            <Link href={'/action'} className={style.nav}>десерты</Link>
            <Link href={'/action'} className={style.nav}>напитки</Link>
         </nav>
         <div>
            <Image className={style.icon} src='/image/search.png'  width={24} height={24} alt="search" />
            <Image className={style.icon} src='/image/man.png'  width={15} height={24} alt="user" />
            <Image className={style.icon} src='/image/cart.png'  width={27} height={25} alt="cart" />
         </div>

        </header>
     );
}

export default Header;