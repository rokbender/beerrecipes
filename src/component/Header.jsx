import React from 'react'
import useBeerStore from '../BeerStore'
import '../Style/style.css'

export default function Header() {
const delArrid=useBeerStore((state)=>state.delArrid);
const deleteData=useBeerStore((state)=>state.deleteData);
  return (
    <>
    <header className="header">
        <h1 className="title">Recipes beer</h1>
        { delArrid.length>0 ?  <div className="menu">
            <span>{delArrid.length} recipes are selected</span>
            <button className="delete_all" onClick={deleteData}>
            <span>Delete</span>
            <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" className="img" />
            </button>
        </div> : <></>
        }
    </header>
    </>
  )
}
