import styles from "./topMenu.module.scss";

export function TopMenu() {
  return (
    <div className={styles.topMenuContainer}>
      <div className={styles.languageContainer}>
        <a href="#">EN</a> |{" "}
        <a href="#">
          <b>PT</b>
        </a>
      </div>
      <div className={styles.logoContainer}>
        <a href="#">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/4c9396f7b0f6847faedfe4f83707d188695c1a54/a0450/assets/logo.svg"
            alt=""
          />
        </a>
      </div>
      <div className={styles.socialMediasContainer}>
        <a href="https://www.facebook.com/br.viralata.finance" target="_blank"  rel="noreferrer">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/48f9af959f0ce39ae5ec0a7d4f116228b781ba2d/19342/assets/facebook.svg"
            alt=""
          />
        </a>
        <a href="https://www.instagram.com/viralatabr_/" target="_blank">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/8713a0f269f67fc9cd7eda2dd7c5b4f0dc4856a4/3c87d/assets/instagram.svg"
            alt=""
          />
        </a>
        <a href="https://t.me/viralatafinance" target="_blank"  rel="noreferrer">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/cce1f1af88039031ccc071efd92dbf68ad520bef/5b103/assets/telegram.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
