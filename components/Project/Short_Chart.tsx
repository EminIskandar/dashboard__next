import React from 'react'
import { line } from '../../interfaces'

export default function Project_short_chart() {
 
  // const [ Dimensions, setDimensions ] = React.useState( [53, 150, 15, 10]) 
  const chartUsersValues = [4,7,5,10,25,41,3,20,11,35,44,10,27,31,45,22]
  const chartCampaignLeadsValues = [10,21,34,12,8,35,18,29,44,16,27,4,12,28,32,16]

  const Canvas  = React.useRef<HTMLCanvasElement>(null)
  const Canvas2  = React.useRef<HTMLCanvasElement>(null)
 
  
  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw)
    }
  })

  const draw = ()=>{ 
    chartUser();
    chartCampagin();
  }

  const chartUser = ()=>{
    var chartUserswidth =  (document.querySelectorAll(".Short-info__chart") as NodeListOf<HTMLDivElement>)[0].offsetWidth;
    const Dimensions = [53, chartUserswidth,( 53 / 10) , (chartUserswidth / 15)]
    if(Canvas.current !== null){
      const canvas = Canvas.current; 
      var draw = canvas.getContext("2d"); 
      if(draw !== null){
        canvas.width = Dimensions[1];
        canvas.height = Dimensions[0];

        //chart values
        var lineTo : line[] = [];
        for (var l = 0; l < chartUsersValues.length; l++) {
          lineTo[l] = {
            x: l * Dimensions[3],
            y: Dimensions[0] - chartUsersValues[l]
          };
        }  
        draw.beginPath();
        draw.lineWidth = 6;
        draw.strokeStyle = "#00ACF0";
        for (var c = 0; c < chartUsersValues.length; c++) { 
          draw.lineTo( Object.values(lineTo[c])[0] , Object.values(lineTo[c])[1]);
        }
        draw.stroke();

        //gradient
        draw.beginPath();
        draw.lineWidth = 0;
        draw.strokeStyle = "transparent";
        var gradient = draw.createLinearGradient(0, 0, 0, 350); // x0 / y0 / x1 // y1
        gradient.addColorStop(0, "#D6F2FD");
        gradient.addColorStop(1, "white");
        draw.fillStyle = gradient;
        for (var o = 0; o < chartUsersValues.length; o++) {
          draw.lineTo(Object.values(lineTo[o])[0], Object.values(lineTo[o])[1]);
        }
        draw.lineTo( Object.values(lineTo[15])[0], Dimensions[1]);
        draw.lineTo(Dimensions[1],Dimensions[0]);
        draw.lineTo(0, Dimensions[0]);
        draw.lineTo(0,Dimensions[0] - chartUsersValues[0]);
        draw.fill();
        draw.stroke();

        //chart values section
        (document.querySelector(".Chart__values-section-type--1 ul") as HTMLUListElement).innerHTML ="";
        for (var f = 0; f < chartUsersValues.length; f++) {
          (document.querySelector( ".Chart__values-section-type--1 ul" ) as HTMLUListElement).innerHTML += `<li data-v-5dd84899 style="transform: translateX(${Object.values(lineTo[f])[0]}px)"></li>`;
        }

        //info box
        var li = (document.querySelectorAll(".Chart__values-section-type--1 li") as NodeListOf<HTMLLIElement>);
        var infoBar = (document.querySelector(".Info-box__type--1") as HTMLDivElement);
        var infoBarValues = (document.querySelector( ".Info-box__values-type--1 li p" ) as HTMLParagraphElement );

        for (var k = 0; k < chartUsersValues.length; k++) {
          li[k].addEventListener("mouseover", (e : any ) => {
            var index = Array.from(li).indexOf(e.target);
            if (index >= 5) {
              infoBar.setAttribute('style', `transform : translate(${Object.values( lineTo[index] )[0] - 100}px, 0px);visibility:visible`);
            } else {
              infoBar.setAttribute('style' ,`transform : translate(${Object.values( lineTo[index] )[0] + 10}px, 0px);visibility:visible`);
            }
            infoBarValues.innerHTML = (chartUsersValues[index]).toString();
            e.target.classList.add("dash");
          });
          li[k].addEventListener("mouseout", (e : any) => {
            infoBar.style.display = "none";
            e.target.classList.remove("dash");
          });
        }
      }
    }
  }

  const chartCampagin = ()=>{
      var chartUserswidth =  (document.querySelectorAll(".Short-info__chart") as NodeListOf<HTMLDivElement>)[0].offsetWidth;
      const Dimensions = [53, chartUserswidth,(53 / 10) , (chartUserswidth / 15)]
    if(Canvas2.current !== null){
      const canvas2 = Canvas2.current
      var draw = canvas2.getContext("2d");
      if(draw !== null){
        canvas2.width = Dimensions[1];
        canvas2.height = Dimensions[0];

        //chart values
        var lineTo : line[] = [];
        for (var l = 0; l < chartCampaignLeadsValues.length; l++) {
          lineTo[l] = {
            x: l * Dimensions[3],
            y: Dimensions[0] - chartCampaignLeadsValues[l]
          };
        }
        draw.beginPath();
        draw.lineWidth = 6;
        draw.strokeStyle = "#FFBF36";
        for (var c = 0; c < chartCampaignLeadsValues.length; c++) {
          draw.lineTo(Object.values(lineTo[c])[0], Object.values(lineTo[c])[1]);
        }
        draw.stroke();

        //gradient
        draw.beginPath();
        draw.lineWidth = 0;
        draw.strokeStyle = "transparent";
        var gradient = draw.createLinearGradient(0, 0, 0, 350); // x0 / y0 / x1 // y1
        gradient.addColorStop(0, "#FFF4DE"); // kesr ve ya tam ededde istifade etmek olar
        gradient.addColorStop(1, "white");
        draw.fillStyle = gradient;
        for (var r = 0; r < chartCampaignLeadsValues.length; r++) {
          draw.lineTo(Object.values(lineTo[r])[0], Object.values(lineTo[r])[1]);
        }
        draw.lineTo( Object.values(lineTo[15])[0], Dimensions[1]);
        draw.lineTo(  Dimensions[1], Dimensions[0] );
        draw.lineTo(0, Dimensions[0]);
        draw.lineTo( 0, Dimensions[0] - chartCampaignLeadsValues[0] );
        draw.fill();
        draw.stroke();

        //chart values section
        (document.querySelectorAll( ".Chart__values-section-type--1 ul" ) as NodeListOf<HTMLUListElement>)[1].innerHTML = "";
        for (var f = 0; f < chartCampaignLeadsValues.length; f++) {
          (document.querySelectorAll( ".Chart__values-section-type--1 ul" )as NodeListOf<HTMLUListElement>)[1].innerHTML += `<li data-v-5dd84899 style="transform: translateX(${ Object.values(lineTo[f])[0]}px)"></li>`;
        }

        //info box
        var li = (document.querySelectorAll(".Chart__values-section-type--1 li") as NodeListOf<HTMLUListElement>);
        var infoBar = (document.querySelectorAll(".Info-box__type--1") as NodeListOf<HTMLDivElement>)[1];
        var infoBarValues = (document.querySelectorAll( ".Info-box__values-type--1 li p" ) as NodeListOf<HTMLParagraphElement>)[1];

        for (var k = 16; k < chartCampaignLeadsValues.length * 2; k++) {
          li[k].addEventListener("mouseover", (e : any) => {
            var index = Array.from(li).indexOf(e.target) - 16;
            if (index >= 5) {
              infoBar.setAttribute('style', `transform : translate( ${Object.values( lineTo[index] )[0] - 100}px, 0px);visibility:visible`);
            } else {
              infoBar.setAttribute('style', `transform : translate( ${Object.values( lineTo[index] )[0] + 10}px, 0px);visibility:visible`);
            }
            infoBarValues.innerHTML = (chartCampaignLeadsValues[index]).toString();
            e.target.classList.add("dash");
          });
          li[k].addEventListener("mouseout", (e: any) => {
            infoBar.style.display = "none";
            e.target.classList.remove("dash");
          });
        }
      }
    }
  }
    return (
      <section className="Project__short-info">
        <div className="Short-info__items">
          <div className="Short-info__item">
            <div className="Short-info__title">
              <h3>Users</h3>
            </div>
            <div className="Short-info__info">
              <h2>312 New</h2>
              <div className="Short-info__chart">
                <canvas id="canvas" ref={Canvas}></canvas>
                <div className="Chart__values-section-type--1">
                  <ul></ul>
                </div>
                <div className="Chart__info-box-type--1">
                  <div className="Info-box__type--1">
                    <div className="Info_box__header-type--1">
                      <h5>16 Jan</h5>
                    </div>
                    <div className="Info-box__values-type--1">
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
          <div className="Short-info__item">
            <div className="Short-info__title">
              <h3>Campaign Leads</h3>
            </div>
            <div className="Short-info__info">
              <h2>$140,260</h2>
              <div className="Short-info__chart">
                <canvas id="canvas" ref={Canvas2}></canvas>
                <div className="Chart__values-section-type--1">
                  <ul></ul>
                </div>
                <div className="Chart__info-box-type--1">
                  <div className="Info-box__type--1">
                    <div className="Info_box__header-type--1">
                      <h5>16 Jan</h5>
                    </div>
                    <div className="Info-box__values-type--1">
                      <ul>
                        <li>
                          <span className="circle3"></span> series-1:
                          <p>33</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Short-info__item">
            <div className="Short-info__title">
              <h3>New Contacts</h3>
            </div>
            <div className="Short-info__info">
              <h2>$8,725</h2>
              <span className="good">+5%</span>
            </div>
          </div>
          <div className="Short-info__item">
            <div className="Short-info__title">
              <h3>Win/Loss Ratio</h3>
            </div>
            <div className="Short-info__info">
              <h2>18 invoices</h2>
              <span className="bad">-12%</span>
            </div>
          </div>
        </div>
      </section>
    )
}
