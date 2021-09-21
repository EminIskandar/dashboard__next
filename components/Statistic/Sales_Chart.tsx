import React from 'react'

export default function Statistic_Sales_Chart() {


  const Canvas = React.useRef<HTMLCanvasElement>(null)
  
  const Values =  [10, 70, 45, 78, 12, 63]
  const LeftValues =  [0, 20, 40, 60, 80, 100]
  const BottomValues =  ["15 May","16 May","17 May","18 May","19 May",""]

  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw)
    }
  })


  const draw = ()=>{

      const border = (document.querySelector(".Chart__type--1-border") as HTMLDivElement);
      const leftValues = (document.querySelector(".Chart__type--1-left-values ul") as HTMLUListElement);
      const bottomValues =( document.querySelector(".Chart__type--1-bottom-values ul") as HTMLUListElement );
      const chartValues = (document.querySelectorAll(".Chart__type--1-value-section ul") as NodeListOf<HTMLUListElement>);
 
      const Dimension = [0,0,0,0]
      var chartWidth = (document.querySelector(".Chart__sales") as HTMLDivElement).offsetWidth - 30; 

      Dimension[1] = chartWidth - 50;
      Dimension[0] = 300;
      Dimension[2] = 300 / 5;
      Dimension[3] = (chartWidth - 50) / 5;

      if(Canvas.current !== null){
        var canvas = Canvas.current;
        var draw = canvas.getContext("2d");
        if(draw !== null){ 
          canvas.width = Dimension[1];
          canvas.height = Dimension[0];

          //change size chart auto
          border.setAttribute('style',`width: ${Dimension[1]}px; height: ${Dimension[0]}px`);
          leftValues.setAttribute('style', `height: ${Dimension[0]}px;transform: translate(-23px,-7px)`);
          bottomValues.setAttribute('style', `width: ${Dimension[1] + Dimension[3]}px;transform: translate(0px,0px)`);

          //info chart
          leftValues.innerHTML = "";
          bottomValues.innerHTML = "";
          chartValues[3].innerHTML = "";
          LeftValues.reverse();
          for (var l = 0; l < LeftValues.length; l++) {
            leftValues.innerHTML += `<li class="v-li" data-v-3c46fc5a>${LeftValues[l]}</li>`; leftValues.children[ l ].setAttribute('style',  `height: ${Dimension[2]}px`);
          }
          for (var b = 0; b < BottomValues.length; b++) {
            bottomValues.innerHTML += `<li class="v3-li" data-v-3c46fc5a >${BottomValues[b]}</li>`;
            bottomValues.children[ b ].setAttribute('style', `width: ${Dimension[3]}px`);
            chartValues[3].innerHTML += `<li  data-v-3c46fc5a style="width: ${Dimension[3] - 20}px" ></li>`;
          }

          //cordinal lines
          draw.beginPath();
          draw.lineWidth = 1;
          draw.strokeStyle = "#e6e6e6";
          for (
            var y = Dimension[2];
            y < Dimension[0];
            y += Dimension[2]
          ) {
            draw.moveTo(0, y);
            draw.lineTo(Dimension[1], y);
          }
          draw.stroke();

          //chart lines 1
          var lineTo = [];
          for (var v = 0; v < Values.length; v++) {
            lineTo[v] = {
              x: v * Dimension[3],
              y:
                Dimension[0] -
                (Values[v] * Dimension[0]) /
                  100
            };
          }
          draw.beginPath();
          draw.lineWidth = 3;
          draw.strokeStyle = "#00ACF0";
          draw.moveTo(0, Object.values(lineTo[0])[1]);
          for (var c = 0; c < Values.length; c++) {
            if (c === Values.length - 1) {
            } else {
              draw.bezierCurveTo(
                Object.values(lineTo[c])[0] +
                  Dimension[1] /
                    Values.length /
                    2,
                Object.values(lineTo[c])[1],
                Object.values(lineTo[c + 1])[0] -
                  Dimension[1] /
                    Values.length /
                    2,
                Object.values(lineTo[c + 1])[1],
                Object.values(lineTo[c + 1])[0],
                Object.values(lineTo[c + 1])[1]
              );
            }
          }
          draw.stroke();

          //info
          var li = (document.querySelectorAll(".Chart__type--1-value-section ul") as NodeListOf<HTMLUListElement>)[3].children;
          var infoBar = (document.querySelectorAll(".Info-box__type--1") as NodeListOf<HTMLDivElement>)[3];
          var line = (document.querySelectorAll(".Chart__line") as NodeListOf<HTMLDivElement>)[3];
          var infoBarHead = (document.querySelectorAll( ".Info_box__header-type--1 h5" ) as NodeListOf<HTMLHeadingElement>)[3];
          var infoBarText = (document.querySelectorAll( ".Info_box__values-type--1 p" ) as NodeListOf<HTMLParagraphElement>)[3];

          for (var f = 0; f < Values.length; f++) {
            li[f].addEventListener('mouseover',(e: any) => {
              var index = Array.from(li).indexOf(e.target);
              if (index === 0) {
              } else {
                if (index >= 3) {
                  infoBar.setAttribute('style',`transform : translate(${Dimension[3] * index - 110}px, 100px);visibility:visible`);
                } else {
                  infoBar.setAttribute('style',`transform : translate(${Dimension[3] * index + 10}px, 100px);visibility:visible`);
                }
                line.setAttribute('style', `transform : translate(${Dimension[3] * index}px, 0px);visibility:visible`);
                infoBarHead.innerHTML = BottomValues[index - 1];
                infoBarText.innerHTML = (Values[index]).toString();
              }
            });
            li[f].addEventListener('mouseout',() => {
              infoBar.style.display = "none";
              line.style.display = "none";
            });
          }
        }
      }
  }
    return (
        <div className="Chart__sales">
              <div className="Sales__header">
                <div className="Sales__text">
                  <h4>Total Sales</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="Sales__setting">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="Sales__info-text">
                <h4>$40,630.59</h4>
                <span>5.12%</span>
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
                          <span className="circle"></span> series-1:
                          <p>33</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="Chart__explanations">
                  <ul>
                    <li><span></span> Today</li>
                    <li><span></span> Yesterday</li>
                  </ul>
                </div>
              </div>
            </div>
    )
}
