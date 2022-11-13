import axios from 'axios';
import React, {useState, useEffect} from 'react'
import styles from "./styles.module.css"
import Pagination from "react-js-pagination";
import Slogan from '../Slogan';
type Props = {}

export interface Slogan {
  quotes?: (QuotesEntity)[] | null;
  total: number;
  skip: number;
  limit: number;
}
export interface QuotesEntity {
  id: number;
  quote: string;
  author: string;
}


function SloganMaker({}: Props) {
  const [value, setValue] = useState("")
  const [slogan, setSlogan] = useState<Slogan>()
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/quotes?limit=10").then(res => {
      setSlogan(res.data)
    })
  }, [])

  return (
      <div className={styles.container} >  <h2>Free Slogan Maker  </h2>
          <p>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free. </p>
          <div className={styles.input} >
              <label htmlFor="slogan">Word for your slogan</label> <br />
              <input value={value} onChange={e => setValue(e.target.value)}  type="text" name='slogan' placeholder="Enter a term that describes your business" />
              <span onClick={() => setValue('') }  className={` ${value != '' ? styles.icon : styles.hidden} `}></span>
              <br />
              <button onClick={() => setVisibility(true)} >Generate Slogans</button>
          </div>
      < hr />
      <div className={!visibility ? styles.slogansBlock : styles.slogans} >
        <div>
        <h2>We have generated {slogan?.quotes?.length} slogans for "{value}"</h2>
        <button>Download All</button>
        </div>
        <div style={{display : "flex", flexWrap : "wrap", columnGap: '10px', rowGap : '10px'}} >
        {slogan?.quotes?.map((item, index) => {
          return <Slogan slogan={item.quote} key={index} />
        })}



        </div>
        </div>
      </div>
  )
}

export default SloganMaker
