import React from 'react'

export default function CRM_Adwords_chart() {
    const border =  React.useRef<HTMLDivElement>(null)
    const chartLeftValues =  React.useRef<HTMLUListElement>(null)
    const chartBottomValues =  React.useRef<HTMLUListElement>(null)
    const chartValues =  React.useRef<HTMLUListElement>(null)
    const canvas =  React.useRef<HTMLCanvasElement>(null)
 
    const Values1= [115, 126, 120, 133, 127, 143, 117, 126, 119];
    const Values2= [233, 221, 242, 219, 232, 225, 236, 229, 249];
    const LeftValues= [0, 10, 20, 30, 40, 50, 60, 70];
    const BottomValues= [ "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan",  "22 Jan", "23 Jan" ];

    React.useEffect(() => {
      draw()
      window.addEventListener("resize",  draw); 
      return () => {
        window.removeEventListener("resize", draw)
      }
    })
 
    const draw = ()=>{
      var Chartwidth = ( document.querySelector(".Adwords-views__title") as HTMLDivElement ).offsetWidth;
      const Dimensions = [300, (Chartwidth - 50), 43, ((Chartwidth - 50) / 8)]

      if(border.current !== null && chartLeftValues.current !== null && chartBottomValues.current !== null && chartValues.current !== null && canvas.current !== null ){
        const Border = border.current
        const ChartLeftValues = chartLeftValues.current
        const ChartBottomValues = chartBottomValues.current
        const ChartValues = chartValues.current 

        var Canvas = canvas.current
        var draw  = Canvas.getContext("2d"); 
        Canvas.setAttribute('width', `${Dimensions[1]}`) 
        Canvas.setAttribute('height', `${Dimensions[0]}`)
  
        //change size chart auto 
        Border.setAttribute('style',`width: ${Dimensions[1]}px; height: ${Dimensions[0]}px`)
        ChartLeftValues.setAttribute('style',`height: ${Dimensions[0]}px;transform: translate(-20px,0px)`)
        ChartBottomValues.setAttribute('style',`width: ${Dimensions[1]}px;transform: translate(0px,0px)`)
        
        if( draw !== null){

        //cordinal lines
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
        draw.stroke();
  
        //info chart
        ChartLeftValues.innerHTML = "";
        ChartBottomValues.innerHTML = "";
        ChartValues.innerHTML = "";
  
        LeftValues.reverse();
        for (var l = 0; l < LeftValues.length; l++) {
          // adding left values and position
          ChartLeftValues.innerHTML += `<li className="v-li" data-v-03f084de>${LeftValues[l]}</li>`;
          (document.querySelectorAll(".Chart__type--1-left-values ul li ") as NodeListOf<HTMLLIElement>)[l].setAttribute('style', `height: ${Dimensions[2]}px`)
          // adding bottom values and position
          ChartBottomValues.innerHTML += `<li className="v-li" data-v-03f084de >${BottomValues[l]}</li>`;
          (document.querySelectorAll(".Chart__type--1-bottom-values ul li ")as NodeListOf<HTMLLIElement>)[l].setAttribute('style', `width: ${Dimensions[3]}px`)
        }
        for (var c = 0; c < Values1.length; c++) {
          //adding chart values
          ChartValues.innerHTML += `<li data-v-03f084de data-value="${c}"><p data-v-03f084de >${Values1[c] - 100}</p></li>`;
        }
        for (var f = 0; f < Values2.length; f++) {
          //adding chart values
          ChartValues.innerHTML += `<li data-v-03f084de data-value="${f + 9}"><p data-v-03f084de >${Values2[f] - 200}</p></li>`;
        }
  
        /*---------------------------------------------- */
  
        //chart values1 postion calc
        var lineTo2 = [];
        for (var t = 0; t < Values2.length; t++) {
          lineTo2[t] = {
            x: t * Dimensions[3],
            y: Dimensions[0] - Values2[t]
          };
        }
        var moveTo = [];
        for (var m = 0; m < Values2.length; m++) {
          if (m < 2) {
            moveTo[m] = {
              x: 0,
              y: Dimensions[0] - Values2[0]
            };
          } else {
            moveTo[m] = {
              x: Object.values(lineTo2[m - 1])[0],
              y: Object.values(lineTo2[m - 1])[1]
            };
          }
        }
        //write chart values1
        draw.beginPath();
        draw.lineWidth = 4;
        draw.strokeStyle = "rgb(255, 191, 54)";
        for (var a = 0; a < Values2.length; a++) {
          draw.moveTo(Object.values(moveTo[a])[0], Object.values(moveTo[a])[1]);
          draw.lineTo(Object.values(lineTo2[a])[0], Object.values(lineTo2[a])[1]);
        }
        draw.stroke();
  
        //chart values1 gradient
        draw.beginPath();
        draw.lineWidth = 0;
        draw.strokeStyle = "transparent";
        var gradient = draw.createLinearGradient(0, 0, 0, 200); // x0 / y0 / x1 // y1
        gradient.addColorStop(0, "rgb(255, 191, 54)"); // kesr ve ya tam ededde istifade etmek olar
        gradient.addColorStop(1, "white");
        draw.fillStyle = gradient;
        for (var h = 0; h < Values1.length; h++) {
          draw.lineTo(Object.values(lineTo2[h])[0], Object.values(lineTo2[h])[1]);
        }
        draw.lineTo(Object.values(lineTo2[8])[0], Dimensions[1]);
        draw.lineTo( Dimensions[1], Dimensions[0]
        );
        draw.lineTo(0, Dimensions[0]);
        draw.lineTo( 0, Dimensions[0] - Values1[0] );
        draw.fill();
  
        /*---------------------------------------------- */
  
        //chart values2 postion calc
        var lineTo = [];
        for (var z = 0; z < Values1.length; z++) {
          lineTo[z] = {
            x: z * Dimensions[3],
            y: Dimensions[0] - Values1[z]
          };
        }
        var moveTo2 = [];
        for (var p = 0; p < Values1.length; p++) {
          if (p < 2) {
            moveTo2[p] = {
              x: 0,
              y: Dimensions[0] - Values1[0]
            };
          } else {
            moveTo2[p] = {
              x: Object.values(lineTo[p - 1])[0],
              y: Object.values(lineTo[p - 1])[1]
            };
          }
        }

        //write chart values2
        draw.beginPath();
        draw.lineWidth = 4;
        draw.strokeStyle = "#5FB3B3";
        for (var u = 0; u < Values1.length; u++) {
          draw.moveTo(Object.values(moveTo2[u])[0], Object.values(moveTo2[u])[1]);
          draw.lineTo(Object.values(lineTo[u])[0], Object.values(lineTo[u])[1]);
        }
        draw.stroke();
  
        //chart values2 gradient
        draw.beginPath();
        draw.lineWidth = 0;
        draw.strokeStyle = "transparent";
        var gradient2 = draw.createLinearGradient(0, 0, 0, 350); // x0 / y0 / x1 // y1
        gradient2.addColorStop(0, "#5FB3B3"); // kesr ve ya tam ededde istifade etmek olar
        gradient2.addColorStop(1, "white");
        draw.fillStyle = gradient2;
        for (var b = 0; b < Values1.length; b++) {
          draw.lineTo(Object.values(lineTo[b])[0], Object.values(lineTo[b])[1]);
        }
        draw.lineTo(Object.values(lineTo[8])[0], Dimensions[1]);
        draw.lineTo( Dimensions[1],  Dimensions[0] );
        draw.lineTo(0, Dimensions[0]);
        draw.lineTo( 0, Dimensions[0] - Values1[0] );
        draw.fill();
  
        draw.stroke();
  
        /*---------------------------------------------- */
  
        //info box
        var li =( document.querySelectorAll(".Chart__type--1-chart-values li") as NodeListOf<HTMLLIElement>);
        for (var k = 0; k < Values1.length; k++) {
          li[k].setAttribute("style", `transform : translate(${Dimensions[3] * k - 5}px,${Dimensions[0] - Values1[k] - 20}px );color: #5FB3B3;width: ${Dimensions[3]}px`);
          li[k + 9].setAttribute("style", `transform : translate(${Dimensions[3] * k - 5}px,${Dimensions[0] - Values2[k] - 20}px);color: rgb(255, 191, 54);width: ${ Dimensions[3]}px`)
        }

        var infoBar = (document.querySelector(".Info_box__type--1") as HTMLDivElement);
        var infoBarValues = (document.querySelectorAll(".Info_box__values li p") as NodeListOf<HTMLParagraphElement>);
        var li2 = (document.querySelectorAll(".Chart__type--1-values-section li") as NodeListOf<HTMLLIElement>);
        var width = (document.querySelector("#canvas") as HTMLCanvasElement);
        var line = (document.querySelector(".Chart__line") as HTMLDivElement); 
      (document.querySelector(".Chart__type--1-values-section ul") as HTMLUListElement).setAttribute("style", `width: ${width.offsetWidth}px`)

      
       for (var r = 0; r < Values1.length * 2; r++) {
          (document.querySelectorAll(".Chart__type--1-values-section li") as NodeListOf<HTMLLIElement>)[r].style.width = `${width.offsetWidth / 9}px`;
          li2[r].addEventListener("mouseover", (e : any) => {
            var index = Array.from(li2).indexOf(e.target);
            if (index >= 9) {
              if (index <= 13) { 
                infoBar.setAttribute('style',  `transform : translate(${Dimensions[3] * (index - 9) - 10}px, 180px); visibility:visible`)
              } else { 
                infoBar.setAttribute('style', `transform : translate(${Dimensions[3] * (index - 9) - 165}px, 180px); visibility:visible`) 
              }
              line.setAttribute( 'style',`transform : translate(${Dimensions[3] * (index - 9)}px, 0px); visibility:visible`)
            } else {
              if (index <= 4) {
                 infoBar.setAttribute( 'style' , `transform : translate(${Dimensions[3] * index - 10}px, 70px);visibility:visible`) 
              } else {
                infoBar.setAttribute( 'style' , `transform : translate(${Dimensions[3] * index - 165}px, 70px);visibility:visible`) 
              }
              line.setAttribute( 'style',`transform : translate(${Dimensions[3] * index }px, 0px); visibility:visible`)
            }
  
            var numb = index;
            if (index < 9) {
              } else {
                numb -= 9;
              }
              infoBarValues[0].innerHTML = (Values1[numb] - 100).toString();
              infoBarValues[1].innerHTML = (Values2[numb] - 200).toString();
          });
          li2[r].addEventListener("mouseout", e => {
            infoBar.style.display = "none";
            line.style.display = "none";
          });
        }
         
      }
    }
  }

    return (
        <div className="Chart__adwords-views">
             <div className="Adwords-views__title" >
                <div className="Adwords_views__text">
                <h4>Monthly Adwords Views</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
                <div className="Adwords_views__setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="Adwords_views__description">
              <div className="Adwords_views__explanations">
                  <ul>
                    <li><span className="circle"></span> Adwords Views</li>
                    <li><span className="circle"></span> Adwords Clicks</li>
                  </ul> 
              </div>
              <div className="Chart Chart__type--1">
                <div className="Chart__type--1-border" ref={border}></div>
                <canvas id="canvas" ref={canvas}></canvas>
                <div className="Chart__type--1-left-values">
                  <ul ref={chartLeftValues}></ul>
                </div>
                <div className="Chart__type--1-bottom-values">
                  <ul ref={chartBottomValues}></ul>
                </div>
                <div className="Chart__type--1-chart-values">
                  <ul ref={chartValues}></ul>
                </div>
                <div className="Chart__type--1-values-section">
                  <ul> 
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="Chart__type--1-values-info-box">
                  <div className="Chart__line"></div>
                  <div className="Info_box Info_box__type--1">
                    <div className="Info_box__header">
                      <h5>16 Jan</h5>
                    </div>
                    <div className="Info_box__values">
                      <ul>
                        <li>
                          <span className="circle"></span> Adwords Views:
                          <p>33</p>
                        </li>
                        <li>
                          <span className="circle"></span> Adwords Clicks:
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
