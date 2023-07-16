import React from 'react'
import useBeerStore from '../BeerStore';
import { useState } from 'react';
import { BrowserRouter, Routes, Route,Link,useNavigate } from 'react-router-dom';


export default function Card({cardData}) {
 const navigate = useNavigate();
 const textdescription=cardData?.description?.slice(0,120)+"...";
 const addDelId=useBeerStore((state)=>state.addDelId);
 const removeDelId=useBeerStore((state)=>state.removeDelId);
 const delArrid=useBeerStore((state)=>state.delArrid);
 const [flagChoose, setflagChoose] = useState(false);

 const handleClick = (e) => {
    if (e.type === 'click') {
      console.log('Left click');
      navigate(`/beer/${cardData.id}`);
    } else if (e.type === 'contextmenu') {
      chooseItems(cardData.id);
      e.preventDefault();
    }
  };
const chooseItems= (id) => {
    console.log('Right click');
    console.log(id);
    if(!flagChoose){
        addDelId(id);
        setflagChoose(true);
        console.log("Choose");
    }
    else{
        removeDelId(id);
        setflagChoose(false);
        console.log("NOT!!!Choose");
    }
    
    

};
  return (
    <>
    <div className="card" onClick={handleClick} onContextMenu={handleClick} style={flagChoose ? {backgroundColor: "grey"} : {backgroundColor: "white"} }   >
        <a className="wrapper__card">
            <div className="box__img">
                <img src={cardData.image_url} alt="" className="card__img"/>
            </div>
            <div className="card__box">
                <h4 className="card__title">{cardData.name}</h4>
                <h5 className="card__tagline">{cardData.tagline}</h5>
                <h5 className="card__desc">
                {textdescription}
                </h5>
                <div className="card_prop">
                    <div className="props">
                        <p>abv</p>
                        <p>{cardData.abv}</p>
                    </div>
                    <div className="props">
                        <p>ph</p>
                        <p>{cardData.ph}</p>
                    </div>
                    <div className="props">
                        <p>ibu:</p>
                        <p>{cardData.ibu}</p>
                    </div>
                </div>
            </div>
        </a>
        
</div>

    </>
  )
}
