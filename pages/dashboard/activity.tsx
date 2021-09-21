import React  from 'react'
import { Dashboard } from '../../components'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHeart, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'

//img
import avatar from './../../assets/img/profile/avatar.jpg'
import avatar2 from './../../assets/img/profile/avatar2.jpg'
import avatar3 from './../../assets/img/profile/avatar3.jpg'
import avatar4 from './../../assets/img/profile/avatar4.jpg'
import avatar5 from './../../assets/img/profile/avatar5.jpg'
import avatar7 from './../../assets/img/profile/avatar7.jpg'
import galery1 from './../../assets/img/gallery/img1.jpg'
import galery2 from './../../assets/img/gallery/img2.jpg'
import galery3 from './../../assets/img/gallery/img3.jpg'
import galery4 from './../../assets/img/gallery/img4.jpg'
import galery7 from './../../assets/img/gallery/img7.jpg' 

const Activity :NextPage  = () => { 

  React.useEffect(() => {
      store.dispatch({ 
          type: CHANGE_NAV_NUMBER,
          payload: 10
      })
      console.log('Work!')
  })

  
    return (
        <Dashboard classname={"Activity"} id={"Activity"} title={'Deepor | Activity'} index={10}>
          <section>
            <div className="Activity__header">
            <FontAwesomeIcon icon={faWaveSquare}></FontAwesomeIcon>
              <h1>Activity</h1>
            </div>
            <div className="Activity__items">
              <div className="Activity__item">
                <div className="Activity__item-header">
                  <time>This Week</time>
                </div>
                <div className="Activity__notifications">
                  <div className="Notifications__line"></div>
                  <div className="Notifications__title">
                    <div className="Notifications__image">
                      <Image src={avatar2} alt="" />
                    </div>
                    <div className="Notifications__name-and-time">
                      <h1>Laura Thompson <span>joined josh groben team .</span></h1>
                      <time>3 hours ago</time>
                    </div>
                  </div>
                  <div className="Notifications__description">
                    <div className="Group">
                      <div className="Group__image">
                        <Image src={galery1} alt="" />
                      </div>
                      <div className="Group__name-time-and-memb">
                        <h1>Team Josh Groben</h1>
                        <p>A fan club for josh groben songs</p>
                        <div className="Group__memb">
                          <div className="Group__memb-items">
                            <div className="Group__memb-image">
                              <Image src={avatar3} alt="" />
                            </div>
                            <div className="Group__memb-image">
                              <Image src={avatar4} alt="" />
                            </div>
                            <div className="Group__memb-image">
                              <Image src={avatar5} alt="" />
                            </div>
                            <div className="Group__number-of-memb">
                              <h1>38+</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Notifications__join-btn">
                    <p><span> 7,120 </span>Members (38 new)</p>
                    <button>Join</button>
                  </div>
                </div>
                <div className="Activity__notifications">
                  <div className="Notifications__line"></div>
                  <div className="Notifications__title">
                    <div className="Notifications__image">
                      <Image src={avatar3} alt="" />
                    </div>
                    <div className="Notifications__name-and-time">
                      <h1>Meayme Fletcher <span>liked photos.</span></h1>
                      <time>6 hours ago</time>
                    </div>
                  </div>
                  <div className="Notifications__description">
                    <div className="Images">
                      <div className="Images__item">
                        <div className="Images__item-img">
                          <Image src={galery2} alt="" />
                        </div>
                        <div className="Images__number-of-likes">
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          <span>42</span>
                        </div>
                      </div>
                      <div className="Images__item">
                        <div className="Images__item-img">
                          <Image src={galery7} alt="" />
                        </div>
                        <div className="Images__number-of-likes">
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          <span>59</span>
                        </div>
                      </div>
                      <div className="Images__item">
                        <div className="Images__item-img">
                          <Image src={galery3} alt="" />
                        </div>
                        <div className="Images__number-of-likes">
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          <span>101</span>
                        </div>
                      </div>
                      <div className="Images__item">
                        <div className="Images__item-img">
                          <Image src={galery4} alt="" />
                        </div>
                        <div className="Images__number-of-likes">
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          <span>30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Activity__notifications">
                  <div className="Notifications__line"></div>
                  <div className="Notifications__title">
                    <div className="Notifications__image">
                      <Image src={avatar} alt="" />
                    </div>
                    <div className="Notifications__name-and-time">
                      <h1>
                        Billy Flowers
                        <span
                          >lipsum as it is sometimes known, is dummy text used in
                          laying out print, graphic or web designs. The passage is
                          attributed to an unknown typesetter in the 15th century
                          who is thought to have scrambled.</span
                        >
                      </h1>
                      <time>1 days ago</time>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Activity__item">
                <div className="Activity__item-header">
                  <time>This Month</time>
                </div>
                <div className="Activity__notifications">
                  <div className="Notifications__line"></div>
                  <div className="Notifications__title">
                    <div className="Notifications__image">
                      <Image src={avatar7} alt="" />
                    </div>
                    <div className="Notifications__name-and-time">
                      <h1>
                        Cecilia Rios
                        <span
                          >Until recently, the prevailing view assumed lorem ipsum
                          was born as a nonsense text..</span
                        >
                      </h1>
                      <time>10 days ago</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Dashboard>
    )
}

export default Activity
