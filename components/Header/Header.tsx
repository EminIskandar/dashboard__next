import React from 'react'
import  Link  from "next/link";
import Image from 'next/image' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearch,faBell,faUserAlt, faCreditCard, faEnvelope, faCog, faCheck, faCircle, faMinusCircle, faPowerOff } from "@fortawesome/free-solid-svg-icons"; 
import type { Store } from './../../interfaces'
import store from '../../store/store';
declare module 'react-redux' {
    interface DefaultRootState extends Store {}
}
import { useSelector } from 'react-redux';
//img
import logo from './../../assets/img/logo.png'
import avatar from './../../assets/img/profile/avatar1.jpg'
import avatar2 from './../../assets/img/profile/avatar2.jpg' 
export default function Header() {

    const navIndex =  useSelector(state => state.activeNumb) 
    const root = React.useRef<HTMLHeadingElement>(null)  

    React.useEffect(() => {
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    })

    React.useEffect(() => {
        const index : number = navIndex
        if(root.current !== null){
            const  navLink : NodeListOf<HTMLAnchorElement> = root.current.querySelectorAll(".Nav__links a"),
                   navLinks: NodeListOf<HTMLDivElement> = root.current.querySelectorAll(".Nav__links")
            for (var a = 0; a <  navLink.length; a++) {
                navLink[a].classList.remove("u-active");
            }
            for (var i = 0; i <  navLinks.length; i++) {
                navLinks[i].style.display = "none";
            } 
            navLink[index].classList.add("u-active");
        } 
    }) 

    const openNavGroup = (numb : number)=>{ 
        if( root.current !== null){
            const  navLinks: NodeListOf<HTMLDivElement> = root.current.querySelectorAll(".Nav__links")
            for (var m = 0; m < navLinks.length; m++) {
            navLinks[m].style.display = "none";
            }
            navLinks[numb].style.display = "flex"; 
        }
    }; 
    const CloseNavGroup = (numb : number)=>{
        if( root.current !== null){
            const  navLinks: NodeListOf<HTMLDivElement> = root.current.querySelectorAll(".Nav__links")
            for (var m = 0; m < navLinks.length; m++) {
            navLinks[m].style.display = "none";
            }
        }
    };
    const toggleMenu = ()=>{
        if( root.current !== null){
            const nav  = (root.current.querySelector("nav") as HTMLElement);
            if (nav.style.display === "block") {
            nav.style.display = "none"; 
            } else {
            nav.style.display = "block"; 
            }
        }
    };
    const openCloseNotification = ()=>{
        if( root.current !== null){
            const notificationBar =  (root.current.querySelector(".Notification__block") as HTMLDivElement)
            if (notificationBar.style.display ===  "block" ) {
            notificationBar.style.display = "none"; 
            } else if(notificationBar.style.display ===  "none") {
            notificationBar.style.display = "block"; 
            }
        }
    };
    const openCloseProfileInfo =  ()=>{
        if( root.current !== null){
            const profileSetting = (root.current.querySelector(".Profile__setting") as HTMLDivElement)
            if (profileSetting.style.display === "block") {
            profileSetting.style.display = "none"; 
            } else {
            profileSetting.style.display = "block"; 
            }
        }
    };
    const openProfileStatus = ()=>{
        if( root.current !== null){
            const proflleStatus = (root.current.querySelector(".Middle-section__sub-link ul") as HTMLUListElement)
            proflleStatus.style.display = "block";
        }
    }; 
    const closeProfileStatus =  ()=>{
        if( root.current !== null){
            const proflleStatus = (root.current.querySelector(".Middle-section__sub-link ul") as HTMLUListElement)
            proflleStatus.style.display = "none";
        }
        
    };
    const resize = ()=>{
        if( root.current !== null){
            const nav  = (root.current.querySelector("nav") as HTMLElement);
            if (window.innerWidth > 1200) {
                nav.style.display = "block";
            } else {
                nav.style.display = "none";
            }
        }
    }

    return (
        <header id="Header" ref={root}>
            <div className="Header__content">
                <div className="Header__left-side">
                <div className="Menu-icon" onClick={toggleMenu}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="Logo">
                    <div className="Logo__img">
                       <Image src={logo} alt="" />
                    </div>
                    <h1>Deepor</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                        <p className="Nav__group-name" onClick={() =>{openNavGroup(0)}} >Dashboard</p>
                        <div className="Nav__links"  onMouseLeave={() =>{CloseNavGroup}}>
                            <Link href="/dashboard/crm"> 
                                <a>CRM</a>
                            </Link>
                            <Link href="/dashboard/project"> 
                                <a>Project</a>
                            </Link>
                            <Link href="/dashboard/statistic"> 
                                <a>Statistics</a>
                            </Link>
                        </div>
                        </li>
                        <li>
                        <p className="Nav__group-name"  onClick={() =>{openNavGroup(1)}}> Application </p>
                        <div className="Nav__links"  onMouseLeave={() =>{CloseNavGroup}}>
                            <Link href="/dashboard/chat"> 
                                <a>Chat</a>
                            </Link>
                            <Link href="/dashboard/calendar"> 
                                <a>Calendar</a>
                            </Link>
                            <Link href="/dashboard/email"> 
                                <a>Email</a>
                            </Link>
                            <Link href="/dashboard/file-manager"> 
                                <a>File Manger</a>
                            </Link>
                        </div>
                        </li>
                        <li>
                        <p className="Nav__group-name" onClick={() =>{openNavGroup(2)}} >Pages</p>
                        <div className="Nav__links"  onMouseLeave={() =>{CloseNavGroup}}>
                            <Link href="/dashboard/profile" > 
                                <a>Profile</a>
                            </Link>
                            <Link href="/dashboard/invoice">  
                                <a>Invoice</a>
                            </Link>
                            <Link href="/dashboard/gallery">  
                                <a>Gallery</a>
                            </Link>
                            <Link href="/dashboard/activity">  
                                <a>Activity</a>
                            </Link>
                            <Link href="/dashboard/faq"> 
                                <a>Faq</a>
                            </Link>
                        </div>
                        </li>
                        <li>
                        <div className="Nav__search">
                            <div className="icon">
                            <button> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                            <input type="text" placeholder="Search" />
                            </div>
                        </div>
                        </li>
                    </ul>
                </nav>
            </div>
                <div className="Header__right-side">
                <div className="Search">
                    <div className="Search__block">
                        <button> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="Notification">
                <div className="Notification__icon" onClick={openCloseNotification}>
                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                </div>
                <div className="Notification__block" style ={{display : 'none'}}>
                    <div className="Notification__header">
                        <p>Notifications</p>
                        <a href="/">View all</a>
                    </div>
                    <div className="Notification__content">
                        <div className="Notification__items">
                            <div className="Notification__item">
                            <div className="Account-image">
                               <Image src={avatar} alt="" />
                            </div>
                            <div className="Message">
                                <p>
                                <span>Evte Ono</span> Accepted Your Inivitation to join the team
                                </p>
                            </div>
                            <div className="Time">
                                <p>12m</p>
                            </div>
                            </div>
                            <div className="Notification__item">
                            <div className="Account-image">
                               <Image src={avatar2} alt="" />
                            </div>
                            <div className="Message">
                                <p>New Message received from <span>Misuko Heid</span></p>
                            </div>
                            <div className="Time">
                                <p>12m</p>
                            </div>
                            </div>
                            <div className="Notification__item">
                            <div className="Account-empty-image" style={{backgroundColor: '#d8f2fc'}} > 
                                <FontAwesomeIcon icon={faUserAlt} style={{color: '#00ACF0'}}></FontAwesomeIcon>
                            </div>
                            <div className="Message">
                                <p>
                                You have a follow up with Deepor Head on Friday,Dec 19 at
                                10:00 am
                                </p>
                            </div>
                            <div className="Time">
                                <p>12m</p>
                            </div>
                            </div>
                            <div className="Notification__item">
                            <div className="Account-empty-image" style={{backgroundColor: '#DDF3E3'}} >
                                <p style={{color:'#22AF47'}}>A</p>
                            </div>
                            <div className="Message">
                                <p>
                                You have a follow up with Deepor Head on Friday,Dec 19 at
                                10:00 am
                                </p>
                            </div>
                            <div className="Time">
                                <p>12m</p>
                            </div>
                            </div>
                            <div className="Notification__item">
                            <div className="Account-empty-image" style={{backgroundColor: '#FFF5E0'}} > 
                                <FontAwesomeIcon icon={faBell} style={{color:'#FFBF36'}}></FontAwesomeIcon>
                            </div>
                            <div className="Message">
                                <p>Last 2 days left for the project</p>
                            </div>
                            <div className="Time">
                                <p>12m</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="Profile">
                <div className="Profile__info" onClick={openCloseProfileInfo}>
                    <div className="Profile__image">
                   <Image src={avatar} alt="" />
                    </div>
                    <div className="Profile__name">
                    <h1>Cecilia Rios</h1>
                    </div>
                </div>
                <div className="Profile__setting" style={{display:'none'}}>
                    <div className="Top-section">
                    <ul>
                        <li> 
                        <a href="/"><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>Profile</a>
                        </li>
                        <li>
                        <a href="/"><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>My balance</a>
                        </li>
                        <li>
                        <a href="/"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Inbox</a>
                        </li>
                        <li>
                        <a href="/"><FontAwesomeIcon icon={faCog}></FontAwesomeIcon>Setting</a>
                        </li>
                    </ul>
                    </div>
                    <div className="Middle-section">
                    <a href="/" className="open--profile" onMouseOver={openProfileStatus}>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Online</a >
                    <div className="Middle-section__sub-link">
                        <ul   onMouseLeave={closeProfileStatus} >
                        <li>
                        <a href="/"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Online</a >
                        </li>
                        <li>
                        <a href="/"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>Busy</a >
                        </li>
                        <li>
                        <a href="/"><FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>Offline</a >
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="Bottom-section">
                    <a href="/"><FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>Log out</a >
                    </div>
                </div>
                </div>
            </div>
            </div>
        </header>
    )
}
