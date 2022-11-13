import React from 'react'
import styles from './styles.module.css'
import logo from '../../assets/logos/dukaan.svg'
type Props = {}

function Header({}: Props) {
  return (
    <div className={styles.Header} >
      <nav className={styles.nav} >
        <section><img src={logo} alt="dukaan logo" /> </section>
        <section>
        <span>Sign In</span>
        <span>Dukaan for PC</span>
        </section>
      </nav> </div>
  )
}

export default Header
