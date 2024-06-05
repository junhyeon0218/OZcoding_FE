import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <Link href='/'>홈</Link>
          </li>

          <li>
            <Link href='/posts'>포스트 목록</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
