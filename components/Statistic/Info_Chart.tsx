import React from 'react'
import { CordinatValues } from '../../interfaces'

export default function Statistic_Info_Chart() {

  const Values = [
    [ 25, 45, 84, 57, 26, 35, 4, 48, 21, 65, 28, 97, 14, 47, 78, 52, 12, 36, 82, 14, 31],
    [ 67, 94, 26, 6, 72, 52, 48, 98, 5, 106, 22, 45, 12, 37, 107, 42, 52, 105, 74, 25, 86],
    [ 85, 109, 61, 49, 15, 70, 59, 41, 26, 85, 21, 82, 96, 47, 105, 28, 104, 39, 19, 74, 6]
  ]

  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw)
    }
  })

  const draw = ()=>{
    const Dimension = [0,0,0,0]

    var chartWidth =  (document.querySelector(".Info-chart__bonus") as HTMLDivElement).offsetWidth;
    var chartHeight = 110;

    Dimension[0] = chartHeight;
    Dimension[1] = chartWidth;
    Dimension[3] = chartWidth / 20;
    Dimension[2] = chartHeight / 5;

    const chartValues = document.querySelectorAll( ".Chart__type--1-value-section ul"  );

      var color = ["#00ACF0", "#FFBF36", "#22AF47"];
      var cordinatLine : CordinatValues[][] = [[],[],[]];
      var lArray : any = [];
      var lines =  chartValues;

      //chart values
      for (var i in color) {
        var canvas = (document.querySelectorAll("#canvas") as NodeListOf<HTMLCanvasElement>)[i];
        var draw = canvas.getContext("2d");
        if(draw !== null) { 
          canvas.width =  Dimension[1];
          canvas.height =  Dimension[0];

          for (var v = 0; v <  Values[i].length; v++) {
            cordinatLine[i][v] = {
              x: v *Dimension[3],
              y:  Dimension[0] -  Values[i][v]
            };
          }
 
          draw.beginPath();
          draw.lineWidth = 3;
          draw.strokeStyle = color[i];
          for (var n = 0; n <  Values[i].length; n++) {
            draw.lineTo(  Object.values(cordinatLine[i][n])[0], Object.values(cordinatLine[i][n])[1] );
          }
          draw.stroke();
          lines[i].innerHTML = "";
          for (var l = 0; l <  Values[i].length; l++) {
            lines[ i ].innerHTML += `<li data-v-3c46fc5a style=" transform: translate(${ Object.values(cordinatLine[i][l])[0] }px,0px);width:${ Dimension[3]}px;height:${ Dimension[0]}px"></li>`;
          }
          //gradient
          draw.beginPath();
          draw.lineWidth = 0;
          draw.strokeStyle = "transparent";
          var gradient = draw.createLinearGradient(0, 0, 0, 130); // x0 / y0 / x1 // y1
          gradient.addColorStop(0, color[i] + "30"); // kesr ve ya tam ededde istifade etmek olar
          gradient.addColorStop(1, "white");
          draw.fillStyle = gradient;
          for (var c = 0; c <  Values[i].length; c++) {
            draw.lineTo( Object.values(cordinatLine[i][c])[0], Object.values(cordinatLine[i][c])[1] );
          }
          draw.lineTo( Object.values(cordinatLine[i][20])[0],  Dimension[1] );
          draw.lineTo( Dimension[1],  Dimension[0]);
          draw.lineTo(0,  Dimension[0]);
          draw.lineTo(0,  Dimension[0] -  Values[i][0]);
          draw.fill();
          draw.stroke();

          //info box
          var infoBar = (document.querySelectorAll(".Info-box__type--1") as NodeListOf<HTMLDivElement>);
          var infoBarValues = (document.querySelectorAll( ".Info_box__values-type--1 li p" ) as NodeListOf<HTMLParagraphElement>);
          var infoBarHead = (document.querySelectorAll( ".Info_box__header-type--1 h5" ) as NodeListOf<HTMLHeadingElement>);
          var infoBarLine = (document.querySelectorAll(".Chart__line") as NodeListOf<HTMLDivElement>);
          var chart = 0;

          for (var s = 0; s <  Values[i].length; s++) {
            lArray.push(lines[i].children[s]);
            lines[i].children[s].addEventListener("mouseover", e => {
              var index = Array.from(lArray).indexOf(e.target);
              var index2 = index;
              if (index <= 20) {
                //chart1
                chart = 0;
              } else if (index <= 41) {
                //chart2
                chart = 1;
                index2 = index - 21;
              } else {
                //chart3
                chart = 2;
                index2 = index - 42;
              }
              if (index2 >= 15) {
                infoBar[chart].setAttribute('style',`transform : translate(${Object.values( cordinatLine[chart][index2] )[0] - 110}px, 0px);visibility:visible`);
              } else {
                infoBar[chart].setAttribute('style', `transform : translate(${Object.values( cordinatLine[chart][index2] )[0] + 12}px, 0px);visibility:visible`);
              }
              infoBarLine[chart].setAttribute('style', `transform : translate(${Object.values( cordinatLine[chart][index2] )[0] - 1}px, 0px);visibility:visible`);
              infoBarHead[chart].innerHTML = (index2 + 1).toString();
              infoBarValues[chart].innerHTML =  (Values[chart][ index2 ]).toString();
            });
            lines[i].children[s].addEventListener("mouseout", e => {
              infoBar[chart].style.display = "none";
              infoBarLine[chart].style.display = "none";
            });
          }
        }
      }
  }
    return (
        <div className="Info-chart__items">
        <div className="Info-chart__bonus">
          <div className="Info_chart__title">
            <h3>Bonus Rate</h3>
          </div>
          <div className="Info_chart__stat">
            <h4>47.43%</h4>
            <span>-28.12% <i className="fas fa-arrow-down"></i></span>
          </div>
          <div className="Info_chart__chart">
            <canvas id="canvas"></canvas>
            <div className="Chart__type--1-value-section">
              <ul></ul>
            </div>
            <div className="Chart__Info-box-type--1">
              <div className="Chart__line"></div>
              <div className="Info-box__type--1">
                <div className="Info_box__header-type--1">
                  <h5>16 Jan</h5>
                </div>
                <div className="Info_box__values-type--1">
                  <ul>
                    <li>
                      <span className="circle "></span> series-1:
                      <p>33</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Info-chart__new-session">
          <div className="Info_chart__title">
            <h3>New Sessions</h3>
          </div>
          <div className="Info_chart__stat">
            <h4>76.4%</h4>
            <span>2.12% <i className="fas fa-arrow-up"></i></span>
          </div>
          <div className="Info_chart__chart">
            <canvas id="canvas"></canvas>
            <div className="Chart__type--1-value-section">
              <ul></ul>
            </div>
            <div className="Chart__Info-box-type--1">
              <div className="Chart__line"></div>
              <div className="Info-box__type--1">
                <div className="Info_box__header-type--1">
                  <h5>16 Jan</h5>
                </div>
                <div className="Info_box__values-type--1">
                  <ul>
                    <li>
                      <span className="circle "></span> series-1:
                      <p>33</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Info-chart__time-on-site">
          <div className="Info_chart__title">
            <h3>Time on Site</h3>
          </div>
          <div className="Info_chart__stat">
            <h4>2m 15s</h4>
            <span>39.15% <i className="fas fa-arrow-up"></i></span>
          </div>
          <div className="Info_chart__chart">
            <canvas id="canvas"></canvas>
            <div className="Chart__type--1-value-section">
              <ul></ul>
            </div>
            <div className="Chart__Info-box-type--1">
              <div className="Chart__line"></div>
              <div className="Info-box__type--1">
                <div className="Info_box__header-type--1">
                  <h5>16 Jan</h5>
                </div>
                <div className="Info_box__values-type--1">
                  <ul>
                    <li>
                      <span className="circle "></span> series-1:
                      <p>33</p>
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
