import React from 'react'

export default function Project_Sheer_stat_chart() {

  const Canvas = React.useRef<HTMLCanvasElement>(null)

  const LeftValues= [0, 14, 28, 42, 56, 70]
  const BottomValues= [0,60,120,180,240,300,360,420,480,540,600,660]
  const Values1= [5,48,33,62,45,43,38,47,5,11,64,26,65,28,43,39,26,64,15
                                      ,34,68,21,4,69,57,15,24,45,27,58,27,46,3,6,33,5,26,40,33,
                                      22,51,19,38,19,32,56,22,45,37,51,10,28,15,36,25]
  const Values2= [410,481,144,608,268,68,414,496,559,21,564,144,463,599,
                                      509,242,259,656,509,510,460,432,346,658,268,97,93,377,
                                      182,610,438,655,378,629,296,267,55,97,391,40,571,6,143,
                                      292,14,22,64,550,40,483,245,167,4,44]
  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw)
    }
  })

  const draw = ()=>{

      var SheetStatisticsWidth = (document.querySelector(".Chart__sheet-statistics") as HTMLDivElement);

      const Dimension = [0,0,0,0]

      var  ChartBottomItemsWidth =  SheetStatisticsWidth.offsetWidth - 60;
      var  ChartBottomItemsHeight = 250;
      Dimension[1] =  ChartBottomItemsWidth;
      Dimension[0] =  ChartBottomItemsHeight;
      Dimension[2] =  ChartBottomItemsHeight / 5;
      Dimension[3] =  ChartBottomItemsWidth / 11;

      const border = (document.querySelectorAll(".Chart__type--1-border") as NodeListOf<HTMLDivElement>);
      const leftValues = (document.querySelectorAll( ".Chart__type--1-left-values ul" ) as NodeListOf<HTMLUListElement>);
      const bottomValues = (document.querySelectorAll( ".Chart__type--1-bottom-values ul" ) as NodeListOf<HTMLUListElement>); 
      const chartValues = (document.querySelector(".Chart__type--3-chart-circle ul") as HTMLUListElement);

      if(Canvas.current !== null){ 
      const canvas = Canvas.current
      var draw = canvas.getContext("2d");
      if(draw !== null){ 
        var color = ["#22AF47d1", "#FFBF36d1", "#00ACF0d1"];
        canvas.width = Dimension[1];
        canvas.height = Dimension[0];

        //change size chart auto
        border[1].setAttribute('style',  `width: ${Dimension[1]}px; height: ${Dimension[0]}px`);
        chartValues.setAttribute('style',`width:  ${Dimension[1]}px; height: ${Dimension[0]}px`);
        leftValues[1].setAttribute('style',`height:  ${Dimension[0]}px;transform: translate(-20px,-7px)`);
        bottomValues[1].setAttribute('style',`width:  ${Dimension[1] + Dimension[3]}px;transform: translate(0px,0px)`);

        //info chart
        leftValues[1].innerHTML = "";
        bottomValues[1].innerHTML = "";
        chartValues.innerHTML = "";
        LeftValues.reverse();
        for (var l = 0; l < LeftValues.length; l++) {
          leftValues[1].innerHTML += `<li class="v3-li" data-v-5dd84899>${LeftValues[l]}</li>`;
          leftValues[1].children[ l ].setAttribute('style',`height: ${Dimension[2]}px`);
        }
        for (var b = 0; b <  BottomValues.length; b++) {
          bottomValues[1].innerHTML += `<li class="v2-li" data-v-5dd84899 ><p style="transform: translate(-${ Dimension[3] / 6}+'px,5px)">${  BottomValues[b] }</p></li>`;
          bottomValues[1].children[ b ].setAttribute('style', `width: ${Dimension[3]}px`);
        }

        //cordinal lines
        draw.beginPath();
        draw.lineWidth = 1;
        draw.strokeStyle = "#e6e6e6";
        for (
          var t = Dimension[2];
          t < Dimension[0];
          t += Dimension[2]
        ) {
          draw.moveTo(0, t);
          draw.lineTo(Dimension[1], t);
        }
        draw.stroke();

        var chartBubble = chartValues; 
        for (var i : number = 0; i <  Values1.length; i++) {
          var radius : number = ((( Values1[i] * 100) / 70) * Dimension[3]) / 100;
          var y2 =  ((( Values1[i] * 100) / 70) * Dimension[0]) / 100;
          var x2 = ((( Values2[i] * 100) / 660) * Dimension[1]) / 100;
          var c = null;
          if (Math.floor(i/18) === 0) {
            c = color[0];
          } else if (Math.floor(i/18) === 1) {
            c = color[1];
          } else {
            c = color[2];
          }
          chartBubble.innerHTML += `<li data-v-5dd84899 bubble_id="${i}" bubble_r="${Math.floor( radius )}"style="transform: translate(${x2 - 10}px,${Dimension[0] - y2}px);width:${radius}px;height:${radius}px;background-color:${c}"></li>`;
        }
        //info box
        var infoBar = document.querySelectorAll(".Info-box__type--2")[1];
        var x : any | null = null;
        var y : any | null = null;
        chartBubble.onmousemove = e => {
          x = e.clientX - canvas.getBoundingClientRect().x;
          y = e.clientY - canvas.getBoundingClientRect().y;
          if (y > 200) {
            y = 170;
          }
          if (x > Dimension[1] - 120) {
            x = x - 130;
          }
        };

        for (var k in  Values1) {
          document.querySelectorAll(".Chart__type--3-chart-circle li")[k].addEventListener('mouseover' , (e : any) => {
            var index = Array.from( document.querySelectorAll(".Chart__type--3-chart-circle li") ).indexOf(e.target);
            (document.querySelectorAll( ".Info-box__header-type--2 h5") as NodeListOf<HTMLHeadingElement>)[1].innerHTML =  (Values2[index]).toString();
            (document.querySelectorAll( ".info-box__values p span" ) as NodeListOf<HTMLSpanElement>)[0].innerHTML = (index).toString();
            (document.querySelectorAll( ".info-box__values p span" ) as NodeListOf<HTMLSpanElement>)[1].innerHTML = e.target.getAttribute("bubble_r");
            infoBar.setAttribute('style' , "visibility:visible ; transform: translate(" + (x + 20) +  "px," + (y + 10) + "px)");
          });
          document.querySelectorAll(".Chart__type--3-chart-circle li")[ k ].addEventListener('mouseout' , () => {
            infoBar.setAttribute('style' ,"visibility:hidden;display:none" );
          });
        }
      }
    }
  }

    return (
        <div className="Chart__sheet-statistics">
            <div className="Sheet-statistics__header">
              <div className="Sheet-statistics__text">
                <h4>
                  Balance Sheet Statistics
                  <p>sub heading</p>
                </h4>
              </div>
              <div className="Sheet-statistics__setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="Chart__type--3">
              <div className="Chart__type--1-border"></div>
              <canvas id="canvas" ref={Canvas}></canvas>
              <div className="Chart__type--1-left-values">
                <ul></ul>
              </div>
              <div className="Chart__type--1-bottom-values">
                <ul></ul>
              </div>
              <div className="Chart__type--3-chart-circle">
                <ul></ul>
              </div>
              <div className="Chart__info-box-type--1">
                <div className="Chart__line"></div>
                <div className="Info-box__type--2">
                  <div className="Info-box__header-type--2">
                    <h5>120</h5>
                  </div>
                  <div className="Info-box__values-type--2">
                    <div className="circle"></div>
                    <div className="info-box__values">
                      <p>Bubble : <span>1</span></p>
                      <p>Size : <span>24</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Sheet-statistics__explanations">
              <ul>
                <li><span></span> Net Search</li>
                <li><span></span> Email Search</li>
              </ul>
            </div>
          </div>
    )
}
