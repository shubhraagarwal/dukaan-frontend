import React from 'react'
import styles from "./styles.module.css"
type Props = {
    title: string
    description: string
    image: string
}

function Feature({ title, description, image }: Props) {
    console.log(image)
  return (
      <div className={styles.feature} >
          <img src={image} alt={title} />
          <h2>{title}</h2>
            <p>{description}</p>
    </div>
  )
}

export default Feature
