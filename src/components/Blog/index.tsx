import styles from './blog.module.scss'

export function Blog(){
    return (
       <section className={styles.blogSection}>
         <h4>Leia-nos !</h4>
            <article className={styles.blogArticle}>
                <h5>O que a palavra ‘obrigado’ tem a ver com a história do dinheiro?</h5>
                <a href="https://viralata-reau.medium.com/o-que-a-palavra-obrigado-tem-a-ver-com-a-hist%C3%B3ria-do-dinheiro-37e68c85aff1" target="_blank" rel="noreferrer">
                    <picture className={styles.blogPicture}>
                        <source srcSet="https://d33wubrfki0l68.cloudfront.net/4ee6bbaab829e84210cfb4b9227e17497eac2bed/24161/assets/blog_post_obrigado.avif" type="image/avif" />
                        <source srcSet="https://d33wubrfki0l68.cloudfront.net/9d4d14de4072159d474a8aa5efc19da3fa3bf973/9c0b4/assets/blog_post_obrigado.jpg" type="image/jpeg" /> 
                        <img className={styles.blogImage} src="https://d33wubrfki0l68.cloudfront.net/9d4d14de4072159d474a8aa5efc19da3fa3bf973/9c0b4/assets/blog_post_obrigado.jpg" alt="O que a palavra ‘obrigado’ tem a ver com a história do dinheiro?" />
                    </picture>
                </a>
                  <p className={styles.blogParagraph}>O dinheiro comanda o mundo. Significa poder. Certo? Ok, se   você tiver dinheiro, você poderá comprar muita coisa, mas… bem, talvez essa seja uma visão um pouco deturpada dos propósitos para os quais ele foi criado. Para falar de dinheiro no presente é importante lembrar do passado. De um passado em que não havia dinheiro. E também do futuro, o que está por vir, e que vai mudar a forma como vemos a palavra, se aproximando mais das suas raízes.     <a href="https://viralata-reau.medium.com/o-que-a-palavra-obrigado-tem-a-ver-com-a-hist%C3%B3ria-do-dinheiro-37e68c85aff1" target="_blank"  rel="noreferrer">Leia mais
                 </a>
                 </p>
            </article>
             <div className={styles.divisor}></div>
               <article className={styles.blog2Article}>
                  <h5>Como a tokenização vai mudar definitivamente a nossa realidade?</h5>
                  <a href="https://viralata-reau.medium.com/como-a-tokeniza%C3%A7%C3%A3o-vai-mudar-definitivamente-a-nossa-realidade-85d9bab0205c" target="_blank"  rel="noreferrer">
                  <picture className={styles.blogPicture2}>
                        <source srcSet="https://d33wubrfki0l68.cloudfront.net/720eb5f44b1dc0cfaf9af5781c4f1fae2443c88b/eccc6/assets/blog_post_tokenizacao.avif" type="image/avif" />
                        <source srcSet="https://d33wubrfki0l68.cloudfront.net/d03689409e41da9c8d44f9d51370187fe6a52e9b/b13f7/assets/blog_post_tokenizacao.jpg" type="image/jpeg" /> 
                        <img src="https://d33wubrfki0l68.cloudfront.net/d03689409e41da9c8d44f9d51370187fe6a52e9b/b13f7/assets/blog_post_tokenizacao.jpg" alt="Como a tokenização vai mudar definitivamente a nossa realidade?" />
                 </picture>
                </a>
                   <p>A digitalização traz à humanidade uma série de facilidades e possibilidades em todos os âmbitos. Entre eles, no aspecto financeiro. No último artigo sobre dinheiro, falamos previamente sobre as moedas virtuais e a tokenização. Neste último caso, que significa transformar um ativo real em um artigo digital, em unidades criptografadas, esse item passa a ser representado como um token na rede, com o seu valor próprio. Com isso, você poderá até ‘receber’ parte do seu salário em frações de itens tokenizados, por exemplo, um carro, uma casa ou um smartphone. Da mesma forma que era difícil de imaginar que teríamos a internet em nosso bolso ou em nosso pulso, ou então poderíamos fazer compras ou transações financeiras por celulares, sem precisar ir em bancos, talvez ainda seja um pouco difícil assimilar esse novo modelo, mas com sua popularização, se tornará tão normal quanto outras revoluções pelas quais passamos. <a href="https://viralata-reau.medium.com/como-a-tokeniza%C3%A7%C3%A3o-vai-mudar-definitivamente-a-nossa-realidade-85d9bab0205c" target="_blank"  rel="noreferrer">Leia mais</a></p>
            </article>
            <footer className={styles.footer}>
                <div className={styles.socialMedias}>
                    <a href="https://www.facebook.com/br.viralata.finance" target="_blank"  rel="noreferrer">
                     <img src="https://d33wubrfki0l68.cloudfront.net/48f9af959f0ce39ae5ec0a7d4f116228b781ba2d/19342/assets/facebook.svg" alt="" draggable="false" />
                    </a>
                    <a href="https://www.instagram.com/viralatabr_/" target="_blank"  rel="noreferrer">
                     <img src="https://d33wubrfki0l68.cloudfront.net/8713a0f269f67fc9cd7eda2dd7c5b4f0dc4856a4/3c87d/assets/instagram.svg" alt="" draggable="false" />
                    </a>
                    <a href="https://t.me/viralatafinance" target="_blank"  rel="noreferrer">
                    <img src="https://d33wubrfki0l68.cloudfront.net/cce1f1af88039031ccc071efd92dbf68ad520bef/5b103/assets/telegram.svg" alt="" draggable="false" />
                    </a>
                </div>
                <a href="#topo" className={styles.backTop}>Voltar ao topo</a>
            </footer>
       </section>
    )
}