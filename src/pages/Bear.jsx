import React from 'react'
import modulecss from "../Style/module.css"
import { Routes, Route, useParams,useNavigate } from 'react-router-dom';
import useBeerStore from '../BeerStore';

export default function Bear() {
const navigate = useNavigate();
let { id } = useParams(); 
const dataBeers=useBeerStore((state)=>state.dataBeers);
const dataPage=dataBeers.find(item=>item.id==id);

  return (
    <div style={modulecss}>
      <header id="header">
    <nav className="navbar">
      <div className="container">
        <div className="collapse navbar-collapse" id="bdr-navbar">
          <ul className="nav navbar-nav">
            <li>
              <a  onClick={() => navigate('/')}>Home</a>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container-fluid */}
    </nav>
  </header>
  <main id="content" role="main">
    <div className="container">
      <article className="recipe-single" style={{ marginBottom: 20 }}>
        <h1 className="clearfix" style={{ marginTop: 10 }}>
         {dataPage.name}
        </h1>
        <div className="info-bar clearfix">
          <h2 className="pull-left">
          {dataPage.tagline}
            
          </h2>
          <ul className="details pull-right">
            <li>
              ABV
              <br />
              {dataPage.abv}
            </li>
            <li>
              IBU
              <br />
              {dataPage.ibu}
            </li>
            <li>
              OG
              <br />
              {dataPage.target_og}
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="hidden-md hidden-lg">
              <div className="panel panel-brewdog">
                <div className="panel-header">
                  <h3>PACKAGING</h3>
                </div>
                <div className="panel-body no-padding packaging-panel">
                  <img
                    src={dataPage.image_url}
                    alt={dataPage.name}
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
            <div className="panel panel-brewdog">
              <div className="panel-header">
                <h3>THIS BEER IS</h3>
              </div>
              <div className="panel-body">
                <p>
                {dataPage.description}
                </p>
              </div>
            </div>
            <div className="panel panel-brewdog">
              <div className="panel-header">
                <h3>BASICS</h3>
              </div>
              <div className="panel-body">
                <table className="table three-col-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>VOLUME</strong>
                      </td>
                      <td> {dataPage.volume.value}L</td>
                      <td> {(dataPage.volume.value/ 3.78).toFixed(1) }gal</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>BOIL VOLUME</strong>
                      </td>
                      <td>{dataPage.boil_volume.value}L</td>
                      <td>{(dataPage.boil_volume.value / 3.78).toFixed(1)  }gal</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>ABV</strong>
                      </td>
                      <td />
                      <td>{dataPage.abv}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Target FG</strong>
                      </td>
                      <td />
                      <td>{dataPage.target_fg}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Target OG</strong>
                      </td>
                      <td />
                      <td>{dataPage.target_og}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>EBC</strong>
                      </td>
                      <td />
                      <td>{dataPage.ebc}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>SRM</strong>
                      </td>
                      <td />
                      <td>{dataPage.srm}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>PH</strong>
                      </td>
                      <td />
                      <td>{dataPage.ph}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>ATTENUATION LEVEL</strong>
                      </td>
                      <td />
                      <td>{dataPage.attenuation_level}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="panel panel-brewdog">
              <div className="panel-header">
                <h3>METHOD/TIMINGS</h3>
              </div>
              <div className="panel-body">
                <div className="icon-title">
                  <img src={require('../img/utroCPDHAMba.png')} alt="Mash Icon" />
                  MASH TEMP
                </div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>{dataPage.method.mash_temp[0].temp.value} °C</td>
                      <td>{(dataPage.method.mash_temp[0].temp.value * 1.8 + 32).toFixed(0)} °F</td>
                      <td>{dataPage.method.mash_temp[0].duration} mins</td>
                    </tr>
                  </tbody>
                </table>
                <div className="icon-title">
                  <img src={require('../img/H2RIFmXgAmm8.png')} alt="Fermentation Icon" />
                  FERMENTATION
                </div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>{dataPage.method.fermentation.temp.value} °C</td>
                      <td>{(dataPage.method.fermentation.temp.value * 1.8 + 32).toFixed(0)} °F</td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-brewdog">
              <div className="panel-header">
                <h3>INGREDIENTS</h3>
              </div>
              <div className="panel-body">
                <div className="icon-title">
                  <img src= {require('../img/TEIQbbHHQeh7.png')} alt="Malt Icon" />
                  MALT
                </div>
                <table className="table three-col-table">
                  <tbody>
                  {dataPage.ingredients.malt.map(item=>{
                    return <tr>
                      <td>{item.name}</td>
                      <td>{item.amount.value}kg</td>
                      <td>{(item.amount.value * 2.2).toFixed(1) }lbs</td>
                    </tr>
                  })}
                    
                  </tbody>
                </table>
                <div className="icon-title">
                  <img src={require('../img/u4jwYX66aJUG.png')} alt="Hops Icon" />
                  HOPS
                </div>
                <table className="table four-col-table">
                  <tbody>
                    <tr>
                      <th />
                      <th>(g)</th>
                      <th>Add</th>
                      <th>Attribute</th>
                    </tr>
                    {dataPage.ingredients.hops.map(item=>{
                    return <tr>
                    <td>{item.name}</td>
                    <td>{item.amount.value} g</td>
                    <td>
                      <span style={{ whiteSpace: "nowrap" }}>{item.add}</span>
                    </td>
                    <td>{item.attribute}</td>
                  </tr>
                  })}
                    
                    
                  </tbody>
                </table>
                <div className="icon-title">
                  <img src={require('../img/e5bvElWUJiPO.png')} alt="Yeast Icon" />
                  YEAST
                </div>
                <ul className="ingredient-list">
                  <li> {dataPage.ingredients.yeast}</li>
                </ul>
              </div>
            </div>
            <div className="panel panel-brewdog">
              <div className="panel-header">
                <h3>FOOD Pairing</h3>
              </div>
              <div className="panel-body">
                <div className="icon-title">
                  <img src={require('../img/qLa4fvy3XxKG.png')} alt="Food Pairing Icon" />
                </div>
                <ul className="ingredient-list">
                 {dataPage.food_pairing.map(item=>{
                    return <li>{item}</li>
                  })}
                  
        
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
           
            <div className="hidden-xs hidden-sm">
              <div className="panel panel-brewdog">
                <div className="panel-header">
                  <h3>PACKAGING</h3>
                </div>
                <div className="panel-body no-padding packaging-panel">
                  <img
                    src={dataPage.image_url}
                    alt={dataPage.name}
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
            <div className="panel panel-brewdog">
              <div className="panel-header">
                <h3>BREWER'S TIP</h3>
              </div>
              <div className="panel-body">
                <img
                  src={require('../img/hkJCsBXjz36K.png')}
                  alt="Brewers Tip Icon"
                  style={{ width: 46, float: "left" }}
                />
                <p className="icon-left">
                {dataPage.brewers_tips}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </main>
</div>
  )
}
