import React from 'react'
import { Dashboard } from '../../components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faAsterisk, faBook, faBookmark, faLock, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'

const Faq : NextPage = () => {
 

    const [lastIndex, setLastIndex] = React.useState(1)

    React.useEffect(() => {
      store.dispatch({ 
          type: CHANGE_NAV_NUMBER,
          payload: 11
      })
    })

      const openCloseTermsItems = (  numb: number ): void =>{
        
        var item : NodeListOf<HTMLDivElement> = document.querySelectorAll( ".Faq__terms-and-condition-items h3" ),
            itemText : NodeListOf<HTMLDivElement> = document.querySelectorAll(".Item-text"),
            itemTextIcon : NodeListOf<SVGPathElement> = document.querySelectorAll(".Item-title svg path"),
            itemTextTitle : NodeListOf<HTMLDivElement> = document.querySelectorAll(".Item-title h3"),
            itemTextContent: NodeListOf<HTMLDivElement> = document.querySelectorAll(".Item-text p"),
            itemLength : number = item.length 
            console.log(numb)
        for (var i = 0; i < itemLength; i++) {
          itemText[i].style.height = "0px";
          itemTextIcon[i].setAttribute('style' , '')
          itemTextTitle[i].style.color = " ";
        }
  
        if (lastIndex === numb) { 
            setLastIndex(itemLength) 
        } else {
          itemText[numb].style.height =  `${itemTextContent[numb].offsetHeight+25}px`; 
          itemTextIcon[numb].setAttribute('style' , 'fill:#00ACF0!important')
          itemTextTitle[numb].style.color ='#00ACF0;'
          setLastIndex(numb)
        }
      }

 
    return (
        <Dashboard classname={"Faq"} id={'Faq'} title={'Deepor | Faq'} index={11}>
        <section className="Faq__header">
            <div className="Search">
          <div className="Search__title">
            <h1>Ask a question or browse by category below.</h1>
          </div>
          <div className="Search__form-input">
            <input type="text" placeholder="Search by keywords" />
          </div>
        </div>
        </section>
        <section className="Faq__content">
        <div className="Faq__content-items">
          <div className="Faq__category">
            <div className="Faq__category-header">
              <h3>Category</h3>
            </div>
            <div className="Faq__category-items">
              <ul>
                <li> 
                  <FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon>
                  <h5>Terms &amp; conditions</h5>
                  <span>06</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  <h5>Privacy policy</h5>
                  <span>14</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                  <h5>Terms of use</h5>
                  <span>10</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                  <h5>Documentation</h5>
                  <span>27</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="Faq__terms-and-condition">
            <div className="Faq__terms-and-condition-header">
              <h3>Terms and Conditions</h3>
            </div>
            <div className="Faq__terms-and-condition-items">
              <ul>
                <li>
                  <div className="Item-title">
                  <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
                    <h3 onClick={()=>{openCloseTermsItems(0)}}>
                      The Intellectual Property
                    </h3>
                  </div>
                  <div className="Item-text">
                    <p>
                      The Intellectual Property disclosure will inform users
                      that the contents, logo and other visual media you created
                      is your property and is protected by copyright laws.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="Item-title">
                  <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
                    <h3 onClick={()=>{openCloseTermsItems(1)}}>Termination clause</h3>
                  </div>
                  <div className="Item-text">
                    <p>
                      A Termination clause will inform that users’ accounts on
                      your website and mobile app or users’ access to your
                      website and mobile (if users can’t have an account with
                      you) can be terminated in case of abuses or at your sole
                      discretion.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="Item-title">
                  <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
                    <h3 onClick={()=>{openCloseTermsItems(2)}}>Governing Law</h3>
                  </div>
                  <div className="Item-text">
                    <p>
                      A Governing Law will inform users which laws govern the
                      agreement. This should the country in which your company
                      is headquartered or the country from which you operate
                      your website and mobile app.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="Item-title">
                  <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
                    <h3 onClick={()=>{openCloseTermsItems(3)}}>
                      Limit what users can do
                    </h3>
                  </div>
                  <div className="Item-text">
                    <p>
                      A Limit What Users Can Do clause can inform users that by
                      agreeing to use your service, they’re also agreeing to not
                      do certain things. This can be part of a very long and
                      thorough list in your Terms and Conditions agreements so
                      as to encompass the most amount of negative uses.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="Item-title">
                  <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
                    <h3 onClick={()=>{openCloseTermsItems(4)}}>
                      Limitation of liability of your products
                    </h3>
                  </div>
                  <div className="Item-text">
                    <p>
                      No matter what kind of goods you sell, best practices
                      direct you to present any warranties you are disclaiming
                      and liabilities you are limiting in a way that your
                      customers will notice.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="Item-title">
                  <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
                    <h3 onClick={()=>{openCloseTermsItems(5)}}>
                      How to enforce Terms and Conditions
                    </h3>
                  </div>
                  <div className="Item-text">
                    <p>
                      While creating and having a Terms and Conditions is
                      important, it’s far more important to understand how you
                      can make the Terms and Conditions enforceable. You should
                      always use clickwrap to get users to agree to your Terms
                      and Conditions. Clickwrap is when you make your users take
                      some action – typically clicking something – to show
                      they’re agreeing. Here’s how Engine Yard uses the
                      clickwrap agreement with the I agree check box:
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        </Dashboard>
    )
}

export default Faq
