import React from 'react'
import { Dashboard } from '../../components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faFileAlt, faFileDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'

const Invoice : NextPage = () => {
    React.useEffect(() => {
        store.dispatch({ 
            type: CHANGE_NAV_NUMBER,
            payload: 8
        })
    })

    return (
        <Dashboard classname={"Invoice"} id={"Invoice"} title={'Deepor | Invoice'} index={8}> 
            <section>
                <div className="Invoice__header">
                <div className="Invoice__title">
                <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                    <h1>Invoice</h1>
                </div>
                <div className="Invoice__btn">
                    <div className="Print">
                    <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                    </div>
                    <div className="Download">
                    <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>
                    </div>
                    <div className="Create">
                    <button type="button">Create New</button>
                    </div>
                </div>
                </div>
                <div className="Invoice__content">
                <div className="Company-info">
                    <div className="Company-info__left-side">
                    <div className="Company-info__logo">
                        <h1>Deepor</h1>
                    </div>
                    <ul>
                        <li>Hencework Inc</li>
                        <li>4747, Pearl Street</li>
                        <li>Rainy Day Drive, Washington</li>
                        <li>xyz@example.com</li>
                    </ul>
                    </div>
                    <div className="Company-info__right-side">
                    <div className="Company-info__text">
                        <h1>Invoice / Receipt</h1>
                    </div>
                    <ul>
                        <li><span>Date: </span>Nov 17,2017 11:23 AM</li>
                        <li><span>Invoice / Receipt </span> #21321434</li>
                        <li><span>Customer </span> #321434</li>
                    </ul>
                    </div>
                </div>
                <div className="Payment-info">
                    <div className="Payment-info__billing">
                    <h1>BILLING TO</h1>
                    <ul>
                        <li>Supersonic Co.</li>
                        <li>Sycamore Street</li>
                        <li>San Antonio Valley, CA 34668</li>
                        <li>xyz@example.com</li>
                        <li>ABC:325487</li>
                    </ul>
                    </div>
                    <div className="Payment-info__payment">
                    <h1>PAYMENT INFO</h1>
                    <ul>
                        <li>Scott L Thompson</li>
                        <li>MasterCard#########1234</li>
                        <li>Customer #324148</li>
                    </ul>
                    <div className="Payment-info__amount">
                        <h1>AMOUNT DUE</h1>
                        <p>$22,010</p>
                    </div>
                    </div>
                </div>
                <div className="Items">
                    <div className="Items__header">
                    <h1>Items</h1>
                    </div>
                    <table>
                    <thead>
                        <tr>
                        <td>Items</td>
                        <td>Number</td>
                        <td>Unit Cost</td>
                        <td>Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Design Service</td>
                        <td>2</td>
                        <td>$1500</td>
                        <td>$3000</td>
                        </tr>
                        <tr>
                        <td>Website Development</td>
                        <td>1</td>
                        <td>$7500</td>
                        <td>$7500</td>
                        </tr>
                        <tr>
                        <td>Social Media Services</td>
                        <td>15</td>
                        <td>$180</td>
                        <td>$9000</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                        <td></td>
                        <td></td>
                        <td>Subtotals</td>
                        <td>$19,500</td>
                        </tr>
                        <tr>
                        <td></td>
                        <td></td>
                        <td>Tax</td>
                        <td>$3510</td>
                        </tr>
                        <tr>
                        <td></td>
                        <td></td>
                        <td>Discount</td>
                        <td>$1000</td>
                        </tr>
                        <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>$22,010</td>
                        </tr>
                    </tfoot>
                    </table>
                </div>
                <div className="Notes">
                    <ul>
                    <li>
                        A buyer must settle his or her account within 30 days of the
                        date listed on the invoice.
                    </li>
                    <li>
                        The conditions under which a seller will complete a sale.
                        Typically, these terms specify the period allowed to a buyer to
                        pay off the amount due.
                    </li>
                    </ul>
                </div>
                </div>
            </section>
        </Dashboard>
    )
}

export default Invoice