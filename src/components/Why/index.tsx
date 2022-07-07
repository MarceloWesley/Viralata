import styles from "./why.module.scss";

export function Why() {
  return (
    <section className={styles.whyContainer}>
      <article className={styles.why}>
        <span>POR QUÊ?</span>
        <div>
          <p>
            Um <strong>ecossistema financeiro descentralizado</strong> vai
            permitir um acesso direto e mais justo aos recursos disponíveis no
            país, combatendo a corrupção enraizada.
          </p>

          <p>
            O Brasil é uma nação em desenvolvimento rica em recursos, com
            potencial reprimido pela corrupção política e pela burocracia.{" "}
            <strong>
              A história cultural da economia brasileira preparou o leigo para
              negócios criptonários e comércio descentralizado
            </strong>
            . Existe pouca confiança nos detentores do setor financeiro e
            grandes barreiras à entrada de empreendedores por meio de sistemas
            arcaicos de organização.
          </p>
        </div>
      </article>
    </section>
  );
}
