import React from 'react'

export default function Project_Marketing_Chart() {

  const Canvas = React.useRef<HTMLCanvasElement>(null)
 
   
  const  Values = [22.17, 34.61, 43.22];

  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw)
    }
  })

  const draw = ()=>{
    const ChartWidth = (document.querySelector(".Chart__risk") as HTMLDivElement)
    const Dimension = [0,0,0,0]

    const chartWidth =  ChartWidth.offsetWidth - 60;
    const chartHeight = 250;
    Dimension[1] = chartWidth;
    Dimension[0] = chartHeight; 

    if(Canvas.current !== null){ 
      const canvas = Canvas.current
      var draw = canvas.getContext("2d");
      if(draw !== null){
        canvas.width =  Dimension[1];
        canvas.height =  Dimension[0];

        //lines
        var color = [ "#22AF47", "rgb(255, 191, 54)", "#00ACF0", "#22AF4780", "#00ACF020" ];
        var angle = [0];
        var lines : any = {};
        for (var l = 0; l <   Values.length; l++) {
          angle.push(  parseFloat( ((360 *   Values[l]) / 100 / 180).toPrecision(2) )
          );
        }

        var drawChart = {
          get: () => {
            if(draw !== null){ 
              for (var i = 0; i <   Values.length; i++) {
                var start = 0;
                var end = 0;
                for (var u = 0; u < i + 1; u++) {
                  start = start + angle[u];
                }
                for (var t = 0; t < i + 2; t++) {
                  end = end + angle[t];
                }
                if (i ===   Values.length - 1) {
                  end = 2;
                }
                //line
                draw.beginPath();
                draw.strokeStyle = color[i];
                draw.lineWidth = 30;
                draw.arc(   Dimension[1] / 2,    Dimension[0] / 2, 70, Math.PI * start, Math.PI * end, false );
                draw.stroke();
                lines[i] = [Math.PI * start, Math.PI * end];
                //text
                draw.beginPath();
                draw.fillStyle = color[i];
                draw.font = "11pt Helvetica ";
                let theta = (Math.PI * start + Math.PI * end) / 2;
                let deltaY = Math.sin(theta) * 1.5 * 70;
                let deltaX = Math.cos(theta) * 1.5 * 70;
                var corX = deltaX +   Dimension[1] / 2;
                var corY = deltaY +   Dimension[0] / 2;
                draw.lineWidth = 1;
                if ( corX <   Dimension[1] / 2 && corY <   Dimension[0] / 2
                ) {
                  draw.textAlign = "end";
                } else if ( corX <   Dimension[1] / 2 && corY >   Dimension[0] / 2
                ) {
                  draw.textAlign = "end";
                } else if ( corX >   Dimension[1] / 2 && corY <   Dimension[0] / 2
                ) {
                  draw.textAlign = "start";
                } else if ( corX >   Dimension[1] / 2 && corY >   Dimension[0] / 2
                ) {
                  draw.textAlign = "start";
                }
                draw.fillText(  Values[i] + "%", corX, corY);
                draw.stroke();
              }
            }
          }
        };
        drawChart.get();
        //line info
        var x = null;
        var y = null;
        canvas.onmousemove = e => {
          x = e.clientX - canvas.getBoundingClientRect().x;
          y = e.clientY - canvas.getBoundingClientRect().y;
          if(draw !== null){ 
            var p = draw.getImageData(x, y, 1, 1).data;
            draw.beginPath();
            draw.lineWidth = 30;
            if (p[0] === 0 && p[1] === 172 && p[2] === 240) {
              canvas.setAttribute('style',  "cursor:pointer")
              draw.strokeStyle = color[2];
              draw.arc(   Dimension[1] / 2,   Dimension[0] / 2, 80, lines[2][0], lines[2][1], false );
            } else if (p[0] === 34 && p[1] === 175 && p[2] === 71) {
              canvas.setAttribute('style',  "cursor:pointer")
              draw.strokeStyle = color[0];
              draw.arc(   Dimension[1] / 2,  Dimension[0] / 2,80,lines[0][0],lines[0][1] );
            } else if (p[0] === 255 && p[1] === 191 && p[2] === 54) {
              canvas.setAttribute('style',  "cursor:pointer")
              draw.strokeStyle = color[1];
              draw.arc(  Dimension[1] / 2,  Dimension[0] / 2,80,lines[1][0],lines[1][1],false );
            } else {
              draw.clearRect(0, 0, canvas.width, canvas.height);
              drawChart.get();
              canvas.setAttribute('style',  "cursor:pointer");
            }
            draw.stroke();
          }
        };
      }
    }
  }

    return (
        <div className="Chart__marketing">
            <div className="Marketing__header">
              <div className="Marketing__text">
                <h4>Marketing</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="Marketing__setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="Chart__type--2">
              <canvas id="canvas" ref={Canvas}></canvas>
            </div>
            <div className="Marketing__explanations">
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
