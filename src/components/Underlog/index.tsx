import styles from "./underlog.module.scss";

export function Underlog() {
  return (
    <>
      <section id="down_sec" className={styles.underlogContainer}>
        <article className={styles.articleContainer}>
          <aside>
            <picture>
              <source
                srcSet="https://d33wubrfki0l68.cloudfront.net/dbcf47b8932de708494f4a87d871d0699612c56c/5fac8/assets/underdog_bg.avif"
                type="image/avif"
              />
              <source
                srcSet="https://d33wubrfki0l68.cloudfront.net/d295654b9ba02baf3e23308a46f40f0e58e0dead/8bbd1/assets/underdog_bg.webp"
                type="image/webp"
              />
              <source
                srcSet="https://d33wubrfki0l68.cloudfront.net/d8809c1207e998b9db187c904219809eeac936c3/89791/assets/underdog_bg.png"
                type="image/jpeg"
              />
              <img
                src="https://d33wubrfki0l68.cloudfront.net/d8809c1207e998b9db187c904219809eeac936c3/89791/assets/underdog_bg.png"
                alt="Casal e paisagem tropical"
              />
            </picture>
          </aside>
          <div>
            <h1>
              Estamos escrevendo a história perfeita do{" "}
              <strong className={styles.gradientText}>“underdog“</strong>,
              usando a metáfora do vira-lata.
            </h1>

            <h2>
              O “underdog” do brasileiro é cada pessoa ser empoderada através da{" "}
              <strong>descentralização de valor</strong>.
            </h2>
          </div>
        </article>
      </section>
    </>
  );
}
