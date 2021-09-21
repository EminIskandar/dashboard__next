import React from 'react'

export default function Statistic_Device_Chart() {

  const Canvas = React.useRef<HTMLCanvasElement>(null)

  const Values = [51, 24, 12, 96, 34, 45]
  const Text1 = ["May","April","March","February","January","June"]
  const Text2 = [0, 20, 40, 60, 80, 100]

  React.useEffect(() => {
    draw()
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw)
    }
  })

  const draw = ()=>{
 
    const Dimension = [0,0,0,0]
    const Chart =  (document.querySelector(".Chart__device-type") as HTMLDivElement)
    var chartWidth = Chart.offsetWidth - 80;
    var chartHeight = 250;
    Dimension[0] = chartHeight;
    Dimension[1] = chartWidth;
    Dimension[3] = chartWidth / 6;
    Dimension[2] = chartHeight / 5;

    if(Canvas.current !== null){ 
    var canvas = Canvas.current;
    var draw = canvas.getContext("2d");
      if(draw !== null){ 
        var text = Text1;
        var text2 = Text2;

        canvas.width =  Dimension[1];
        canvas.height =  Dimension[0];

        var lineL2 =  Dimension[0] / 3;
        var lineW2 =  Dimension[1] / 2 - lineL2;
        var lines2 = [
          [lineW2, lineL2 * 2],
          [lineW2 + lineL2, lineL2 * 2 + lineL2 / 1.5],
          [lineW2 + lineL2 * 2, lineL2 * 2],
          [lineW2 + lineL2 * 2, lineL2],
          [lineW2 + lineL2, lineL2 - lineL2 / 1.5],
          [lineW2, lineL2]
        ];

        //net
        draw.beginPath();
        draw.lineWidth = 1.5;
        draw.strokeStyle = "#e6e6e6";
        for (var i = 0; i < 5; i++) {
          var lineL =  Dimension[0] / 3 - i * 25;
          var lineW =  Dimension[1] / 2 - lineL - i * 25;
          var lines = [
            [lineW, lineL * 2],
            [lineW + lineL, lineL * 2 + lineL / 1.5],
            [lineW + lineL * 2, lineL * 2],
            [lineW + lineL * 2, lineL],
            [lineW + lineL, lineL - lineL / 1.5],
            [lineW, lineL]
          ];
    
          draw.moveTo(lineW, lineL);
          for (var l = 0; l < 6; l++) {
            draw.lineTo(lines[l][0], lines[l][1]);
          }
          draw.translate(25, 37);
        }
        draw.stroke();

        //text
        draw.resetTransform();
        draw.beginPath();
        draw.strokeStyle = "#e6e6e6";
        draw.font = " 10pt arial";
        for (var f = 0; f < 6; f++) {
          var c = 0,
              t = 0;
          switch (f) {
            case 0:
              c = -40;
              break;
            case 1:
              c = -10;
              t = 20;
              break;
            case 2:
              c = +20;
              break;
            case 3:
              c = +20;
              break;
            case 4:
              c = -20;
              t = -10;
              break;
            case 5:
              c = -40;
              break;

            default: ;
          }
          draw.fillStyle = "#5e7d8aa1";
          draw.textAlign = "start";
          draw.moveTo(
            Dimension[1] / 2,
            Dimension[0] / 2 - 2
          );
          draw.lineTo(lines2[f][0], lines2[f][1]);
          draw.fillText(text[f], lines2[f][0] + c, lines2[f][1] + t);
          draw.textAlign = "center";
          draw.fillStyle = "#000";
          draw.fillText(  (text2[f]).toString(), Dimension[1] / 2,  Dimension[0] / 2 - f * 25 );
        }
        draw.stroke();

        //lines
        draw.beginPath();
        draw.strokeStyle = "#00ACF0";
        draw.fillStyle = "#00ACF020";
        var x = 0,
          y = 0;
        for (var g = 0; g < 6; g++) {
          switch (g) {
            case 0:
              x =  (( Dimension[1] / 2 - lines2[g][0]) *   Values[g]) / 100;
              y = (( Dimension[0] / 2 - lines2[g][1]) *   Values[g]) / 100;
              draw.lineTo(  Dimension[1] / 2 - x,  Dimension[0] / 2 - y );
              break;
            case 1:
              x = (( Dimension[1] / 2 - lines2[g][0]) *   Values[g]) / 100;
              y = (( Dimension[0] / 2 - lines2[g][1]) *   Values[g]) / 100;
              draw.lineTo(  Dimension[1] / 2 + x,  Dimension[0] / 2 - y );
              break;
            case 2:
              x = (( Dimension[1] / 2 - lines2[g][0]) *   Values[g]) / 100;
              y = (( Dimension[0] / 2 - lines2[g][1]) *   Values[g]) / 100;
              draw.lineTo(  Dimension[1] / 2 - x,  Dimension[0] / 2 - y );
              break;
            case 3:
              x = (( Dimension[1] / 2 - lines2[g][0]) *   Values[g]) / 100;
              y = (( Dimension[0] / 2 - lines2[g][1]) *   Values[g]) / 100;
              draw.lineTo(   Dimension[1] / 2 - x,  Dimension[0] / 2 - y );
              break;
            case 4:
              x = (( Dimension[1] / 2 - lines2[g][0]) *   Values[g]) / 100;
              y = (( Dimension[0] / 2 - lines2[g][1]) *   Values[g]) / 100;
              draw.lineTo(  Dimension[1] / 2 - x,  Dimension[0] / 2 - y );
              break;
            case 5:
              x = (( Dimension[1] / 2 - lines2[g][0]) *   Values[g]) / 100;
              y =  (( Dimension[0] / 2 - lines2[g][1]) *    Values[g]) / 100;
              draw.lineTo(  Dimension[1] / 2 - x,  Dimension[0] / 2 - y );
              draw.lineTo(  Dimension[1] / 2 - (( Dimension[1] / 2 - lines2[0][0]) *   Values[0]) / 100,
                            Dimension[0] / 2 - (( Dimension[0] / 2 - lines2[0][1]) *   Values[0]) / 100  );
              break;
            default: ;
          }
        }
        draw.fill();
        draw.stroke();
      }
    }
  }
    return (
        <div className="Chart__device-type">
              <div className="Device-type__header">
                <div className="Device-type__text">
                  <h4>Visits by device type</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="Device-type__setting">
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
                    <li><span></span> Desktop</li>
                    <li><span></span> Mobile</li>
                    <li><span></span> Tablet</li>
                  </ul>
                </div>
              </div>
            </div>
    )
}
