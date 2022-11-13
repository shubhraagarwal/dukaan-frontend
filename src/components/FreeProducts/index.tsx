import React from 'react'
import styles from "./styles.module.css"
import Domain from "../../assets/images/Domain.png"
import Invoice from "../../assets/images/invoice.png"
import Privacy from "../../assets/images/privacy.png"
import TnC from "../../assets/images/TnC.png"
type Props = {}

export default function FreeProducts({}: Props) {
  return (
      <div className={styles.container} > <h2>Try our other free products</h2>
          <div className={styles.wrapper} >

          <div className={styles.card}>
              <img src={Privacy} alt="privacy policy" />
              <h3>Privacy Policy Generator</h3>
            <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
              </div>
              <div className={styles.card}>
              <img src={TnC} alt="privacy policy" />
              <h3>Terms & Conditions Generator</h3>
            <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                </div>
              <div className={styles.card}>
              <img src={Domain} alt="privacy policy" />
              <h3>Domain Name Generator</h3>
            <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
              </div>
              <div className={styles.card}>
              <img src={Invoice} alt="privacy policy" />
              <h3>Invoice Generator</h3>
            <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
        </div>
          </div>

      </div>
  )
}
