import React from 'react'

export default function Project_Risk_Chart() {

  const Canvas = React.useRef<HTMLCanvasElement>(null)

  const chartRiskValues1 =  [420, 332, 401, 334, 400, 330, 410];
  const chartRiskValues2 =  [220, 182, 291, 134, 290, 130, 210];
  const chartRiskLeftValues =  [0, 100, 200, 300, 400, 500];
  const chartRiskBottomValues =  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw)
    }
  })

  const draw = ()=>{

    const ChartWidth = (document.querySelector(".Chart__risk") as HTMLDivElement);  

    const Dimension = [0,0,0,0]

    const chartWidth =  ChartWidth.offsetWidth - 60;
    const chartHeight = 250;
    Dimension[1] = chartWidth;
    Dimension[0] = chartHeight;
    Dimension[2] = chartHeight / 5;
    Dimension[3] = chartWidth / 6;
 
    const chartType1LeftValues =(document.querySelectorAll( ".Chart__type--1-left-values ul" ) as NodeListOf<HTMLUListElement>); 
    const chartType1ChartValues = (document.querySelectorAll(  ".Chart__type--1-chart-values ul" ) as NodeListOf<HTMLUListElement> );
    const chartType3Border = (document.querySelector(  ".Chart__type--3-chart-circle ul" ) as HTMLUListElement);
    const chartType3BottomValues = (document.querySelector( ".Chart__type--3_bottom-values ul" ) as HTMLUListElement); 

    if(Canvas.current !== null){

      const canvas = Canvas.current
      var draw = canvas.getContext("2d");
      if(draw !== null){
        canvas.width =  Dimension[1];
        canvas.height =  Dimension[0];

        //change size chart auto
        chartType3Border.setAttribute('style',`width: ${ Dimension[1]}px; height: ${ Dimension[0]}px`);
        chartType1LeftValues[2].setAttribute('style', `height: ${ Dimension[0]}px;transform: translate(-23px,-7px)`);
        chartType3BottomValues.setAttribute('style',`width: ${ Dimension[1] +  Dimension[3]}px;transform: translate(0px,0px)`);

        //info chart
        chartType1LeftValues[2].innerHTML = "";
        chartType3BottomValues.innerHTML = "";
        chartType1ChartValues[1].innerHTML = "";

        chartRiskLeftValues.reverse();
        for (var a = 0; a <  chartRiskLeftValues.length; a++) {
          chartType1LeftValues[2].innerHTML += `<li class="v3-li" data-v-5dd84899>${ chartRiskLeftValues[a]}</li>`;
          chartType1LeftValues[2].children[a].setAttribute('style',`height: ${ Dimension[2]}px`);
        }
        for (var b = 0; b <  chartRiskBottomValues.length; b++) {
          chartType3BottomValues.innerHTML += `<li class="v2-li" data-v-5dd84899 ><p style="transform: translate(-${ Dimension[3] / 6}px,5px)">${  chartRiskBottomValues[b] }</p></li>`;
          chartType3BottomValues.children[b].setAttribute('style',`width: ${ Dimension[3]}px`);
          chartType1ChartValues[1].innerHTML += `<li  data-v-5dd84899 style="width: ${ Dimension[1] / 7}px" ></li>`;
        }

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

        //chart lines 1
        var lineTo = [];
        for (var l = 0; l <  chartRiskValues1.length; l++) {
          lineTo[l] = {
            x: l *  Dimension[3],
            y:  Dimension[0] - ((( chartRiskValues1[l] * 100) / 500) *  Dimension[0]) / 100
          };
        }
        draw.beginPath();
        draw.lineWidth = 3;
        draw.strokeStyle = "#00ACF0";
        draw.moveTo(0, Object.values(lineTo[0])[1]);
        for (var c = 0; c <  chartRiskValues1.length; c++) {
          if (c ===  chartRiskValues1.length - 1) {
          } else {
            draw.bezierCurveTo(
              Object.values(lineTo[c])[0] +   Dimension[1] /  chartRiskValues1.length / 2,
              Object.values(lineTo[c])[1],
              Object.values(lineTo[c + 1])[0] -  Dimension[1] /  chartRiskValues1.length / 2,
              Object.values(lineTo[c + 1])[1],
              Object.values(lineTo[c + 1])[0],
              Object.values(lineTo[c + 1])[1]
            );
          }
        }
        draw.stroke();

        //gradient
        draw.beginPath();
        draw.lineWidth = 0;
        draw.strokeStyle = "transparent";
        var gradient = draw.createLinearGradient(0, 0, 0, 350); // x0 / y0 / x1 // y1
        gradient.addColorStop(0, "#00ACF060"); // kesr ve ya tam ededde istifade etmek olar
        gradient.addColorStop(1, "#00ACF060");
        draw.fillStyle = gradient;
        draw.moveTo(0, Object.values(lineTo[0])[1]);
        for (var t = 0; t <  chartRiskValues1.length; t++) {
          if (t ===  chartRiskValues1.length - 1) {
          } else {
            draw.bezierCurveTo(
              Object.values(lineTo[t])[0] +  Dimension[1] /  chartRiskValues1.length / 2,
              Object.values(lineTo[t])[1],
              Object.values(lineTo[t + 1])[0] -  Dimension[1] /  chartRiskValues1.length / 2,
              Object.values(lineTo[t + 1])[1],
              Object.values(lineTo[t + 1])[0],
              Object.values(lineTo[t + 1])[1]
            );
          }
        }
        draw.lineTo(Object.values(lineTo[6])[0],  Dimension[1]);
        draw.lineTo( Dimension[1],  Dimension[0]);
        draw.lineTo(0,  Dimension[0]);
        draw.lineTo(0,  Dimension[0] -  chartRiskValues1[0]);
        draw.fill();

        draw.stroke();

        //chart lines  2
        var lineTo2 = [];
        for (var h = 0; h <  chartRiskValues2.length; h++) {
          lineTo2[h] = {
            x: h *  Dimension[3],
            y: Dimension[0] - ((( chartRiskValues2[h] * 100) / 500) *  Dimension[0]) / 100
          };
        }
        draw.beginPath();
        draw.lineWidth = 3;
        draw.strokeStyle = "#FFBF36";
        draw.moveTo(0, Object.values(lineTo2[0])[1]);
        for (var j = 0; j <  chartRiskValues2.length; j++) {
          if (j ===  chartRiskValues2.length - 1) {
          } else {
            draw.bezierCurveTo(
              Object.values(lineTo2[j])[0] +  Dimension[1] /  chartRiskValues2.length / 2,
              Object.values(lineTo2[j])[1],
              Object.values(lineTo2[j + 1])[0] -   Dimension[1] /  chartRiskValues2.length / 2,
              Object.values(lineTo2[j + 1])[1],
              Object.values(lineTo2[j + 1])[0],
              Object.values(lineTo2[j + 1])[1]
            );
          }
        }
        draw.stroke();
        //gradient

        draw.beginPath();
        draw.lineWidth = 0;
        draw.strokeStyle = "transparent";
        var gradient2 = draw.createLinearGradient(0, 0, 0, 200); // x0 / y0 / x1 // y1
        gradient2.addColorStop(0, "#FFBF36d1"); // kesr ve ya tam ededde istifade etmek olar
        gradient2.addColorStop(1, "#FFBF36d1");
        draw.fillStyle = gradient2;
        draw.moveTo(0, Object.values(lineTo2[0])[1]);
        for (var s = 0; s <  chartRiskValues2.length; s++) {
          if (s ===  chartRiskValues2.length - 1) {
          } else {
            draw.bezierCurveTo(
              Object.values(lineTo2[s])[0] +  Dimension[1] /  chartRiskValues2.length / 2,
              Object.values(lineTo2[s])[1],
              Object.values(lineTo2[s + 1])[0] -  Dimension[1] /  chartRiskValues2.length / 2,
              Object.values(lineTo2[s + 1])[1],
              Object.values(lineTo2[s + 1])[0],
              Object.values(lineTo2[s + 1])[1]
            );
          }
        }

        draw.lineTo(Object.values(lineTo2[6])[0],  Dimension[1]);
        draw.lineTo( Dimension[1],  Dimension[0]);
        draw.lineTo(0,  Dimension[0]);
        draw.lineTo(0,  Dimension[0] -  chartRiskValues2[0]);
        draw.fill();

        //info
        var li = (document.querySelectorAll(".Chart__type--1-chart-values ul") as NodeListOf<HTMLUListElement> )[1];
        var liLength = (document.querySelectorAll( ".Chart__type--1-chart-values ul") as NodeListOf<HTMLUListElement> )[1].children;
        var liText = (document.querySelectorAll(".Info-box__values-type--2 li p") as NodeListOf<HTMLParagraphElement> ); 
        var infoBar = (document.querySelectorAll(".Info-box__type--2") as NodeListOf<HTMLDivElement>)[2];
        var line = (document.querySelectorAll(".Chart__line") as NodeListOf<HTMLDivElement>)[2];


        for (var f = 0; f <  chartRiskValues1.length; f++) {
          li.children[f].addEventListener( 'mouseover',( e: any) => {
            var index = Array.from(liLength).indexOf(e.target);
            if (index === 6) {
              infoBar.setAttribute('style',`transform : translate(${ Dimension[3] * index - 60}px, 100px);visibility:visible`);
            } else {
              infoBar.setAttribute('style',`transform : translate(${ Dimension[3] * index + 20}px, 100px);visibility:visible`);
            }
            line.setAttribute('style', `transform : translate(${ Dimension[3] * index}px, 0px);visibility:visible`);
            liText[3].innerHTML =  (chartRiskValues1[index]).toString();
            liText[4].innerHTML =  (chartRiskValues2[index]).toString();
          })
          li.children[f].addEventListener('mouseout' ,  () => {
            infoBar.setAttribute('style', "display:none");
            line.setAttribute('style',"display:none");
          });
        }
      }
    }
  }


    return (
        <div className="Chart__risk">
            <div className="Risk__header">
              <div className="Risk__text">
                <h4>Risk</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="Risk__setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="Chart__type--3">
              <div className="Chart__type--3_border"></div>
              <canvas id="canvas" ref={Canvas}></canvas>
              <div className="Chart__type--1-left-values">
                <ul></ul>
              </div>
              <div className="Chart__type--3_bottom-values">
                <ul></ul>
              </div>
              <div className="Chart__type--1-chart-values">
                <ul></ul>
              </div>
              <div className="Chart__info-box-type--1">
                <div className="Chart__line"></div>
                <div className="Info-box__type--2">
                  <div className="Info-box__header-type--2">
                    <h5>Sun</h5>
                  </div>
                  <div className="Info-box__values-type--2">
                    <ul>
                      <li>
                        <span className="circle2"></span>
                        <p>33</p>
                      </li>
                      <li>
                        <span className="circle2"></span>
                        <p>44</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="Risk__explanations">
              <ul>
                <li><span></span> Net Search</li>
                <li><span></span> Email Search</li>
                <li><span></span> Direct Search</li>
                <li><span></span> Paid Search</li>
              </ul>
            </div>
          </div>
    )
}
