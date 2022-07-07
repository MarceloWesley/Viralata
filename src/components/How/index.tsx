import styles from './how.module.scss'


export function How(){
    return (
        <section className={styles.howSection}>
            <article className={styles.Web3ArticleContainer}>
                <img src="https://d33wubrfki0l68.cloudfront.net/afd253c81b0741bb6323580bdbb9ea97b336d664/c9ac6/assets/web3.png" alt="" />
                <p>A <strong >web3</strong> é uma oportunidade imperdível para <b>PMEs</b> e <b>empreendedores</b> tirarem proveito das  mudanças de cenário no comércio por meio da <b>tokenização</b>.</p>
            </article>
            <div className={styles.howContainer}>
                <div className={styles.how}>
                    <span>COMO?</span>
                    <div>
                        WEB3_
                    </div>
                </div>
             <div className={styles.howText}>
                  <p>Através da remoção das barreiras de entrada e melhora da experiência do usuário, nós podemos permitir que as PMEs e os empreendedores brasileiros encontrem a liberdade para se conectar com seus clientes e fornecedores de forma direta, simplificando o processo de negócios e permitindo maior responsabilidade para reduzir a corrupção.</p>

                  <p>Isso, por sua vez, vai permitir um acesso aos recursos mais justo e direto para o leigo, reduzindo seu custo e melhorando sua qualidade de vida.</p>
                </div>
            </div>
             <img className={styles.whatDog} src="https://d33wubrfki0l68.cloudfront.net/7d57f56994b302c291b33f5818d9e632e181240a/057e0/assets/o-que.png" alt="" />
             <div className={styles.howBottom}>
                <h4>A <strong>Viralata</strong><wbr/> está comprometida:</h4>
                <div>
                    <h5>A fornecer a infraestrutura e as ferramentas necessárias para levar os negócios do Brasil a uma economia moderna e tokenizada.</h5>
                </div>
            </div>
        </section>
    )
}