import React from 'react'
import Card from './Card'
import useBeerStore from '../BeerStore'
import '../Style/style.css'

export default function Main() {

const dataBeers=useBeerStore((state)=>state.dataBeers);
const error=useBeerStore((state)=>state.error);

  return (
    <>
    <div className="wrapper">
        <div className="cards">
            {dataBeers.length>0 ? dataBeers.map((beer)=>{
                return <Card cardData={beer} key={beer.id}/>
            }) : <h1>Oh no! Something went wrong. {error?.message}</h1> }
            
        </div>
    </div>
    </>
  )
}
