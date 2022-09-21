import React from 'react'
import './Catagories.css'
import { catagories } from '../../data'
import CatagoriesItems  from '../CatagorieItems/CatagoriesItems'
const Catagories = () => {
  return (
    <div className="catagories">
        {
            catagories.map(item=>(
                <CatagoriesItems item={item} />
            ))
        }
    </div>
  )
}

export default Catagories