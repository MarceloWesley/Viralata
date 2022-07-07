import styles from "./products.module.scss";

export function Products() {
  return (
    <section className={styles.productsSection}>
      <article className={styles.productsArticle}>
        <h6>PRODUTOS</h6>
        <p>
          Devido à natureza dos negócios e da tecnologia moderna,{" "}
          <b>
            os produtos e serviços oferecidos pela Viralata estão em um infinito
            estado de desenvolvimento
          </b>
          . Nós não vemos uma data de conclusão, e os lançamentos são pequenos e
          incrementais.
        </p>
        <img
          className={styles.farmerDog}
          src="https://d33wubrfki0l68.cloudfront.net/51e5ad2f46b1e3a6c0cf6a3772feb4ec4940d33b/52eef/assets/farm_dog.png"
          alt="Cachorro Fazendeiro"
        />
      </article>
      <div className={styles.productContainer}>
        <div className={styles.productListContainer}>
          <ul>
            <li>
              <h3>
                <div>🔄</div>
                Viralata Swap
              </h3>
              <h4>
                Uma <strong>exchange decentralizada e autonônoma</strong>, onde
                você pode prover liquidez ou trocar tokens na blockchain.
              </h4>
              <a
                className={styles.acessPlatform}
                href="https://app.viralata.finance/"
                target="_blank"
              >
                Acessar plataforma<span></span>
              </a>
              <a
                className={styles.urlLink}
                href="https://app.viralata.finance/"
                target="_blank"
              >
                app.viralata.finance<span></span>
              </a>
            </li>

            <li>
              <h3>
                <div>🪑</div>
                Banco do Viralata
              </h3>
              <h4>
                É a plataforma que irá permitir a qualquer um oferecer serviços
                financeiros, <b>eliminando intermediários</b> e recebendo
                retornos em seus investimentos.
              </h4>
              <a
                className={styles.acessAnticipated}
                href="https://banco.viralata.finance/"
                target="_blank"
              >
                Acesso antecipado<span></span>
              </a>
              <a
                className={styles.urlLink}
                href="https://banco.viralata.finance/"
                target="_blank"
              >
                banco.viralata.finance<span></span>
              </a>
            </li>

            <li>
              <h3>
                <div>💰</div>
                AURO
              </h3>
              <h4>
                Nosso token utilitário para permitir a{" "}
                <b>base comum para piscinas de liquidez</b> dentro da
                ViralataSwap.
              </h4>
              <a
                className={styles.knowMore}
                href="https://docs.viralata.finance/tokenomics/auro"
                target="_blank"
              >
                Saiba mais<span></span>
              </a>
              <a
                className={styles.urlLink}
                href="https://docs.viralata.finance/tokenomics/auro"
                target="_blank"
              >
                docs.viralata.finance<span></span>
              </a>
            </li>

            <li>
              <h3>
                <div>💰</div>
                REAU
              </h3>
              <h4>
                O <b>token de governança</b> que nasceu com o projeto e
                oferecerá poder de decisão à comunidade Viralata!
              </h4>
              <a
                className={styles.knowMore}
                href="https://docs.viralata.finance/tokenomics/reau"
                target="_blank"
              >
                Saiba mais<span></span>
              </a>
              <a
                className={styles.urlLink}
                href="https://docs.viralata.finance/tokenomics/reau"
                target="_blank"
              >
                docs.viralata.finance<span></span>
              </a>
            </li>

            <li>
              <h3>
                <div>🚀</div>
                Launch
              </h3>
              <h4>
                Uma plataforma para permitir que as{" "}
                <b>empresas se integrem ao ecossistema</b> e ao universo mais
                amplo da <b>web3</b>.
              </h4>
              <span className={styles.wait}>Aguarde! 🐶</span>
            </li>

            <li>
              <h3>
                <div>💸</div>
                Pay
              </h3>
              <h4>
                Carteira de criptoativos feita para ser{" "}
                <b>a melhor amiga do homem</b>. Faça transações e armazene
                contatos.
              </h4>
              <span className={styles.wait}>Aguarde! 🐶</span>
            </li>

            <li>
              <h3>
                <div>🔗</div>
                Chain
              </h3>
              <span className={styles.wait}>Aguarde! 🐶</span>
            </li>
          </ul>

          <picture className={styles.openArmsDog}>
            <source
              srcSet="https://d33wubrfki0l68.cloudfront.net/cd03d946bee73df6a8932421265738d86c7ded61/faf6c/assets/doggo_green.webp"
              type="image/webp"
            />
            <source
              srcSet="https://d33wubrfki0l68.cloudfront.net/b602890e9ecf0599fcff4a80e247da0b9fa5d91e/02662/assets/doggo_green.png"
              type="image/jpeg"
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/b602890e9ecf0599fcff4a80e247da0b9fa5d91e/02662/assets/doggo_green.png"
              alt="Leia-nos abaixo!"
              data-sr-id="19"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
