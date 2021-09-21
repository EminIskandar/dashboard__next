import React from 'react'
import { line } from '../../interfaces'

export default function Project_stock_analysis_chart() {
 
    const Values1 =  [0, 42, 270, 230, 201, 125];
    const Values2 =  [10, 102, 85, 194, 104, 251];
    const Values3 =  [20, 52, 130, 145, 21, 142];
    const LeftValues =  [0, 10, 20, 30, 40, 50, 60];
    const BottomValues =  ["01/15/2020","01/16/2020","01/17/2020","01/18/2020","01/19/2020","01/20/2020"]

    const Canvas = React.useRef<HTMLCanvasElement>(null)

    React.useEffect(() => { 
      draw()
      window.addEventListener("resize", draw );
      return () => {
        window.removeEventListener("resize", draw )
      }
    })
 

  const draw = ()=>{
    var chartStockwidth =  (document.querySelector(".Chart__stock-analysis") as HTMLDivElement).offsetWidth - 70;
    const Dimension =  [300, chartStockwidth, 50, (chartStockwidth / 5)];
      const border = document.querySelectorAll(".Chart__type--1-border");
      const leftValues = document.querySelectorAll(  ".Chart__type--1-left-values ul" );
      const bottomValues = document.querySelectorAll( ".Chart__type--1-bottom-values ul" );
      const chartValues = document.querySelectorAll(  ".Chart__type--1-chart-values ul" );

      if(Canvas.current !== null){ 
      var canvas = Canvas.current
      var draw = canvas.getContext("2d");
      if(draw !== null){ 
        canvas.width =  Dimension[1];
        canvas.height =  Dimension[0];

        //change size chart auto
        border[0].setAttribute('style' , `width: ${ Dimension[1]}px; height:  ${ Dimension[0]}px`);
        leftValues[0].setAttribute('style' ,`height: ${ Dimension[0]}px;transform: translate(-20px,-7px)`);
        bottomValues[0].setAttribute('style' , `width: ${Dimension[1]}px;transform: translate(0px,0px)`);

        //cordinal lines
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

        //info chart
        leftValues[0].innerHTML = "";
        bottomValues[0].innerHTML = "";
        chartValues[0].innerHTML = "";
        LeftValues.reverse();
        for (var l = 0; l <  LeftValues.length; l++) {
          leftValues[0].innerHTML += `<li class="v2-li" data-v-5dd84899>${ LeftValues[l]}</li>`;
          leftValues[0].children[l].setAttribute('style' ,`height: ${ Dimension[2]}px`);
        }
        for (var b = 0; b <  BottomValues.length; b++) {
          if (b === 0) {
            bottomValues[0].innerHTML += `<li class="v2-li" data-v-5dd84899 ><p style="transform: translate(-${Dimension[3] / 6}px,5px);margin-left:5px;">${ BottomValues[b] }</p></li>`;
          } else {
            bottomValues[0].innerHTML += `<li class="v2-li" data-v-5dd84899 ><p style="transform: translate(-${ Dimension[3] /6 +20}px,5px)">${ BottomValues[b]}</p></li>`;
          }
          bottomValues[0].children[b].setAttribute('style' , `width:  ${ Dimension[3]}px`);
          chartValues[0].innerHTML += `<li  data-v-5dd84899 style="width: ${ Dimension[1] / 6}px" ></li>`;
        }

        //chart lines 1
        var lineTo = [];
        for (var j = 0; j <   Values1.length; j++) {
          lineTo[j] = {
            x: j *  Dimension[3],
            y:  Dimension[0] -   Values1[j]
          };
        }
        draw.beginPath();
        draw.lineWidth = 2;
        draw.strokeStyle = "#00ACF0";
        draw.moveTo(0,  Dimension[0] -   Values1[0]);
        for (var c = 0; c <   Values1.length; c++) {
          if (c ===   Values1.length - 1) {
          } else {
            draw.bezierCurveTo(
              Object.values(lineTo[c])[0] +
                Dimension[1] /   Values1.length / 2,
              Object.values(lineTo[c])[1],
              Object.values(lineTo[c + 1])[0] -
                Dimension[1] /   Values1.length / 2,
              Object.values(lineTo[c + 1])[1],
              Object.values(lineTo[c + 1])[0],
              Object.values(lineTo[c + 1])[1]
            );
          }
        }
        draw.stroke();

        //chart lines  2
        var lineTo2 = [];
        for (var e = 0; e <   Values2.length; e++) {
          lineTo2[e] = {
            x: e *  Dimension[3],
            y:  Dimension[0] -   Values2[e]
          };
        }
        draw.beginPath();
        draw.lineWidth = 2;
        draw.strokeStyle = "rgb(255, 191, 54)";
        draw.moveTo(0,  Dimension[0] -   Values2[0]);
        for (var t = 0; t <   Values2.length; t++) {
          if (t ===   Values2.length - 1) {
          } else {
            draw.bezierCurveTo(
              Object.values(lineTo2[t])[0] +  Dimension[1] /   Values2.length / 2,
              Object.values(lineTo2[t])[1],
              Object.values(lineTo2[t + 1])[0] -  Dimension[1] /   Values2.length / 2,
              Object.values(lineTo2[t + 1])[1],
              Object.values(lineTo2[t + 1])[0],
              Object.values(lineTo2[t + 1])[1]
            );
          }
        }
        draw.stroke();

        //chart lines 3
        var lineTo3 = [];
        for (var s = 0; s <   Values3.length; s++) {
          lineTo3[s] = {
            x: s *  Dimension[3],
            y:  Dimension[0] -   Values3[s]
          };
        }
        draw.beginPath();
        draw.lineWidth = 2;
        draw.strokeStyle = "#22AF47 ";
        draw.moveTo(0,  Dimension[0] -   Values3[0]);
        for (var z = 0; z <   Values3.length; z++) {
          if (z ===   Values3.length - 1) {
          } else {
            draw.bezierCurveTo(
              Object.values(lineTo3[z])[0] +  Dimension[1] /   Values3.length / 2,
              Object.values(lineTo3[z])[1],
              Object.values(lineTo3[z + 1])[0] - Dimension[1] /   Values3.length / 2,
              Object.values(lineTo3[z + 1])[1],
              Object.values(lineTo3[z + 1])[0],
              Object.values(lineTo3[z + 1])[1]
            );
          }
        }
        draw.stroke();

        //chart-circle
        (document.querySelector(".Chart__type--1-value-circle ul") as HTMLUListElement ).innerHTML = "";
        var circleCordinat : line[]= [];
        for (var v = 0; v <   Values1.length * 3; v++) {
          var count = v;
          if (v >= 12) {
            count -= 12;
            circleCordinat = lineTo3;
          } else if (v >= 6) {
            count -= 6;
            circleCordinat = lineTo2;
          } else if (v >= 0) {
            circleCordinat = lineTo;
          }
          (document.querySelector(".Chart__type--1-value-circle ul") as HTMLUListElement ).innerHTML += `<li  data-v-5dd84899 style="transform: translate(${Object.values( circleCordinat[count] )[0] - 6}px,${Object.values(circleCordinat[count])[1] - 7}px)" ></li>`;
        }

        //info box
        var line = (document.querySelector(".Chart__line") as HTMLDivElement);
        var li = (document.querySelectorAll(".Chart__type--1-chart-values ul li") as NodeListOf<HTMLDivElement>);
        var chartcircle = (document.querySelectorAll(  ".Chart__type--1-value-circle li" ) as NodeListOf<HTMLDivElement>);
        var infoBar = (document.querySelector(".Info-box__type--2") as HTMLDivElement);
        var infoBarLi = (document.querySelectorAll(  ".Info-box__values-type--2 li p" ) as NodeListOf<HTMLParagraphElement>);

        for (var f = 0; f <   Values1.length; f++) {
          li[f].onmouseover = ( e : any )=> {
            var index = Array.from(li).indexOf(e.target);
            line.setAttribute('style' ,`transform : translate(${ Dimension[3] * index}px, 0px);visibility:visible`);
            for (var g = 0; g < 18; g += 6) {
              chartcircle[index + g].style.width = "20px";
              chartcircle[index + g].style.height = "20px";
              chartcircle[index + g].style.margin = " -2px 0 0 -2px";
            }
            if (index <= 3) {
              infoBar.setAttribute('style' ,`transform : translate(${Dimension[3] * index + 10}px, 75px);visibility:visible`);
            } else {
              infoBar.setAttribute('style' , `transform : translate(${Dimension[3] * index - 110}px, 75px);visibility:visible`);
            }
            infoBarLi[0].innerHTML = (Values1[index]).toString();
            infoBarLi[1].innerHTML = (Values2[index]).toString();
            infoBarLi[2].innerHTML = (Values3[index]).toString();
          };
          li[f].onmouseout = () => {
            line.setAttribute('style' ,"display:none");
            infoBar.setAttribute('style' ,"display:none");
            for (var g = 0; g < 18; g++) {
              (document.querySelectorAll(".Chart__type--1-value-circle li") as NodeListOf<HTMLLIElement>)[g].style.width = "15px";
              (document.querySelectorAll(".Chart__type--1-value-circle li") as NodeListOf<HTMLLIElement>)[g].style.height = "15px";
              (document.querySelectorAll(".Chart__type--1-value-circle li") as NodeListOf<HTMLLIElement>)[g].style.margin = "0 0 0 0";
            }
          };
        }
      }
    }
  }

    return (
        <div className="Chart__stock-analysis" >
            <div className="Stock-analysis__header">
              <div className="Stock-analysis__text">
                <h4>XYZ - Stock Analysis (2009 - 2016)</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div className="Stock-analysis__setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="Stock-analysis__description">
              <div className="Stock-analysis__explanations">
                <ul>
                  <li><span className="circle2"></span> Music</li>
                  <li><span className="circle2"></span> Photos</li>
                  <li><span className="circle2"></span> Files</li>
                </ul>
              </div>
              <div className="Chart__type--1">
                <div className="Chart__type--1-border"></div>
                <canvas id="canvas" ref={Canvas}></canvas>
                <div className="Chart__type--1-left-values">
                  <ul></ul>
                </div>
                <div className="Chart__type--1-bottom-values">
                  <ul></ul>
                </div>
                <div className="Chart__type--1-chart-values">
                  <ul></ul>
                </div>
                <div className="Chart__type--1-value-circle">
                  <ul></ul>
                </div>
                <div className="Chart__info-box-type--1">
                  <div className="Chart__line"></div>
                  <div className="Info-box__type--2">
                    <div className="Info-box__header-type--2">
                      <h5>01/15/2020</h5>
                    </div>
                    <div className="Info-box__values-type--2">
                      <ul>
                        <li>
                          <span className="circle2"></span> Music:
                          <p>33</p>
                        </li>
                        <li>
                          <span className="circle2"></span> Photos:
                          <p>44</p>
                        </li>
                        <li>
                          <span className="circle2"></span> Files:
                          <p>44</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
