import React, { useState } from 'react'
import styles from "./styles.module.css"
type Props = {
    slogan: string
}

function Slogan({ slogan }: Props) {

    const [clicked, setClicked] = useState(false)
  return (
      <div className={`${styles.slogan} ${clicked ? styles.copied : styles.toCopy}`} onClick={() => {
          navigator.clipboard.writeText(slogan)
        setClicked(true)
      }}  >
          {slogan}
    </div>
  )
}

export default Slogan
