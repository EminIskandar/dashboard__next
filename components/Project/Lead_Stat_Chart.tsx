import React from 'react'

export default function Project_Lead_Stat_Chart() { 

  const Canvas = React.useRef<HTMLCanvasElement>(null)
 
  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw)
    }
  })

 
  const draw = ()=>{ 
    const LeadStatChart =( document.querySelector(".Chart__lead-stat") as HTMLDivElement).offsetWidth 
    const Dimension = [450,LeadStatChart,0,0] 
    if(Canvas.current !== null){
      var canvas = Canvas.current;
      var draw = canvas.getContext("2d");
      if(draw !== null){

        canvas.width =  Dimension[1];
        canvas.height =  Dimension[0];
        (document.querySelector(".CChart__type--2-circle-info ul") as HTMLUListElement).setAttribute('style', "height:" +  Dimension[0] + "px;width:" +  Dimension[1] + "px;");

        //lines
        var color = ["#22AF47", "rgb(255, 191, 54)", "#00ACF0"];
        var cRadius = [150, 120, 90];
        var circleLength = [0, Math.PI * 1.8, Math.PI * 1.9];
        var cText = ["June", "May", "April"];
        var infoCircleColor = ["#00ACF0", "rgb(255, 191, 54)", "#22AF47"];
        var cCor = [50, 70, 90];

        for (var i = 0; i < color.length; i++) {
          //line
          draw.beginPath();
          draw.strokeStyle = color[i];
          draw.lineWidth = 20;
          draw.lineCap = "round";
          draw.arc( Dimension[1] / 2, Dimension[0] / 2,cRadius[i],Math.PI * 0.5,circleLength[i],false);
          draw.stroke();
          //text
          draw.beginPath();
          draw.fillStyle = "#000";
          draw.font = "11pt arial";
          draw.fillText(
            cText[i],
            Dimension[1] / 2 + 50,
            Dimension[0] / 2 + cCor[i]
          );
          draw.fillStyle = infoCircleColor[i];
          draw.strokeStyle = " ";
          draw.lineWidth = 10;
          draw.arc(  Dimension[1] / 2 + 40,  Dimension[0] / 2 + cCor[i] - 5, 1, 0, Math.PI * 2, false );
          draw.stroke();
        }
        //line info
        var li =( document.querySelectorAll(".CChart__type--2-circle-info li") as NodeListOf<HTMLLIElement>);
        var liWH = [ [80, 318], [65, 318 - 60], [50, 318 - 110]];
        var values = ["77%", "63%", "71%"];
        for (var t = 0; t < color.length; t++) {
          li[t].setAttribute('style', `height:${liWH[t][0]}%; width:${liWH[t][1]}px; z-index:${(t + 1)}`);
          li[t].onmouseover =( e : any) => {
            if(draw !== null){ 
              var index = Array.from(li).indexOf(e.target);
              var c = null;
              draw.beginPath();
              draw.fillStyle = "#fff";
              draw.strokeStyle = "#fff";
              draw.lineWidth = 0;
              draw.arc( Dimension[1] / 2, Dimension[0] / 2,40,0,Math.PI * 2,false);
              draw.fill();
              draw.stroke();

              draw.beginPath();
              draw.fillStyle = color[index];
              draw.strokeStyle = "red";
              draw.lineWidth = 0;
              draw.font = "25pt arial";
              draw.fillText( cText[index],  Dimension[1] / 2 - 40,  Dimension[0] / 2 - 10) 
              draw.stroke();

              draw.beginPath();
              draw.fillStyle = "#000";
              draw.strokeStyle = "red";
              draw.lineWidth = 0;
              draw.font = "11pt arial";
              draw.fillText(  values[index],  Dimension[1] / 2,  Dimension[0] / 2 + 20 );
              draw.stroke(); 

              if (index === 0) {
                c = ["#22AF4780", "#FFBF36", "#00ACF0"];
              } else if (index === 1) {
                c = ["#22AF47", "#FFBF3680", "#00ACF0"];
              } else {
                c = ["#22AF47", "#FFBF36", "#00ACF080"];
              }

              for (var i = 0; i < color.length; i++) {
                  draw.beginPath();
                  draw.strokeStyle = "#fff";
                  draw.lineWidth = 20;
                  draw.lineCap = "round";
                  draw.arc( Dimension[1] / 2, Dimension[0] / 2,cRadius[i],Math.PI * 0.5,circleLength[i],false );
                  draw.stroke(); 
              }

              for (var g = 0; g < color.length; g++) { 
                  draw.beginPath();
                  draw.strokeStyle = c[g];
                  draw.lineWidth = 20;
                  draw.lineCap = "round";
                  draw.arc( Dimension[1] / 2, Dimension[0] / 2,cRadius[g],Math.PI * 0.5,circleLength[g],false );
                  draw.stroke(); 
              }
            }
          };
          li[t].onmouseout = () => {

            if(draw !== null){ 
              draw.beginPath();
              draw.fillStyle = "#fff";
              draw.strokeStyle = "#fff";
              draw.lineWidth = 0;
              draw.arc( Dimension[1] / 2, Dimension[0] / 2,40,0,Math.PI * 2,false);
              draw.fill();
              draw.stroke();

              for (var i = 0; i < color.length; i++) {
                draw.beginPath();
                draw.strokeStyle = color[i];
                draw.lineWidth = 20;
                draw.lineCap = "round";
                draw.arc( Dimension[1] / 2, Dimension[0] / 2,cRadius[i],Math.PI * 0.5,circleLength[i],false);
                draw.stroke();
              }

            }
          };
        }
      }
    }
  }
    return (
        <div className="Chart__lead-stat">
            <div className="Lead-stat__header">
              <div className="Lead-stat__text">
                <h4>
                  Lead Stats
                  <p>sub heading</p>
                </h4>
              </div>
              <div className="Lead-stat__setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="Chart__type--2">
              <div className="Chart__type--2-border"></div>
              <canvas id="canvas2" ref={Canvas}></canvas>
              <div className="CChart__type--2-circle-info">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="Chart__info-box-type--1">
                <div className="Info-box__type--1">
                  <div className="Info_box__header-type--1">
                    <h5>16 Jan</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
