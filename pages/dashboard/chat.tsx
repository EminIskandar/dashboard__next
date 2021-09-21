import React from 'react'
import { Dashboard } from '../../components'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowLeft, faAt, faPaperclip, faPhoneAlt, faPlusSquare, faSearch, faVideo } from "@fortawesome/free-solid-svg-icons";
import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'


//img
import avatar from './../../assets/img/profile/avatar.jpg'
import avatar1 from './../../assets/img/profile/avatar1.jpg'
import avatar2 from './../../assets/img/profile/avatar2.jpg'
import avatar3 from './../../assets/img/profile/avatar3.jpg'
import avatar4 from './../../assets/img/profile/avatar4.jpg'
import avatar5 from './../../assets/img/profile/avatar5.jpg' 
import avatar7 from './../../assets/img/profile/avatar7.jpg'
import avatar8 from './../../assets/img/profile/avatar8.jpg'
import avatar9 from './../../assets/img/profile/avatar9.jpg'
import avatar10 from './../../assets/img/profile/avatar10.jpg'

const  Chat : NextPage = () => {

    const inbox = React.useRef<HTMLElement>(null)
    const description = React.useRef<HTMLElement>(null)
    const input = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
      store.dispatch({ 
          type: CHANGE_NAV_NUMBER,
          payload: 3
      })
    })

    React.useEffect(() => {

            window.addEventListener("resize", resize);
        
         return () => {
               window.removeEventListener("resize", resize);
         }
     })

      const Open = ()=>{  
        if(input.current !== null){
            input.current.click() 
        }
      }
      const OpenMsg = ()=>{
        var width = window.innerWidth;
        if(inbox.current !== null && description.current !== null){
          const chatInbox = inbox.current
          const message = description.current
          if (width < 996) {
            chatInbox.style.width = " 0vw";
            message.style.width = "100vw";
        }
        }
      }
      const OpenInbox = ()=>{
        var width = window.innerWidth;
        if(inbox.current !== null && description.current !== null){
          const chatInbox = inbox.current 
          const message = description.current 
          if (width < 996) {
            chatInbox.style.width = "100vw";
            message.style.width = "0vw";
          }
        }
      }
      const resize = ()=>{
        var width = window.innerWidth;
        if(inbox.current !== null && description.current !== null){
          const chatInbox = inbox.current 
          const message = description.current 
          if (width > 996) {
            chatInbox.setAttribute('style', '')
            message.setAttribute('style', '')
          }
        }
      }


    return (
        <Dashboard classname={"Chat__content"} id={'Chat'} title={'Deepor | Gallery'} index={3} >
          <section className="Chat__inbox" ref={inbox}>
          <div className="Chat__inbox-header">
            <div className="Chat__inbox-btn">
              <div className="Chat__setting-btn">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <h1>Chats</h1>
              <div className="Chat__new-message-btn">
              <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
              </div>
            </div>
            <div className="Chat__inbox-search">
              <div className="Icon">
                <button><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
              </div>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="Chat__messages">
            <div className="Chat__messages-items">
              <div className="Chat__messages-item" onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar1 } alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Clay Masse</h3>
                    <p>No one saves us but ourselves.</p>
                  </div>
                </div>
                <div className=" Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>5min</span>
                  </div>
                  <div className="Chat__messages-count">
                    <span>15</span>
                  </div>
                </div>
              </div>
              <div className="Chat__messages-item Chat__messages-item--reading" onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar2} alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Evie Ono</h3>
                    <p>Unity is strength 😀</p>
                  </div>
                </div>
                <div className="Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>4:56 PM</span>
                  </div>
                  <div className="Chat__messages-count"></div>
                </div>
              </div>
              <div className="Chat__messages-item" onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar3} alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Madalyn Rascon</h3>
                    <p>Respect yourself if you would have others respect you.</p>
                  </div>
                </div>
                <div className="Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>5:00 PM</span>
                  </div>
                  <div className="Chat__messages-count">
                    <span>3</span>
                  </div>
                </div>
              </div>
              <div className="Chat__messages-item" onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar10} alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Mitsuko Heid</h3>
                    <p>OK that sounds perfect 🤞.</p>
                  </div>
                </div>
                <div className="Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>10:14 AM</span>
                  </div>
                  <div className="Chat__messages-count"></div>
                </div>
              </div>
              <div className="Chat__messages-item" onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar4} alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Ezequiel Merideth</h3>
                    <p>staff was calling me to make sure I was there.</p>
                  </div>
                </div>
                <div className="Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>9:15 AM</span>
                  </div>
                  <div className="Chat__messages-count"></div>
                </div>
              </div>
              <div className="Chat__messages-item" onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar5} alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Jonnie Metoyer</h3>
                    <p>There is so much caos happening.</p>
                  </div>
                </div>
                <div className="Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>10:24 AM</span>
                  </div>
                  <div className="Chat__messages-count"></div>
                </div>
              </div>
              <div className="Chat__messages-item" onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar9} alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Angelic Lauver</h3>
                    <p>Concentrate on studdies will be the text.</p>
                  </div>
                </div>
                <div className="Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>12.56 PM</span>
                  </div>
                  <div className="Chat__messages-count"></div>
                </div>
              </div>
              <div className="Chat__messages-item" onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar7} alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Prischila Shy</h3>
                    <p>
                      Good morning! I am here to talk to you about the meeting.
                    </p>
                  </div>
                </div>
                <div className="Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>Yesterday</span>
                  </div>
                  <div className="Chat__messages-count"></div>
                </div>
              </div>
              <div className="Chat__messages-item" onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar8} alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Lynda Stack</h3>
                    <p>How much should we contribute?</p>
                  </div>
                </div>
                <div className="Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>Friday</span>
                  </div>
                  <div className="Chat__messages-count"></div>
                </div>
              </div>
              <div className="Chat__messages-item"onClick={OpenMsg}>
                <div className="Chat__messages-info">
                  <div className="Chat__messages-image">
                    <Image src={avatar} alt="" />
                  </div>
                  <div
                    className="Chat__messages-status Chat__messages--status-color"
                  ></div>
                  <div className="Chat__messages-text">
                    <h3>Aash Bill</h3>
                    <p>I have to revise the task</p>
                  </div>
                </div>
                <div className="Chat__messages-date-and-msg-count">
                  <div className="Chat__messages-date">
                    <span>Thursday</span>
                  </div>
                  <div className="Chat__messages-count"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <section className="Chat__description" ref={description}>
          <div className="Chat__description-header">
            <div className="Chat__description-info">
              <div className="close-btn" onClick={OpenInbox}>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </div>
              <div className="Chat__description-image">
                <Image src={avatar2} alt="" />
              </div>
              <div className="Chat__description-name-and-stat">
                <h3>Evie Ono</h3>
                <p>online</p>
              </div>
            </div>
            <div className="Chat__description-btn">
            <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
            </div>
          </div>
          <div className="Chat__description-messages">
            <div className="Messages__items">
              <div className="Messages__incoming">
                <div className="Messages__image">
                  <Image src={avatar2} alt="" />
                </div>
                <div className="Messages__incoming-text">
                  <div className="Messages__incoming-text_item">
                    <div className="Messages__incoming-text-content">
                      <div className="Messages__incoming-text-description">
                        <p>Cool, lets talk about it tomorrow</p>
                      </div>
                      <div className="Messages__incoming-text-date">
                        <span>10:55 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="Messages__incoming-text_item">
                    <div className="Messages__incoming-text-content">
                      <div className="Messages__incoming-text-description">
                        <p>Images for new marketing pages have been sent</p>
                      </div>
                      <div className="Messages__incoming-text-date">
                        <span>10:56 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Messages__incoming">
                <div className="Messages__image">
                  <Image src={avatar2} alt="" />
                </div>
                <div className="Messages__incoming-text">
                  <div className="Messages__incoming-text_item">
                    <div className="Messages__incoming-text-content">
                      <div className="Messages__incoming-text-description">
                        <p>
                          Hey Ben, just a reminder that you are coming for the
                          meeting today in the conference. We are proposing a
                          change in the client briefing.
                        </p>
                      </div>
                      <div className="Messages__incoming-text-date">
                        <span>2:35 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Messages__sedding">
                <div className="Messages__sedding-items">
                  <div className="Messages__sedding-item">
                    <div className="Messages__sedding-item-content">
                      <div className="Messages__sedding-item-description">
                        <p>
                          Sure, on my way to office. Please give me quick update.
                        </p>
                      </div>
                      <div className="Messages__sedding-item-date">
                        <span>2:35 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Messages__incoming">
                <div className="Messages__image">
                  <Image src={avatar2} alt="" />
                </div>
                <div className="Messages__incoming-text">
                  <div className="Messages__incoming-text_item">
                    <div className="Messages__incoming-text-content">
                      <div className="Messages__incoming-text-description">
                        <p>Me: Can you please grow?</p>
                        <p>Hair: Nah..!</p>
                        <p>Muscle: Nope..!!</p>
                        <p>Salary: Don't even dream..!!!</p>
                        <p>Stomach: Anything for you dear..</p>
                      </div>
                      <div className="Messages__incoming-text-date">
                        <span>7:24 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Messages__sedding">
                <div className="Messages__sedding-items">
                  <div className="Messages__sedding-item">
                    <div className="Messages__sedding-item-content">
                      <div className="Messages__sedding-item-description">
                        <p>
                          Haha, this joke is hilarious. Is it what your heart feel
                          about the salary?
                        </p>
                      </div>
                      <div className="Messages__sedding-item-date">
                        <span>7:57 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="Messages__sedding-item">
                    <div className="Messages__sedding-item-content">
                      <div className="Messages__sedding-item-description">
                        <p>
                          Anyways, I am working on something that you would like
                          to know. This project is based on angular js and you are
                          the keeda in it. I need you help in it.
                        </p>
                      </div>
                      <div className="Messages__sedding-item-date">
                        <span>7:59 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Chat___description-send-message">
            <div className="Add-files"> 
              <FontAwesomeIcon icon={faPaperclip}  onClick={Open}></FontAwesomeIcon>
              <input type="file" id="download-file" ref={input}/>
            </div>
            <div className="Message-text">
              <input type="text" placeholder="Type Something" />
            </div>
            <div className="Other">
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </div>
          </div>
        </section>
      </Dashboard>
    )
}

export default Chat