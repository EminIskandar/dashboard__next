import React from 'react'
import { Dashboard } from '../../components'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowLeft, faCog, faFileDownload, faPlusSquare, faPrint, faSearch, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'

//img 
import avatar1 from './../../assets/img/profile/avatar1.jpg'
import avatar2 from './../../assets/img/profile/avatar2.jpg'
import avatar3 from './../../assets/img/profile/avatar3.jpg'
import avatar4 from './../../assets/img/profile/avatar4.jpg'
import avatar5 from './../../assets/img/profile/avatar5.jpg' 
import avatar7 from './../../assets/img/profile/avatar7.jpg' 
import avatar9 from './../../assets/img/profile/avatar9.jpg'
import avatar10 from './../../assets/img/profile/avatar10.jpg'
import jpg from './../../assets/img/other/jpgicon.png'
import pdf from './../../assets/img/other/pdficon.png'

const Email : NextPage = () => {
  const inbox = React.useRef<HTMLElement>(null)
  const description = React.useRef<HTMLElement>(null)
  const menu = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    store.dispatch({ 
        type: CHANGE_NAV_NUMBER,
        payload: 5
    })
  })
    
    React.useEffect(() => { 
        window.addEventListener("resize", resize);
    
        return () => {
            window.removeEventListener("resize", resize);
        }
    })

    const OpenMsg = ()=>{
      if(inbox.current !== null && description.current !== null){
        const inboxEmail = inbox.current
        const content = description.current
        var width = window.innerWidth;
        if (width < 996) {
          inboxEmail.style.width = "0vw";
          content.style.width = "100vw";
        }
      }
    }
    const OpenInbox = ()=>{
      if(inbox.current !== null && description.current !== null){
        const inboxEmail = inbox.current
        const content = description.current
        var width = window.innerWidth;
        if (width < 996) {
          inboxEmail.style.width = "100vw";
           content.style.width = "0vw";
        }
      }
    }
    const closeMenu = ()=>{ 
      if(menu.current !== null){
          menu.current.style.transform = "translateX(-200px);";
      }
    }
    const openMenu = ()=>{ 
      if(menu.current !== null){
         menu.current.style.transform = "translateX(0px);";
      }
    }
    const resize = ()=>{
      if(inbox.current !== null && description.current !== null){
        const inboxEmail = inbox.current
        const content = description.current
        var width = window.innerWidth;
        if (width > 996) {
          inboxEmail.setAttribute('style', '')
          content.setAttribute('style', '')
        }
      }
    }

    return (
        <Dashboard classname={"Email__content"} id={'email'} title={'Deepor | Email'} index={5}>
      <section className="Email__inbox" ref={inbox}>
        <div className="Email__menu" ref={menu} >
          <div className="close-btn" onClick={closeMenu}>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </div>
          <div className="category-list">
            <ul>
              <li>Inbox <span>50</span></li>
              <li>Sent Mail</li>
              <li>Important</li>
              <li>Draft</li>
              <li>Trash</li>
              <li>Chat</li>
            </ul>
          </div>
          <div className="compose-btn">
            <button type="button">Compose Email</button>
          </div>
          <div className="filter-list">
            <ul>
              <li><span></span> Clients</li>
              <li><span></span> Personal</li>
              <li><span></span> Office</li>
            </ul>
          </div>
          <div className="setting">
          <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
            <span>Setting</span>
          </div>
        </div>
        <div className="Email__header">
          <div className="Email__button">
            <div className="Email__menu_btn" onClick={openMenu}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <h1>Inbox</h1>
            <div className="Email_new_message">
            <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
            </div>
          </div>
          <div className="Email__search">
            <div className="Search-icon">
              <button><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
            </div>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="Email__letters">
          <div className="Email__letters-items">
            <div className="Email__letters-item" onClick={OpenMsg}>
              <div className="Email__letters-info">
                <div className="Email__letters-image">
                  <Image  src={avatar1} alt="" />
                </div>
                <div className="Email__letters-description">
                  <h3>Clay Masse (8)</h3>
                  <h4>Creation timelines for the standard lorem ipsum</h4>
                  <p>
                    So how did the classical Latin become so incoherent?
                    According to McClintock.
                  </p>
                </div>
              </div>
              <div className="Email__letters-date-and-count">
                <div className="Email__letters-date">
                  <div className="Email__letters_status status-color"></div>
                  <time>5min</time>
                </div>
                <div className="Email__letters-count"> 
                  <FontAwesomeIcon icon={faStar} className="not-save"></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div
              className="Email__letters-item Email__letters-item--reading" onClick={OpenMsg}>
              <div className="Email__letters-info">
                <div className="Email__letters-image">
                  <Image  src={avatar2} alt="" />
                </div>
                <div className="Email__letters-description">
                  <h3>Evie Ono</h3>
                  <h4>
                    McClintock wrote to Before &amp; After to explain his discovery
                  </h4>
                  <p>
                    “What I find remarkable is that this text has been the
                    industry's standard dummy text ever since some printer.
                  </p>
                </div>
              </div>
              <div className="Email__letters-date-and-count">
                <div className="Email__letters-date">
                  <div className="Email__letters_status status-color"></div>
                  <time>4:56 PM</time>
                </div>
                <div className="Email__letters-count">
                <FontAwesomeIcon icon={faStar} className="save"></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="Email__letters-item" onClick={OpenMsg}>
              <div className="Email__letters-info">
                <div className="Email__letters-image">
                  <Image  src={avatar3} alt="" />
                </div>
                <div className="Email__letters-description">
                  <h3>Madalyn Rascon (5)</h3>
                  <h4>Whether a medieval typesetter</h4>
                  <p>
                    As an alternative theory, and because Latin scholars do this
                    sort of thing someone tracked down a 1914 Latin edition of
                    De Finibus which challenges.
                  </p>
                </div>
              </div>
              <div className="Email__letters-date-and-count">
                <div className="Email__letters-date">
                  <div className="Email__letters_status status-color"></div>
                  <time>5:00 PM</time>
                </div>
                <div className="Email__letters-count">
                <FontAwesomeIcon icon={faStar} className="not-save"></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="Email__letters-item" onClick={OpenMsg}>
              <div className="Email__letters-info">
                <div className="Email__letters-image">
                  <Image  src={avatar10} alt="" />
                </div>
                <div className="Email__letters-description">
                  <h3>Mitsuko Heid (2)</h3>
                  <h4>Purposefully designed to have no meaning</h4>
                  <p>
                    Don't bother typing “lorem ipsum” into Google translate. If
                    you already tried, you may have gotten anything from "NATO"
                    to "China"
                  </p>
                </div>
              </div>
              <div className="Email__letters-date-and-count">
                <div className="Email__letters-date">
                  <div className="Email__letters_status status-color"></div>
                  <time>10:14 AM</time>
                </div>
                <div className="Email__letters-count">
                <FontAwesomeIcon icon={faStar} className="save"></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="Email__letters-item" onClick={OpenMsg}>
              <div className="Email__letters-info">
                <div className="Email__letters-image">
                  <Image  src={avatar4} alt="" />
                </div>
                <div className="Email__letters-description">
                  <h3>Ezequiel Merideth</h3>
                  <h4>Popularized in the 1960s</h4>
                  <p>
                    The decade that brought us Star Trek and Doctor Who also
                    resurrected Cicero—or at least what used to be Cicero
                  </p>
                </div>
              </div>
              <div className="Email__letters-date-and-count">
                <div className="Email__letters-date">
                  <div className="Email__letters_status status-color"></div>
                  <time>9:15 AM</time>
                </div>
                <div className="Email__letters-count">
                <FontAwesomeIcon icon={faStar} className="not-save"></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="Email__letters-item" onClick={OpenMsg}>
              <div className="Email__letters-info">
                <div className="Email__letters-image">
                  <Image  src={avatar5} alt="" />
                </div>
                <div className="Email__letters-description">
                  <h3>Jonnie Metoyer</h3>
                  <h4>Some claim lorem ipsum threatens</h4>
                  <p>
                    Among design professionals, there's a bit of controversy
                    surrounding the filler text. Controversy, as in Death to
                    Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="Email__letters-date-and-count">
                <div className="Email__letters-date">
                  <div className="Email__letters_status status-color"></div>
                  <time>10:24 AM</time>
                </div>
                <div className="Email__letters-count">
                <FontAwesomeIcon icon={faStar} className="not-save"></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="Email__letters-item" onClick={OpenMsg}>
              <div className="Email__letters-info">
                <div className="Email__letters-image">
                  <Image  src={avatar9} alt="" />
                </div>
                <div className="Email__letters-description">
                  <h3>Angelic Lauver (2)</h3>
                  <h4>Generally, lorem ipsum is best suited</h4>
                  <p>
                    It's like the props in a furniture store—filler text makes
                    it look like someone is home.
                  </p>
                </div>
              </div>
              <div className="Email__letters-date-and-count">
                <div className="Email__letters-date">
                  <div className="Email__letters_status status-color"></div>
                  <time>12.56 PM</time>
                </div>
                <div className="Email__letters-count">
                <FontAwesomeIcon icon={faStar} className="not-save"></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="Email__letters-item" onClick={OpenMsg}>
              <div className="Email__letters-info">
                <div className="Email__letters-image">
                  <Image  src={avatar7} alt="" />
                </div>
                <div className="Email__letters-description">
                  <h3>Prischila Shy</h3>
                  <h4>Coming full circle, the internet's remixing</h4>
                  <p>
                    Of course, we'd be remiss not to include the veritable cadre
                    of lorem ipsum knock offs featuring
                  </p>
                </div>
              </div>
              <div className="Email__letters-date-and-count">
                <div className="Email__letters-date">
                  <div className="Email__letters_status status-color"></div>
                  <span>Yesterday</span>
                </div>
                <div className="Email__letters-count">
                <FontAwesomeIcon icon={faStar} className="not-save"></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Email__description" ref={description}>
        <div className="Email__description-header">
          <div className="close-btn-description">
            <div className="ec-hpi-left" onClick={OpenInbox}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </div>
          </div>
          <div className="Email__description-btn">
          <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            <div className="Description__file-setting">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Email__description-text">
          <div className="Email__description-title">
            <div className="letter-title">
              <h3>Application for the post of Managing Director</h3>
            </div>
            <div className="category-and-favorite-btn">
              <span>Inbox</span> 
              <FontAwesomeIcon icon={faStar} className="save ecl"></FontAwesomeIcon>
            </div>
          </div>
          <div className="Email__description-author">
            <div className="Description__author-info">
              <div className="Description__author-image">
                <Image  src={avatar2} alt="" />
              </div>
              <div className="Description__author-email">
                <h3>Evie Ono <span>(xyz@example.com)</span></h3>
                <p>to me</p>
              </div>
            </div>
            <div className="Description__date-and-setting">
              <time>10:06 AM (2 hours ago)</time>
              <div className="eca-cds-icon">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Email__description_text">
            <p>Dear Sir,</p>
            <p>
              Faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan
              augue egestas ac. Donec vitae leo at sem lobortis porttitor eu
              consequat risus. Mauris sed congue orci. Donec ultrices faucibus
              rutrum. Phasellus sodales vulputate urna, vel accumsan augue
              egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat
              risus.
            </p>
            <p>
              Donec vitae leo at sem lobortis porttitor eu consequat risus.
              Mauris sed congue orci.Mauris sed congue orci. Donec ultrices
              faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan
              augue egestas ac
            </p>
            <p>Thank you for your time.</p>
            <div className="Email__description_contact-info">
              <h4>Evie One</h4>
              <p>+12 234 443</p>
              <p>xyz@example.com</p>
            </div>
          </div>
          <div className="Email__description-file">
            <div className="Description__file-items">
              <div className="Description__file-item">
                <div className="file-icon">
                  <Image  src={jpg} alt="" />
                </div>
                <div className="file-type-and-name">
                  <p>concept_design.jpg</p>
                  <p>5.78 MB</p>
                </div>
              </div>
              <div className="Description__file-item">
                <div className="file-icon">
                  <Image  src={pdf} alt="" />
                </div>
                <div className="file-type-and-name">
                  <p>Design-titleccv.pdf</p>
                  <p>2.1 MB</p>
                </div>
              </div>
            </div>
            <div className="Description__file-btn">
            <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>
              <div className="Description__file-setting">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Email__description-reply-and-forward">
            <p>Click here to <span>Reply</span> or <span>Forward</span></p>
          </div>
        </div>
      </section>
    </Dashboard>
    )
}

export default Email