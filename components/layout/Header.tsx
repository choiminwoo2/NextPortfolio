import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { childProps } from "../../repository/defineProps";
import styles from "../../styles/header.module.css";
import ModeChanger from "../mode/ModeChanger";
const Header = (props: childProps) => {
  const router = useRouter();
  
  return (
    <header className={styles.head}>
      <div className={styles["nav-top"]}>
        <div className={styles.logo}>
          <h2>PortoFolio</h2>
        </div>
        <ModeChanger />
      </div>
      <div className={styles["nav-down"]}>
        <div className={styles["down-menu"]}>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/skills'}>Skils</Link></li>
          <li><Link href={'/timeLine'}>TimeLine</Link></li>
          <li><Link href={'/projects'}>Project</Link></li>
          <li><Link href={'/info'}>info</Link></li>
        </div>
        <div className={styles.menuIcon}>
        </div>
      </div>
    </header>
  );
};

export default Header;
