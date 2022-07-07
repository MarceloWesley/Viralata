import { useState } from "react";
import styles from "./menu.module.scss";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={styles.menuContainer}>
      <button style={{transform: 'translateY(0px) rotate(0deg) scale(1);'}} onClick={handleOpenMenu} className={styles.menuBt}>
        <svg
          style={{ transform: isMenuOpen ? "rotate(225deg)" : " rotate(0deg)" }}
          className={styles.bone01}
          data-name="Camada 1"
          viewBox="0 0 122.62 46.47"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.cls1}
            transform="translate(23.25 74.96)"
            d="M93.35-51.72a12.53,12.53,0,0,0,4.19-17.22,12.53,12.53,0,0,0-17.22-4.19c-3.42,2.08-5.64,7.68-6,11.67H1.77c-.57-6.9-6.63-14-13.52-13.45A12.52,12.52,0,0,0-23.2-61.39a12.53,12.53,0,0,0,6,9.67A12.53,12.53,0,0,0-21.42-34.5,12.54,12.54,0,0,0-4.2-30.31C-.78-32.39,1.44-38,1.77-42H74.3c.57,6.9,6.63,14,13.52,13.45A12.52,12.52,0,0,0,99.27-42a12.53,12.53,0,0,0-6-9.67Z"
          ></path>
        </svg>

        <svg
          style={{
            transform: isMenuOpen ? " rotate(135deg)" : " rotate(0deg)",
          }}
          className={styles.bone02}
          data-name="Camada 1"
          viewBox="0 0 122.62 46.47"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.cls1}
            transform="translate(23.25 74.96)"
            d="M93.35-51.72a12.53,12.53,0,0,0,4.19-17.22,12.53,12.53,0,0,0-17.22-4.19c-3.42,2.08-5.64,7.68-6,11.67H1.77c-.57-6.9-6.63-14-13.52-13.45A12.52,12.52,0,0,0-23.2-61.39a12.53,12.53,0,0,0,6,9.67A12.53,12.53,0,0,0-21.42-34.5,12.54,12.54,0,0,0-4.2-30.31C-.78-32.39,1.44-38,1.77-42H74.3c.57,6.9,6.63,14,13.52,13.45A12.52,12.52,0,0,0,99.27-42a12.53,12.53,0,0,0-6-9.67Z"
          ></path>
        </svg>
      </button>

      <menu
        style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
        className={styles.menu}
      >
        <a
          style={{ transitionDelay: "0.3s" }}
          href="https://viralata-reau.medium.com/"
          target="_blank"
          rel="noreferrer"
          className={!isMenuOpen ? styles.blog : styles.visible}
        >
          📝 Blog
        </a>

        <a
          style={{ transitionDelay: "0.27s" }}
          href="https://app.viralata.finance/"
          target="_blank"
          rel="noreferrer"
          className={!isMenuOpen ? styles.viralataSwap : styles.visible}
        >
          🔄 ViralataSwap
        </a>

        <a
          style={{ transitionDelay: "0.24s" }}
          href="https://docs.viralata.finance/"
          target="_blank"
          rel="noreferrer"
          className={!isMenuOpen ? styles.viralatopedia : styles.visible}
        >
          📘 Viralatopédia
        </a>

        <a
          style={{ transitionDelay: "0.21s" }}
          href="https://www.facebook.com/br.viralata.finance"
          target="_blank"
          rel="noreferrer"
          className={!isMenuOpen ? styles.facebook : styles.visible}
        >
          😀 Facebook
        </a>

        <a
          style={{ transitionDelay: "0.18s" }}
          href="https://github.com/viralatafinance"
          target="_blank"
          rel="noreferrer"
          className={!isMenuOpen ? styles.github : styles.visible}
        >
          &zwj;💻 GitHub
        </a>

        <a
          style={{ transitionDelay: "0.15s" }}
          href="https://www.instagram.com/viralatabr_/"
          target="_blank"
          rel="noreferrer"
          className={!isMenuOpen ? styles.instagram : styles.visible}
        >
          📷 Instagram
        </a>

        <a
          style={{ transitionDelay: "0.12s" }}
          href="https://t.me/viralatafinance"
          target="_blank"
          rel="noreferrer"
          className={!isMenuOpen ? styles.telegram : styles.visible}
        >
          💬 Telegram
        </a>

        <a
          style={{ transitionDelay: "0.09s" }}
          href="https://twitter.com/viralatabr_"
          target="_blank"
          rel="noreferrer"
          className={!isMenuOpen ? styles.Twitter : styles.visible}
        >
          🐦 Twitter
        </a>

        <a
          style={{ transitionDelay: "0.06s" }}
          href="#"
          className={!isMenuOpen ? styles.newsletter : styles.visible}
        >
          📫 Newsletter
        </a>

        <a
          style={{ transitionDelay: "0.03s" }}
          href="#produtos"
          className={!isMenuOpen ? styles.produtos : styles.visible}
        >
          📦 Produtos
        </a>

        <a href="#topo" className={!isMenuOpen ? "" : styles.visible}>
          🏠 Início
        </a>
      </menu>
    </div>
  );
}
