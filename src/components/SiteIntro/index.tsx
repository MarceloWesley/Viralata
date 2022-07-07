import styles from './intro.module.scss'
import {Animated} from '../SiteIntroSvg/index'


export function SiteIntro(){
    return (
        <>
       <section className={styles.introContainer}>
        <Animated/>

        <div className={styles.introTitle}>
            <p>Ecossistema Financeiro 
             <b> Descentra<span>_</span> lizado</b> do <strong>Brasil</strong>
            </p>
            <a href="#down_sec"></a>
        </div>
           
       </section>
       </>
    )
}


