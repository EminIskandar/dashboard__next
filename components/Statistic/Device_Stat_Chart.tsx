import React from 'react'

export default function Statistic__Device_Stat_Chart() {

  
  const LeftValues = [0, 20, 40, 60, 80, 100]
  const BottomValues = ["Jan 01","Jan 02","Jan 03","Jan 04","Jan 05","Jan 06" ]
  const Values = [[11, 13, 44],[17, 23, 55],[15, 20, 41],[15, 8, 67],[21, 13, 22],[14, 27, 43] ]

  const Canvas = React.useRef<HTMLCanvasElement>(null)

  
  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw)
    }
  })

  const draw = ()=>{

      const Dimension = [0,0,0,0]
      var chartWidth = (document.querySelector( ".Chart__device") as HTMLDivElement).offsetWidth - 80;
      var chartHeight = 250;
      Dimension[0] = chartHeight;
      Dimension[1] = chartWidth;
      Dimension[3] = chartWidth / 6;
      Dimension[2] = chartHeight / 5;
     
      const values1 = (document.querySelectorAll( ".Chart__type--1-value-section ul" ) as NodeListOf<HTMLUListElement>);
      const border = (document.querySelector(".Chart__type--2-border") as HTMLDivElement);
      const leftValues = (document.querySelector( ".Chart__type--2-left-values ul" ) as HTMLUListElement);
      const bottomValues = (document.querySelector( ".Chart__type--2-bottom-values ul" ) as HTMLUListElement);

      if(Canvas.current !== null){  
          var canvas = Canvas.current
          var draw = canvas.getContext("2d");
        if(draw !== null){ 
          canvas.width =  Dimension[1];
          canvas.height =  Dimension[0];

          //change size chart auto
          border.setAttribute('style',"width: " +  Dimension[1] + "px; height: " +  Dimension[0] + "px");
          leftValues.setAttribute('style',"height: " +  Dimension[0] +  "px;transform: translate(-23px,-7px)")
          bottomValues.setAttribute('style',"width: " +  Dimension[1] + "px;transform: translate(0px,3px)");

          //chart values
          draw.beginPath();
          draw.lineWidth = 1;
          draw.strokeStyle = "#e6e6e6";
          for (
            var y =  Dimension[2];
            y <  Dimension[0];
            y +=  Dimension[2]
          ) {
            draw.moveTo(0, y);
            draw.lineTo( Dimension[1], y);
          }
          draw.stroke();

          //info box
          leftValues.innerHTML = "";
          bottomValues.innerHTML = "";
          values1[3].innerHTML = "";
          LeftValues.reverse();
          for (var l = 0; l <  LeftValues.length; l++) {
            leftValues.innerHTML += `<li class="v-li" data-v-3c46fc5a>${ LeftValues[l]}</li>`;
            leftValues.children[ l ].setAttribute('style',`height: ${ Dimension[2]}px`);
          }
          for (var b = 0; b <  BottomValues.length; b++) {
            bottomValues.innerHTML += `<li class="v2-li" data-v-3c46fc5a >${ BottomValues[b]}<span data-v-3c46fc5a></span></li>`;
            bottomValues.children[ b ].setAttribute('style', `width: ${ Dimension[3]}px`);
          }
          for (var g = 0; g <  Values.length; g++) {
            values1[3].innerHTML += '<li data-v-3c46fc5a style="transform: translateX(0px)"> </li>';
          }

          //values chart
          var line = document.querySelectorAll(".Chart__type--1_value_box ul");
          for (var i in  Values) {
            for (var s in  Values[i]) {
              line[i].children[s].setAttribute('style', `height:${( Values[i][ s ] *  Dimension[0]) / 100}px`);
              line[i].children[s].innerHTML =  (Values[i][s]).toString();
            }
          }
        }
      }
  }


    return (
        <div className="Chart__device">
            <div className="Device__header">
              <div className="Device__text">
                <h4>Device Stats</h4>
                <p>sub heading</p>
              </div>
              <div className="Device__setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="Chart__type--1">
              <div className="Chart__type--2-border"></div>
              <canvas id="canvas" ref={Canvas}></canvas>
              <div className="Chart__type--2-left-values">
                <ul></ul>
              </div>
              <div className="Chart__type--2-bottom-values">
                <ul></ul>
              </div>
              <div className="Chart__type--1-value-section">
                <ul></ul>
              </div>
              <div className="Chart__type--1_value_box">
                <ul className="cl1">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul className="cl2">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul className="cl3">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul className="cl4">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul className="cl5">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul className="cl6">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
    )
}
