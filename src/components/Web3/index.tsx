import styles from "./web3.module.scss";

export function Web3() {
  return (
    <section className={styles.web3Container}>
      <div>
        <img
          loading="lazy"
          src="https://d33wubrfki0l68.cloudfront.net/7dd4235c10a1eafa34f8d2e9182f7dd0eae7e31d/81bf2/assets/neon_br.png"
          alt=""
          draggable="false"
        />
      </div>
      <article>
        <p>
          O Brasil é <u>perfeitamente preparado</u>
          <span>
            {" "}
            para liderar a maturidade do comércio em negócios habilitados para a{" "}
            <strong>web3</strong> e para a blockchain, permitindo transferência
            direta de valor entre indivíduos e organizações sem a necessidade de
            um custo intermediário.
          </span>
        </p>
      </article>
    </section>
  );
}
