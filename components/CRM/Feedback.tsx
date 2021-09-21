import React from 'react'
import Image from 'next/image'

//img
import avatar from './../../assets/img/profile/avatar4.jpg'
import avatar2 from './../../assets/img/profile/avatar2.jpg'
import avatar3 from './../../assets/img/profile/avatar3.jpg'
import avatar4 from './../../assets/img/profile/avatar10.jpg'
import img1 from '../../assets/img/gallery/img7.jpg'
import img2 from '../../assets/img/gallery/img3.jpg'
import img3 from '../../assets/img/gallery/img2.jpg'

export default function CRM_Feeadback() {
    return (
        <div className="Feedback-and-activity">
            <div className="Feedback">
              <div className="Feedback__text">
                <p>
                  Very easy to use. Thanks to design, we've just launched our
                  5th website! Thank you for making it painless, pleasant and
                  most of all hassle free! Just what I was looking for.
                </p>
              </div>
              <div className="Feedback__Author">
                <div className="Author__image-item">
                  <Image src={avatar} alt="" />
                </div>
                <div className="Author__info">
                  <h3>Eziquiel Merideth</h3>
                  <p>Sales Executive, Media</p>
                </div>
              </div>
            </div>
            <div className="Activity">
              <div className="Activity__header">
                <h3>Recent Activity</h3>
                <div className="Activity__setting">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="Activity__items">
                <div className="Activity__item">
                  <div className="Activity__item-content">
                    <div className="Activity__profile-image">
                      <Image src={avatar2} alt="" />
                    </div>
                    <div className="Activity__info">
                      <h1>
                        Laura Thompson <span>joined josh groben team.</span>
                      </h1>
                      <p>3 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="Activity__item">
                  <div className="Activity__item-content">
                    <div className="Activity__profile-image">
                      <Image src={avatar3} alt="" />
                    </div>
                    <div className="Activity__info">
                      <h1>Meayme Fletcher <span>liked photos.</span></h1>
                      <p>6 hours ago</p>
                    </div>
                  </div>
                  <div className="Activity__item-description">
                    <div className="Activity__image">
                      <div className="Activity__image-item">
                        <Image src={img1} alt="" />
                      </div>
                    </div>
                    <div className="Activity__image">
                      <div className="Activity__image-item">
                        <Image src={img2} alt="" />
                      </div>
                    </div>
                    <div className="Activity__image">
                      <div className="Activity__image-item">
                        <Image src={img3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Activity__item">
                  <div className="Activity__item-content">
                    <div className="Activity__profile-image">
                      <Image src={avatar4} alt="" />
                    </div>
                    <div className="Activity__info">
                      <h1>
                        Billy Flowers
                        <span>
                          Until recently, the prevailing view assumed lorem
                          ipsum was born as a nonsense text.</span
                        >
                      </h1>
                      <p>32 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
