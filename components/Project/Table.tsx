import React from 'react'
import Image from 'next/image'

//img 
import logo from './../../assets/img/other/logo1.jpg'

export default function Project_Table() {
    return (
        <section className="Project__table">
        <table>
          <thead>
            <tr>
              <td>Logo</td>
              <td>Project</td>
              <td>Company</td>
              <td>Update</td>
              <td>Budget</td>
              <td>Tasks</td>
              <td>Status</td>
              <td>Deadline</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="Project__logo">
                  <Image src={logo} alt="" />
                </div>
              </td>
              <td>Branding</td>
              <td>Pineapple Inc</td>
              <td>13 Nov 2018</td>
              <td>
                <span className="Project__table-budget table--color3"
                  >Completed</span
                >
              </td>
              <td>
                <div className="Project__table-task">
                  <i className="fas fa-history"></i>0
                </div>
              </td>
              <td>
                <div className="Project__table-status">
                  <span>95%</span>
                  <div className="Project__table-status-bar">
                    <div
                      className="sb-line bar-table--color1"
                      style={{width: '90%'}}
                    ></div>
                    <div className="sb-line bar-color"></div>
                  </div>
                </div>
              </td>
              <td>10 Nov 2018</td>
            </tr>
            <tr>
              <td>
                <div className="Project__logo">
                  <Image src={logo} alt="" />
                </div>
              </td>
              <td>Website</td>
              <td>Gooole co.</td>
              <td>30 Nov 2018</td>
              <td>
                <span className="Project__table-budget table--color1" >In Process</span >
              </td>
              <td>
                <div className="Project__table-task" aria-hidden>
                  <i className="fas fa-history" ></i>3
                </div>
              </td>
              <td>
                <div className="Project__table-status">
                  <span>70%</span>
                  <div className="Project__table-status-bar">
                    <div className="sb-line bar-color2" style={{width: '70%'}}></div>
                    <div className="sb-line bar-color"></div>
                  </div>
                </div>
              </td>
              <td>13 Dec 2018</td>
            </tr>
            <tr>
              <td>
                <div className="Project__logo">
                  <Image src={logo} alt="" />
                </div>
              </td>
              <td>Collaterals</td>
              <td>Big Energy</td>
              <td>12 Nov 2018</td>
              <td>
                <span className="Project__table-budget table--color3">Behind</span>
              </td>
              <td>
                <div className="Project__table-task">
                  <i className="fas fa-history"></i>14
                </div>
              </td>
              <td>
                <div className="Project__table-status">
                  <span>35%</span>
                  <div className="Project__table-status-bar">
                    <div
                      className="sb-line bar-table--color3"
                      style={{width: '35%'}}
                    ></div>
                    <div className="sb-line bar-color"></div>
                  </div>
                </div>
              </td>
              <td>21 Oct 2018</td>
            </tr>
            <tr>
              <td>
                <div className="Project__logo">
                  <Image src={logo} alt="" />
                </div>
              </td>
              <td>Branding, Print</td>
              <td>Novotel</td>
              <td>10 Nov 2018</td>
              <td>
                <span className="Project__table-budget table--color1"
                  >In Process</span
                >
              </td>
              <td>
                <div className="Project__table-task">
                  <i className="fas fa-history"></i>6
                </div>
              </td>
              <td>
                <div className="Project__table-status">
                  <span>80%</span>
                  <div className="Project__table-status-bar">
                    <div className="sb-line bar-color2" style={{width: '80%'}} ></div>
                    <div className="sb-line bar-color"></div>
                  </div>
                </div>
              </td>
              <td>14 Nov 2018</td>
            </tr>
            <tr>
              <td>
                <div className="Project__logo">
                  <Image src={logo} alt="" />
                </div>
              </td>
              <td>Web Application</td>
              <td>Folkswagan</td>
              <td>12 Nov 2018</td>
              <td>
                <span className="Project__table-budget table--color3">Behind</span>
              </td>
              <td>
                <div className="Project__table-task">
                  <i className="fas fa-history"></i>9
                </div>
              </td>
              <td>
                <div className="Project__table-status">
                  <span>30%</span>
                  <div className="Project__table-status-bar">
                    <div
                      className="sb-line bar-table--color3"
                      style={{width: '30%'}}
                    ></div>
                    <div className="sb-line bar-color"></div>
                  </div>
                </div>
              </td>
              <td>15 Oct 2018</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
}
