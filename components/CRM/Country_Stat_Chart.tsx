import React from 'react'

import { MAP } from '..'

export default function CRM_Country_Stat_Chart() {

    const zoomIn = ()=>{

    }
    const zoomOut = ()=>{
        
    }
    return (
        <div className="Chart__country-stat">
        <div className="Country-stat__header">
          <div className="Country-stat__text">
            <h3>Country Stats</h3>
            <span>sub heading</span>
          </div>
          <div className="Chart__icon">
            <ul>
              <li><i className="fas fa-arrow-down"></i></li>
            </ul>
          </div>
        </div>
        <div className="Country-stat__map">
          <div className="Map__zoom-btn">
            <div className="Zoom-in" onClick={()=>{zoomIn}}>
              <i className="fas fa-plus"></i>
            </div>
            <div className="Zoom-out" onClick={()=>{zoomOut}}>
              <i className="fas fa-minus"></i>
            </div>
          </div>
          <div className="Map__country-name">
            <h6>Unidet States</h6>
          </div>
          <MAP/> 
        </div>
        <table className="Country-stat__table">
          <thead>
            <tr>
              <td>Country</td>
              <td>Sessions</td>
              <td>Goals</td>
              <td>Goals Rate</td>
              <td>Bounce Rate</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Canada</td>
              <td>55,555</td>
              <td>210</td>
              <td>2,46%</td>
              <td>0,26%</td>
            </tr>
            <tr>
              <td>India</td>
              <td>24,125</td>
              <td>135</td>
              <td>0,58%</td>
              <td>0,43%</td>
            </tr>
            <tr>
              <td>UK</td>
              <td>15,640</td>
              <td>324</td>
              <td>5,15%</td>
              <td>2,47%</td>
            </tr>
            <tr>
              <td>Botswana</td>
              <td>12,148</td>
              <td>854</td>
              <td>4,19%</td>
              <td>0,1%</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
