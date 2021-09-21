import React from 'react' 

export default function Statistic_Audience_Chart() {

  const Values = [22.17, 34.61, 43.22];

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
    var chartWidth = (document.querySelector( ".Chart__audience-area-pole") as HTMLDivElement).offsetWidth - 80;
    var chartHeight = 250;
    Dimension[0] = chartHeight;
    Dimension[1] = chartWidth;
    Dimension[3] = chartWidth / 6;
    Dimension[2] = chartHeight / 5;

    if(Canvas.current !== null){
    var canvas = Canvas.current;
    var draw = canvas.getContext("2d");
        canvas.width =  Dimension[1];
        canvas.height =  Dimension[0];

        //chart circle
        var color = [
          "#22AF47",
          "rgb(255, 191, 54)",
          "#00ACF0",
          "#22AF4780",
          "#00ACF020"
        ];
        var values =  Values;
        var angle = [0];
        var lines : any = {};
        for (var l = 0; l < values.length; l++) {
          angle.push(parseFloat(((360 * values[l]) / 100 / 180).toPrecision(2)));
        }

        var drawChart = {
          get: () => {
            for (var i = 0; i < values.length; i++) {
              if(draw !== null){ 
                var start = 0;
                var end = 0;
                for (var u = 0; u < i + 1; u++) {
                  start = start + angle[u];
                }
                for (var j = 0; j < i + 2; j++) {
                  end = end + angle[j];
                }
                if (i === values.length - 1) {
                  end = 2;
                }
                //line
                draw.beginPath();
                draw.strokeStyle = color[i];
                draw.fillStyle = color[i];
                draw.lineWidth = 0;
                draw.moveTo(  Dimension[1] / 2,  Dimension[0] / 2 );
                draw.arc(  Dimension[1] / 2,  Dimension[0] / 2, 90, Math.PI * start, Math.PI * end, false );
                draw.fill();
                draw.stroke();
                lines[i] = [Math.PI * start, Math.PI * end];
                //text
                draw.beginPath();
                draw.fillStyle = color[i];
                draw.font = "11pt Helvetica ";
                let theta = (Math.PI * start + Math.PI * end) / 2;
                let deltaY = Math.sin(theta) * 1.4 * 70;
                let deltaX = Math.cos(theta) * 1.5 * 70;
                var corX = deltaX +  Dimension[1] / 2;
                var corY = deltaY +  Dimension[0] / 2;
                draw.lineWidth = 0;
                if ( corX <  Dimension[1] / 2 && corY <  Dimension[0] / 2
                ) {
                  draw.textAlign = "end";
                } else if ( corX <  Dimension[1] / 2 && corY >  Dimension[0] / 2
                ) {
                  draw.textAlign = "end";
                } else if ( corX >  Dimension[1] / 2 && corY <  Dimension[0] / 2
                ) {
                  draw.textAlign = "start";
                } else if ( corX >  Dimension[1] / 2 && corY >  Dimension[0] / 2
                ) {
                  draw.textAlign = "start";
                }
                draw.fillText(values[i] + "%", corX, corY);
                draw.stroke();
              }
            }
          },
          clear: () => {
            if(draw !== null){ 
              draw.clearRect(0, 0, canvas.width, canvas.height);
            }
            drawChart.get();
          }
        };
        drawChart.get();
        //circle hover effect
        var x = null;
        var y = null;
        canvas.onmousemove = e => {
          if(draw !== null){ 
            x = e.clientX - canvas.getBoundingClientRect().x;
            y = e.clientY - canvas.getBoundingClientRect().y;
            var p = draw.getImageData(x, y, 1, 1).data;
            draw.beginPath();
            if (p[0] === 0 && p[1] === 172 && p[2] === 240) {
              drawChart.clear();
              canvas.setAttribute('style',"cursor:pointer");
              draw.fillStyle = color[2];
              draw.strokeStyle = color[2];
              draw.moveTo(  Dimension[1] / 2,  Dimension[0] / 2 );
              draw.arc(  Dimension[1] / 2,  Dimension[0] / 2, 100, lines[2][0], lines[2][1], false );
            } else if (p[0] === 34 && p[1] === 175 && p[2] === 71) {
              drawChart.clear();
              canvas.setAttribute('style',"cursor:pointer");
              draw.fillStyle = color[0];
              draw.strokeStyle = color[0];
              draw.moveTo(  Dimension[1] / 2,  Dimension[0] / 2 );
              draw.arc(  Dimension[1] / 2,  Dimension[0] / 2, 100, lines[0][0], lines[0][1], false );
            } else if (p[0] === 255 && p[1] === 191 && p[2] === 54) {
              drawChart.clear();
              canvas.setAttribute('style',"cursor:pointer");
              draw.fillStyle = color[1];
              draw.strokeStyle = color[1];
              draw.moveTo(  Dimension[1] / 2,  Dimension[0] / 2 );
              draw.arc(  Dimension[1] / 2,  Dimension[0] / 2, 100, lines[1][0], lines[1][1], false);
            } else {
              drawChart.clear();
              canvas.setAttribute('style',"cursor:pointer");
            }
            draw.fill();
            draw.stroke();
          }
        };
      }
    }
    return (
        <div className="Chart__audience-area-pole">
            <div className="Audience-area-pole__header">
              <div className="Audience-area-pole__text">
                <h4>Audience Area Pole</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit .</p>
              </div>
              <div className="Audience-area-pole__setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="Chart__type--1">
              <canvas id="canvas" ref={Canvas}></canvas>
              <div className="Chart__explanations">
                <ul>
                  <li><span></span>A-1</li>
                  <li><span></span>B-2</li>
                  <li><span></span>C-3</li>
                </ul>
              </div>
            </div>
          </div>
    )
}
