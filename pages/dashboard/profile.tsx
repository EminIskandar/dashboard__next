import React from 'react'
import Image from 'next/image'
import { Dashboard } from '../../components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBriefcase, faCalendar, faCheck, faEnvelope, faHeart, faHome, faMapMarkerAlt, faPlus } from "@fortawesome/free-solid-svg-icons"; 
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
import avatar6 from './../../assets/img/profile/avatar6.jpg'
import avatar7 from './../../assets/img/profile/avatar7.jpg'
import bg from './../../assets/img/login-slider/bg2.jpg'
import landscape from './../../assets/img/other/landscape.jpg'
import landscape2 from './../../assets/img/other/landscape.jpg' 
import group1 from './../../assets/img/group/group1.jpg'
import group2 from './../../assets/img/group/group2.jpg'
import group3 from './../../assets/img/group/group3.jpg'
import group4 from './../../assets/img/group/group4.jpg'


const Profile : NextPage = () => {
    React.useEffect(() => {
        store.dispatch({ 
            type: CHANGE_NAV_NUMBER,
            payload: 7
        })
    })

    return (
        <Dashboard classname={"Profile"} id={"Profile"} title={'Deepor | Profile'} index={7}>
            <section className="Short-info">
                <div className="Short-info__content">
                    <div className="Short-info__items">
                        <div className="Short-info__item">
                            <div className="Short-info__left-side">
                                <div className="Short-info__image">
                                   <Image src={avatar1} alt="" />
                                </div>
                                <div className="Short-info__name-and-stat">
                                    <div className="Short-info__name">
                                        <h3>Cecilia Rios</h3>
                                    </div>
                                    <div className="Short-info__follow-stat">
                                        <p><span>124</span> Followers</p>
                                        <p><span>45</span> Following</p>
                                    </div>
                                </div>
                            </div>
                            <div className="Short-info__right-side">
                                <div className="Short-info__email">
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    <span>Message</span>
                                </div>
                                <div className="Short-info__social">
                                    <ul>
                                        <li><i className="fab fa-facebook-f"></i></li>
                                        <li><i className="fab fa-twitter"></i></li>
                                        <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Short-info__nav">
                        <ul>
                        <li>Feed</li>
                        <li>Project</li>
                        <li>Groups</li>
                        <li>Photos</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="Other-info">
                <div className="Other-info__content">
                    <div className="Other-info__left_side">
                    <div className="Post">
                    <div className="Post__header">
                        <div className="Post__author-info">
                        <div className="Author__image">
                           <Image src={avatar2} alt="" />
                        </div>
                        <div className="Author__name-and-sharing-time">
                            <h4>Madelyn Rascon</h4>
                            <time>25 min</time>
                        </div>
                        </div>
                        <div className="Post__setting">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        </div>
                    </div>
                    <div className="Post__description">
                        <div className="Post__description-text">
                        <p>
                            There was that time artists at Sequence opted to
                            hand-Sharpie the lorem ipsum passage on a line of paper bags
                            they designed for Chipotle.
                        </p>
                        </div>
                        <div className="Post__description-website">
                        <div className="Post__description-website-img">
                           <Image src={bg} alt="" />
                        </div>
                        <div className="Post__description-website-text">
                            <h3>Bacon chicken turducken spare ribs.</h3>
                            <p>
                            Of course, we'd be remiss not to include the veritable
                            cadre of lorem ipsum knock offs featuring: Bacon Ipsum,
                            Hipster Ipsum, Corporate Ipsum, Legal Ipsum.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="Post__info">
                        <div className="Number-of-likes">
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        <span>30K</span>
                        </div>
                        <div className="Number-of-comments-and-shares">
                        <p><span>1K</span> comments</p>
                        <p><span>12</span> shares</p>
                        </div>
                    </div>
                    </div>
                    <div className="Post">
                    <div className="Post__header">
                        <div className="Post__author-info">
                        <div className="Author__image">
                           <Image src={avatar3} alt="" />
                        </div>
                        <div className="Author__name-and-sharing-time">
                            <h4>Mitsoku Heid</h4>
                            <time>3hrs</time>
                        </div>
                        </div>
                        <div className="Post__setting">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        </div>
                    </div>
                    <div className="Post__description">
                        <div className="Post__description-text">
                        <p>
                            Not to mention, Cupcake Ipsum, Bob Ross Ipsum (“happy little
                            clouds”), and the furry Cat Ipsum..
                        </p>
                        </div>
                        <div className="Post__description-image">
                        <div className="po-l-p-c-i-img">
                           <Image src={ landscape } alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="Post__info">
                        <div className="Number-of-likes">
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        <span>94</span>
                        </div>
                        <div className="Number-of-comments-and-shares">
                        <p><span>1.5K</span> comments</p>
                        <p><span>18</span> shares</p>
                        </div>
                    </div>
                    <div className="Post_comment">
                        <div className="Post__add-comment-image">
                       <Image src={avatar4} alt="" />
                        </div>
                        <div className="Comment_Author__name-and-sharing-time">
                        <h3>Eziquiel Merideth</h3>
                        <p>
                            So there you have it. The nonsense words unable to fully
                            escape meaning.
                        </p>
                        <div className="Comment_time_and_reply_btn">
                            <span>1hr</span> <a href="/">Reply</a>
                        </div>
                        </div>
                    </div>
                    <div className="Post__add-comment">
                        <div className="Post__add-comment-image">
                       <Image src={avatar1} alt="" />
                        </div>
                        <input type="text" placeholder="Leave a comment" />
                    </div>
                    </div>
                    <div className="Post">
                    <div className="Post__header">
                        <div className="Post__author-info">
                        <div className="Author__image">
                           <Image src={avatar5} alt="" />
                        </div>
                        <div className="Author__name-and-sharing-time">
                            <h4>Johnie Metoyer</h4>
                            <time>11 hrs</time>
                        </div>
                        </div>
                        <div className="Post__setting">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        </div>
                    </div>
                    <div className="Post__description">
                        <div className="Post__description-text">
                        <p>
                            Below are the original Latin passages from which Lorem Ipsum
                            was derived, paired with their 1914 translations by H.
                            Rackham.
                        </p>
                        </div>
                        <div className="Post__description-image">
                        <div className="po-l-p-c-i-img">
                           <Image src={landscape2} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="Post__info">
                        <div className="Number-of-likes">
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        <span>142</span>
                        </div>
                        <div className="Number-of-comments-and-shares">
                        <p><span>751</span> comments</p>
                        <p><span>2</span> shares</p>
                        </div>
                    </div>
                    </div>
                </div>
                    <div className="Other-info__right_side">
                    <div className="Profile-info">
                        <div className="Profile-info__image-and-name">
                        <div className="Profile-info__image">
                       <Image src={avatar1} alt="" />
                        </div>
                        <div className="Profile-info__name">
                        <h1>Cecilia Rios</h1>
                        <p>Business Manager</p>
                        </div>
                    </div>
                        <div className="Profile-info__stat">
                        <ul>
                        <li>
                            <h1>154</h1>
                            <p>Photos</p>
                        </li>
                        <li>
                            <h1>65</h1>
                            <p>Followers</p>
                        </li>
                        <li>
                            <h1>433</h1>
                            <p>Views</p>
                        </li>
                        </ul>
                    </div>
                    <div className="Profile-info__address-and-etc">
                        <ul>
                        <li>
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                            <span>Went to: </span>
                            <p>Oh, Canada</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                            <span>Worked at: </span>
                            <p>Companey</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                            <span>Lives in: </span>
                            <p>San Francisco, CA</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            <span>From: </span>
                            <p>Settle, WA</p>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="You-know">
                        <div className="You-know__header">
                            <p>You know these people ?</p>
                        <div className="You-know__setting">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                        <div className="You-know__items">
                            <div  className="You-know__item" >
                                <div className="You-know__profile">
                                    <div className="You-know__image">
                                       <Image src={avatar}alt="" />
                                    </div>
                                    <div className="You-know__name-and-prof">
                                        <h1>Evie One</h1>
                                        <p>Apple Inc</p>
                                    </div>
                                </div>
                                <div className="You-know__status">
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div  className="You-know__item" >
                                    <div className="You-know__profile">
                                        <div className="You-know__image">
                                           <Image src={avatar1}alt="" />
                                        </div>
                                        <div className="You-know__name-and-prof">
                                            <h1>Clas Masse</h1>
                                            <p>HAncework.com</p>
                                        </div>
                                    </div>
                                    <div className="You-know__status">
                                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    </div>
                            </div>
                            <div  className="You-know__item" >
                                <div className="You-know__profile">
                                    <div className="You-know__image">
                                       <Image src={avatar2}alt="" />
                                    </div>
                                    <div className="You-know__name-and-prof">
                                        <h1>Madelyn</h1>
                                        <p>Godaddy.co.in</p>
                                    </div>
                                </div>
                                <div className="You-know__status">
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div  className="You-know__item" >
                                <div className="You-know__profile">
                                    <div className="You-know__image">
                                       <Image src={avatar3}alt="" />
                                    </div>
                                    <div className="You-know__name-and-prof">
                                        <h1>Mitsoku</h1>
                                        <p>Flipkarp</p>
                                    </div>
                                </div>
                                <div className="You-know__status">
                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div  className="You-know__item" >
                                <div className="You-know__profile">
                                    <div className="You-know__image">
                                       <Image src={avatar4}alt="" />
                                    </div>
                                    <div className="You-know__name-and-prof">
                                        <h1>Eziquiel Merideth</h1>
                                        <p>Paypal</p>
                                    </div>
                                </div>
                                <div className="You-know__status">
                                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div  className="You-know__item" >
                                <div className="You-know__profile">
                                    <div className="You-know__image">
                                       <Image src={avatar5}alt="" />
                                    </div>
                                    <div className="You-know__name-and-prof">
                                        <h1>Johnie Metoye</h1>
                                        <p>Robocon</p>
                                    </div>
                                </div>
                                <div className="You-know__status">
                                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div  className="You-know__item" >
                                <div className="You-know__profile">
                                    <div className="You-know__image">
                                       <Image src={avatar6}alt="" />
                                    </div>
                                    <div className="You-know__name-and-prof">
                                        <h1>Angelic Lauver</h1>
                                        <p>business</p>
                                    </div>
                                </div>
                                <div className="You-know__status">
                                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div  className="You-know__item" >
                                <div className="You-know__profile">
                                    <div className="You-know__image">
                                       <Image src={avatar7}alt="" />
                                    </div>
                                    <div className="You-know__name-and-prof">
                                        <h1>Cecilia Rios</h1>
                                        <p>Zad</p>
                                    </div>
                                </div>
                                <div className="You-know__status">
                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Friends">
                        <div className="Friends__header">
                        <h5>Friends <span>212</span></h5>
                        <a href="/"> View all</a>
                    </div>
                        <div className="Friends__items">
                            <div className="Friends__item" >
                                <div className="Friends__image">
                                   <Image src={avatar} alt="" />
                                </div>
                                <p>Evie One</p>
                            </div>
                            <div className="Friends__item" >
                                <div className="Friends__image">
                                   <Image src={avatar1} alt="" />
                                </div>
                                <p>Clas Masse</p>
                            </div>
                            <div className="Friends__item" >
                                <div className="Friends__image">
                                   <Image src={avatar2} alt="" />
                                </div>
                                <p>Madelyn</p>
                            </div>
                            <div className="Friends__item" >
                                <div className="Friends__image">
                                   <Image src={avatar3} alt="" />
                                </div>
                                <p>Mitsoku</p>
                            </div>
                            <div className="Friends__item" >
                                <div className="Friends__image">
                                   <Image src={avatar4} alt="" />
                                </div>
                                <p>Eziquiel Merideth</p>
                            </div>
                            <div className="Friends__item" >
                                <div className="Friends__image">
                                   <Image src={avatar5} alt="" />
                                </div>
                                <p>Johnie Metoyer</p>
                            </div>
                            <div className="Friends__item" >
                                <div className="Friends__image">
                                   <Image src={avatar6} alt="" />
                                </div>
                                <p>Angelic Lauver</p>
                            </div>
                            <div className="Friends__item" >
                                <div className="Friends__image">
                                   <Image src={avatar7} alt="" />
                                </div>
                                <p>Cecilia Rios</p>
                            </div>
                        </div>
                    </div>
                    <div className="Groups">
                        <div className="Groups__header">
                            <h5>Groups <span>12</span></h5>
                            <a href="/"> View all</a>
                        </div>
                        <div className="Groups__items">
                            <div className="Groups__item" >
                                <div className="Groups__image">
                                   <Image src={group1}alt="" />
                                </div>
                                <div className="Groups__name-and-memb">
                                    <h1>Landscape Group</h1>
                                    <p>1.25K Members</p>
                                </div>
                            </div>
                            <div className="Groups__item" >
                                <div className="Groups__image">
                                   <Image src={group2}alt="" />
                                </div>
                                <div className="Groups__name-and-memb">
                                    <h1>Josh Groben Fanclub</h1>
                                    <p>2M Members</p>
                                </div>
                            </div>
                            <div className="Groups__item" >
                                <div className="Groups__image">
                                   <Image src={group3}alt="" />
                                </div>
                                <div className="Groups__name-and-memb">
                                    <h1>UI/UX Lead</h1>
                                    <p>8K Members</p>
                                </div>
                            </div>
                            <div className="Groups__item" >
                                <div className="Groups__image">
                                   <Image src={group4}alt="" />
                                </div>
                                <div className="Groups__name-and-memb">
                                    <h1>Design Yatra</h1>
                                    <p>14K Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Link">
                        <div className="Link__header">
                            <h5>Links <span>12</span></h5>
                            <a href="/"> View all</a>
                        </div>
                        <div className="Link__items">
                            <div className="Link__item"  >
                                <div className="Link__bg" style={{backgroundColor : '#ED1B60'}} >
                                    <h1>G </h1>
                                </div>
                                <div className="Link__short-info">
                                    <h1>Google.Com</h1>
                                    <p>Google.Com</p>
                                </div>
                            </div>
                            <div className="Link__item"  >
                                <div className="Link__bg" style={{backgroundColor : '#00ACF0'}} >
                                    <h1>I</h1>
                                </div>
                                <div className="Link__short-info">
                                    <h1>Improve Your Business</h1>
                                    <p>yahoo.com</p>
                                </div>
                            </div>
                            <div className="Link__item"  >
                                <div className="Link__bg" style={{backgroundColor : '#22AF47'}} >
                                    <h1>C</h1>
                                </div>
                                <div className="Link__short-info">
                                    <h1>Cast The Cookware</h1>
                                    <p>yahoo.com</p>
                                </div>
                            </div>
                            <div className="Link__item"  >
                                <div className="Link__bg" style={{backgroundColor : '#F83F37'}} >
                                    <h1>T</h1>
                                </div>
                                <div className="Link__short-info">
                                    <h1>The Universe Thought Sds</h1>
                                    <p>facebook.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>  
        </Dashboard>
    )
}

export default Profile