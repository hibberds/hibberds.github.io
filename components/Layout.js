import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import NavItem from "./NavItem";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hibberd&apos;s</title>
      </Head>

      <header className={styles.header}>
        <div>
          <img
            src="/images/instagram.png"
            alt="Instagram"
            className={styles["social-media"]}
          />
        </div>
        <div>
          <Link href="/">
            <img
              src="/images/primary-logo.svg"
              alt="Hibberd's"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles["phone-number"]}>01234 567890</div>
      </header>

      <nav className={styles.nav}>
        <NavItem title="Menu" url="menu" />
        <NavItem title="Gallery" url="gallery" />
        <NavItem title="About us" url="about" />
        <NavItem title="Contact" url="contact" />
      </nav>

      <main className={styles.main}>
        <div className={styles.mainContent}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
