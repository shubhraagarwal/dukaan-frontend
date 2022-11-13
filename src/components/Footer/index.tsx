import React from 'react'
import styles from './styles.module.css'
import logo from '../../assets/logos/dukaan.svg'
type Props = {}

function Footer({}: Props) {
  return (
      <footer className={styles.footer} >
          <div className={styles.logo}>
      <img src={logo} alt="Dukaan" />
          </div>
          <div className={styles.list} >
              <ul>
                  <li>Contact</li>
                  <li>Tutorials</li>
                  <li>Privacy</li>
                  <li>About</li>
                  <li>Facebook</li>

              </ul>
              <ul>
                  <li>FAQs</li>
                  <li>Blog</li>
                  <li>Banned Items</li>
                  <li className={styles.jobs} >Jobs</li>
                  <li>Twitter</li>

              </ul>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>Linkedin</li>

            </ul>
          </div>
      </footer>
  )
}

export default Footer
