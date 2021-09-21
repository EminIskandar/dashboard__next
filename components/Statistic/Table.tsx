import React from 'react'
import { CordinatValues } from '../../interfaces'

export default function Statistic_Table() {
 
  const Dimension = [50, 170, 10, 8.5]
  const Values =  [
    [ 2, 10, 14, 12, 25, 50, 41, 36, 32, 7, 41, 36, 52, 14, 24, 14, 23, 42, 32, 21, 7 ],
    [ 12, 14, 25, 36, 42, 41, 26, 35, 20, 10, 13, 15, 18, 8, 13, 25, 42, 35, 36, 23, 15 ],
    [ 23, 24, 42, 35, 26, 31, 21, 25, 26, 20, 10, 18, 17, 39, 42, 32, 21, 25, 34, 21, 36],
    [ 14, 15, 26, 35, 42, 16, 18, 19, 28, 29, 24, 10, 19, 2, 49, 47, 35, 37, 30, 14, 4 ]
  ]
  
  React.useEffect(() => {
    var cordinatLine:  CordinatValues[][] = [[], [], [], []];
      //chart lines
      for (var i in  Values) {
        var canvas = (document.querySelectorAll("#Statistic__table-canvas") as NodeListOf<HTMLCanvasElement> )[i];
        var draw = canvas.getContext("2d");
        if(draw !== null){ 
          canvas.width =   Dimension[1];
          canvas.height =   Dimension[0];

          for (var l = 0; l <  Values[i].length; l++) {
            cordinatLine[i][l] = {
              x: l *   Dimension[3],
              y:   Dimension[0] -  Values[i][l]
            };
          }

          draw.beginPath();
          draw.lineWidth = 3;
          draw.strokeStyle = "#00ACF0";
          for (var c = 0; c <  Values[i].length; c++) {
            draw.lineTo( Object.values(cordinatLine[i][c])[0],  Object.values(cordinatLine[i][c])[1] );
          }
          draw.stroke();

          //gradient
          draw.beginPath();
          draw.lineWidth = 0;
          draw.strokeStyle = "transparent";
          var gradient = draw.createLinearGradient(0, 0, 0, 130); // x0 / y0 / x1 // y1
          gradient.addColorStop(0, "#00ACF030"); //
          gradient.addColorStop(1, "white");
          draw.fillStyle = gradient;
          for (var k = 0; k <  Values[i].length; k++) {
            draw.lineTo( Object.values(cordinatLine[i][k])[0], Object.values(cordinatLine[i][k])[1] );
          }
          draw.lineTo(  Object.values(cordinatLine[i][20])[0], Dimension[1] );
          draw.lineTo(  Dimension[1],   Dimension[0]);
          draw.lineTo( 0, Dimension[0]);
          draw.lineTo( 0, Dimension[0] -  Values[i][0] );
          draw.fill();
          draw.stroke();
        }
      }
  })
 
    return (
        <section className="Statistic__table">
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Chart</td>
              <td>Last Year</td>
              <td>6 Months</td>
              <td>1 Month</td>
              <td>Day</td>
              <td>Sale</td>
              <td>Buy</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="Statistic__table-logo">
                  <img src="../assets/img/other/logo1.jpg" alt="" />
                </div>
              </td>
              <td>Fakebook</td>
              <td>
                <div className="Statistic__table-chart">
                  <canvas id="Statistic__table-canvas"></canvas>
                </div>
              </td>
              <td><i className="fas fa-arrow-up"></i> $ 1,234</td>
              <td><i className="fas fa-arrow-down"></i>$ 5,678</td>
              <td><i className="fas fa-arrow-up"></i>$ 5,678</td>
              <td><i className="fas fa-arrow-down"></i>$ 1,121</td>
              <td>$3,141</td>
              <td>$5,161</td>
            </tr>
            <tr>
              <td>
                <div className="Statistic__table-logo">
                  <img src="../assets/img/other/logo1.jpg" alt="" />
                </div>
              </td>
              <td>Microhard</td>
              <td>
                <div className="Statistic__table-chart">
                  <canvas id="Statistic__table-canvas"></canvas>
                </div>
              </td>
              <td><i className="fas fa-arrow-down"></i>$ 7,181</td>
              <td><i className="fas fa-arrow-down"></i>$ 9,202</td>
              <td><i className="fas fa-arrow-up"></i>$ 1,222</td>
              <td><i className="fas fa-arrow-down"></i>$ 3,242</td>
              <td>$5,262</td>
              <td>$7,282</td>
            </tr>
            <tr>
              <td>
                <div className="Statistic__table-logo">
                  <img src="../assets/img/other/logo1.jpg" alt="" />
                </div>
              </td>
              <td>Oesla Motors</td>
              <td>
                <div className="Statistic__table-chart">
                  <canvas id="Statistic__table-canvas"></canvas>
                </div>
              </td>
              <td><i className="fas fa-arrow-up"></i> $ 9,303</td>
              <td><i className="fas fa-arrow-down"></i> $ 1,323</td>
              <td><i className="fas fa-arrow-up"></i> $ 3,343</td>
              <td><i className="fas fa-arrow-down"></i>$ 5,363</td>
              <td>$7,383</td>
              <td>$9,404</td>
            </tr>
            <tr>
              <td>
                <div className="Statistic__table-logo">
                  <img src="../assets/img/other/logo1.jpg" alt="" />
                </div>
              </td>
              <td>NVISION</td>
              <td>
                <div className="Statistic__table-chart">
                  <canvas id="Statistic__table-canvas"></canvas>
                </div>
              </td>
              <td><i className="fas fa-arrow-up"></i> $ 1,424</td>
              <td><i className="fas fa-arrow-down"></i> $ 3,444</td>
              <td><i className="fas fa-arrow-up"></i> $ 5,464</td>
              <td><i className="fas fa-arrow-down"></i>$ 7,484</td>
              <td>$9,505</td>
              <td>$1,525</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
}
