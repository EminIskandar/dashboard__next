import React from 'react'

export default function CRM_Stock_price() {

  // const [Dimensions,setDimensions] = React.useState([300, 500, 50, 83]) // H/W/R/C
  const Values = [325, 148, 236, 85, 105, 251, 148]
  const LeftValues2 = [ "0.00", "80.00", "160.00", "240.00", "300.00", "400.00", "500.00" ]
  const BottomValues2 = [ "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00" ]

  const border =  React.useRef<HTMLDivElement>(null)
  const leftValues =  React.useRef<HTMLUListElement>(null)
  const bottomValues =  React.useRef<HTMLUListElement>(null)
  const chartValues =  React.useRef<HTMLUListElement>(null)
  const canvas =  React.useRef<HTMLCanvasElement>(null)
    
  
  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw)
    return () => {
      window.removeEventListener("resize", draw);
    }
  })
  
  const draw = ()=>{
     
    var width = (document.querySelector(".Stock-price__header") as HTMLDivElement).offsetWidth;
    const Dimensions = [300, (width - 50), 43, ((width - 50) / 5)]
    if(border.current !== null && leftValues.current !== null && bottomValues.current !== null && chartValues.current !== null && canvas.current !== null){

    const Border = border.current
    const LeftValues = leftValues.current
    const BottomValues =  bottomValues.current
    const ChartValues =  chartValues.current

    var distance = Dimensions[1] / 7;
    var Canvas = canvas.current;
    var draw = Canvas.getContext("2d");
    Canvas.width = Dimensions[1];
    Canvas.height = Dimensions[0];

    //change size chart auto
    Border.setAttribute('style', `width: ${Dimensions[1]}px; height: ${Dimensions[0]}px`);
    LeftValues.setAttribute('style',`height: ${Dimensions[0]}px;transform: translate(-33px,0px)`);
    BottomValues.setAttribute('style', `width: ${Dimensions[1]}px;transform: translate(0px,0px)`);

    if(draw !== null){ 
    //write chart values
    draw.beginPath();
    draw.lineWidth = 1;
    draw.strokeStyle = "#e6e6e6";
    for (
      var y = Dimensions[2];
      y < Dimensions[0];
      y += Dimensions[2]
    ) {
      draw.moveTo(0, y);
      draw.lineTo(Dimensions[1], y);
    }

    //info chart
    LeftValues.innerHTML = "";
    BottomValues.innerHTML = "";
    ChartValues.innerHTML = "";

    LeftValues2.reverse();
    for (var l = 0; l < LeftValues2.length; l++) {
      LeftValues.innerHTML += `<li class="v2-li" data-v-03f084de>${LeftValues2[l]}</li>`;
      (document.querySelectorAll(".Chart__type--2-left-values ul li ") as NodeListOf<HTMLLIElement>)[l].setAttribute('style',`height: ${Dimensions[2]}px`);

      BottomValues.innerHTML += `<li class="v3-li" data-v-03f084de >${BottomValues2[l]}</li>`;
      (document.querySelectorAll(".Chart__type--2-bottom-values ul li ")as NodeListOf<HTMLLIElement>)[l].setAttribute('style',`width: ${Dimensions[3]}px`);
    }
    for (var g = 0; g < Values.length; g++) {
      ChartValues.innerHTML += `<li data-v-03f084de style="transform: translateX(${g *
        distance +
        (distance - 40)}px)"></li>`;
    }

    var gradient = draw.createLinearGradient(0, 0, 0, 400); // x0 / y0 / x1 // y1
    gradient.addColorStop(0, "#0BAAE8");
    gradient.addColorStop(1, "white");
    draw.fillStyle = gradient;

    //values chart
    var i :any | null = null
    for ( i in Values) {
      draw.fillRect( i * distance + (distance - 40), Dimensions[0] - (Values[i] / 60 - 1) * 50, 40, (Values[i] / 60 - 1) * 50
      );
    }
    draw.fill();
    var infoLi = (document.querySelectorAll( ".Chart__type--2-chart-values li " ) as NodeListOf<HTMLLIElement>);
    for (var t = 0; t < Values.length; t++) {
      infoLi[t].onmouseover = (e : any )=> {
        var index = Array.from(infoLi).indexOf(e.target);
        if (index >= 4) {
          (document.querySelector( ".Chart__type--2-values-info-box .Info_box__type--1" ) as HTMLDivElement).setAttribute('style', `transform: translate(${index * distance + (distance - 40) - 180}px,-${(Values[index] / 60 - 1) * 50 + 52}px);visibility: visible`);
        } else {
          (document.querySelector( ".Chart__type--2-values-info-box .Info_box__type--1" )as HTMLDivElement).setAttribute('style', `transform: translate(${index * distance + (distance - 40) + 20}px,-${(Values[index] / 60 - 1) * 50 + 52}px);visibility: visible`);
        }
        (document.querySelector(  ".Chart__type--2-values-info-box .Info_box__values li p " ) as HTMLParagraphElement ).innerHTML = (Values[index]).toString();
      };
      infoLi[t].onmouseout = (e : any) => {
        var index = Array.from(infoLi).indexOf(e.target);
        (document.querySelector( ".Chart__type--2-values-info-box .Info_box__type--1" ) as HTMLDivElement ).setAttribute('style', `transform: translate(${index * distance}px,-${ Values[index] }px) visibility: hidden`);
      };
    }
    }
    }
  }

    return (
        <div className="Chart__stock-price">
            <div className="Stock-price__header">
              <div className="Stock-price__text">
                <h4>Stock Price Movement</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="Stock-price__setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="Stock-price__avarage">
              <div className="Average__text">
                <ul>
                  <li>Load Avarage</li>
                  <li>20%</li>
                </ul>
              </div>
            </div>
            <div className="Chart Chart__type--2">
              <div className="Chart__type--2-border" ref={border}></div>
              <canvas id="canvas2" ref={canvas}></canvas>
              <div className="Chart__type--2-left-values">
                <ul ref={leftValues}></ul>
              </div>
              <div className="Chart__type--2-bottom-values">
                <ul ref={bottomValues}></ul>
              </div>
              <div className="Chart__type--2-chart-values">
                <ul ref={chartValues}></ul>
              </div>
              <div className="Chart__type--2-values-info-box">
                <div className="Info_box__type--1">
                  <div className="Info_box__header">
                    <h5>16 Jan</h5>
                  </div>
                  <div className="Info_box__values">
                    <ul>
                      <li>
                        <span className="circle"></span> Load Avarage:
                        <p>33</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="Chart__stock-price_explanations">
              <ul>
                <li><span></span> 18-24</li>
                <li><span></span> 25-34</li>
                <li><span></span> 35-44</li>
                <li><span></span> 45-54</li>
                <li><span></span> 55-64</li>
              </ul>
            </div>
        </div>
    )
}
