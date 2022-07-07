import Head from 'next/head'
import styles from './home.module.scss'
import {ReadingProgressBar} from '../components/ReadingProgressBar'
import {TopMenu} from '../components/TopMenu'
import {SiteIntro} from '../components/SiteIntro'
import {Animated} from '../components/AnimatedBackground/index'
import {Underlog} from '../components/Underlog'
import {Why} from '../components/Why'
import {Web3} from '../components/Web3'
import {How} from '../components/How'
import {Products} from '../components/Products'
import {Blog} from '../components/Blog'
import {Menu} from '../components/Menu'
import { createRef, RefObject } from 'react'

export default function Home(){
   const target: RefObject<HTMLElement> = createRef();
 return(
  <>
  <Head>
        <title>Viralata | Ecossistema Descentralizado do Brasil</title>
        <meta name="description" content="Generated by create next app" />

    </Head>
    
    <main ref={target} id='topo'>
      <ReadingProgressBar target={target}/>
      <section className={styles.bgContainer}>
      <Animated isBackground/>
      <TopMenu/>
      <SiteIntro/>
      </section>
      <Underlog/>
      <Why/>
      <Web3/>
      <How/>
      <Products/>
      <Blog/>
      <Menu/>
   </main>
    </>
 )

}