import React from 'react'

export default function CRM_Table() {
    return (
        <section className="CRM__table">
            <table>
            <thead>
                <tr>
                <td>
                    <input type="checkbox" />
                    Lead Title
                </td>
                <td>Sales</td>
                <td>Company</td>
                <td>Date Created</td>
                <td>Lead Status</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <div className="Table__email">
                    <input type="checkbox" />
                    <h3>abc@example.com</h3>
                    </div>
                </td>
                <td>$2000</td>
                <td>
                    <div className="Table__company">
                    <div className="Table__company-icon table--color1">
                        <h6>A</h6>
                    </div>
                    American Express
                    </div>
                </td>
                <td>22/10/2018</td>
                <td>
                    <span className="Table__lead-stat table--color1">On Track</span>
                </td>
                </tr>
                <tr>
                <td>
                    <div className="Table__email">
                    <input type="checkbox" />
                    <h3>abc@example.com</h3>
                    </div>
                </td>
                <td>$1600</td>
                <td>
                    <div className="Table__company">
                    <div className="Table__company-icon table--color2">
                        <h6>E</h6>
                    </div>
                    Exxon Mobil
                    </div>
                </td>
                <td>15/09/2018</td>
                <td>
                    <span className="Table__lead-stat table--color1"> On Track</span>
                </td>
                </tr>
                <tr>
                <td>
                    <div className="Table__email">
                    <input type="checkbox" />
                    <h3>abc@example.com</h3>
                    </div>
                </td>
                <td>$1265</td>
                <td>
                    <div className="Table__company">
                    <div className="Table__company-icon table--color3">
                        <h6>B</h6>
                    </div>
                    Big Blackship
                    </div>
                </td>
                <td>22/10/2018</td>
                <td>
                    <span className="Table__lead-stat table--color4">Behind</span>
                </td>
                </tr>
                <tr>
                <td>
                    <div className="Table__email">
                    <input type="checkbox" />
                    <h3>abc@example.com</h3>
                    </div>
                </td>
                <td>$4562</td>
                <td>
                    <div className="Table__company">
                    <div className="Table__company-icon table--color4">
                        <h6>F</h6>
                    </div>
                    Folkswagan
                    </div>
                </td>
                <td>14/03/2018</td>
                <td>
                    <span className="Table__lead-stat table--color3">Negotiation</span>
                </td>
                </tr>
                <tr>
                <td>
                    <div className="Table__email">
                    <input type="checkbox" />
                    <h3>abc@example.com</h3>
                    </div>
                </td>
                <td>$5012</td>
                <td>
                    <div className="Table__company">
                    <div className="Table__company-icon table--color2">
                        <h6>N</h6>
                    </div>
                    Novotel
                    </div>
                </td>
                <td>21/02/2018</td>
                <td>
                    <span className="Table__lead-stat table--color5">Offer Made</span>
                </td>
                </tr>
                <tr>
                <td>
                    <div className="Table__email">
                    <input type="checkbox" />
                    <h3>abc@example.com</h3>
                    </div>
                </td>
                <td>$1245</td>
                <td>
                    <div className="Table__company">
                    <div className="Table__company-icon table--color1">
                        <h6>D</h6>
                    </div>
                    Displaypic
                    </div>
                </td>
                <td>3/02/2018</td>
                <td>
                    <span className="Table__lead-stat table--color5">Offer Made</span>
                </td>
                </tr>
            </tbody>
            </table>
        </section>
    )
}
