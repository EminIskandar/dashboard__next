import React from 'react'
import Link from 'next/link' 
import Router from 'next/router'
import {Index} from '../components';
import type { NextPage } from 'next'

const Login : NextPage = () => {
 
    const root = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        let interval : NodeJS.Timeout = setInterval(() => {});

        if(root.current !== null){
            const item = root.current.querySelectorAll(".Slider__item"),
                  nav = root.current.querySelectorAll(".nav__dot");
            let intervalItem = 0;

                interval = setInterval(() => {
                    if (intervalItem === 0) {
                        intervalItem++;
                        item[0].classList.remove("Slider__item--fade-in");
                        item[0].classList.add("Slider__item--fade-out");
                        item[1].classList.add("Slider__item--fade-in");
                        item[1].classList.remove("Slider__item--fade-out");
                        nav[1].classList.add("nav__dot--active");
                        nav[0].classList.remove("nav__dot--active");
                    } else if (intervalItem === 1) {
                        intervalItem = 0;
                        item[1].classList.add("Slider__item--fade-out");
                        item[1].classList.remove("Slider__item--fade-in");
                        item[0].classList.remove("Slider__item--fade-out");
                        item[0].classList.add("Slider__item--fade-in");
                        nav[0].classList.add("nav__dot--active");
                        nav[1].classList.remove("nav__dot--active");
                    }
                }, 7000);
        }
         
        return () => {
            clearInterval(interval);
        }
        
    })
 
    return (
        <Index title={'Deepor | Login'}>
            <section className="Login" ref={root}>
                <div className="Slider">
                    <div className="Slider__items">
                        <div className="Slider__item Slider__item--fade-in">
                        <div className="Slider__text">
                            <h1>Understand and look deep into nature.</h1>
                            <p>
                            The purpose of lorem ipsum is to create a natural looking block of
                            text (sentence, paragraph, page, etc.) that doesn't distract from
                            the layout. Again during the 90s as desktop publishers bundled the
                            text with their software.
                            </p>
                        </div>
                        </div>
                        <div className="Slider__item Slider__item--fade-out">
                        <div className="Slider__text">
                            <h1>Experience matters for good applications.</h1>
                            <p>
                            The passage experienced a surge in popularity during the 1960s
                            when Letraset used it on their dry-transfer sheets, and again
                            during the 90s as desktop publishers bundled the text with their
                            software.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="Slider__nav">
                        <div className="nav__dot nav__dot--active"></div>
                        <div className="nav__dot"></div>
                    </div>
                </div>
                <div className="Form">
                    <div className="Form__content">
                        <form action="" className="Form__items">
                        <div className="Form__title">
                            <h1>Welcome Back :)</h1>
                            <h6>Sign in to your account and enjoy unlimited perks.</h6>
                        </div>
                        <div className="Form__elements">
                            <input type="text" placeholder="Email" disabled />
                            <input type="password" placeholder="Password" disabled />
                            <div className="Form__radio">
                            <input type="checkbox" />
                            <span>Keep me logged in</span>
                            </div>
                            <button type="button" onClick={()=> Router.push({pathname: '/dashboard' })}>Login</button> 
                            <p className="Form__log">Having trouble logging in?</p>
                        </div>
                        <div className="Form__or">
                            <p>OR</p>
                        </div>
                        <div className="Form__social">
                            <div className="Face">
                            <div className="Face__icon">
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <button type="button">Login With Facebook</button>
                            </div>
                            <div className="Twit">
                            <div className="Twit__icon">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <button type="button">Login With Twitter</button>
                            </div>
                        </div>
                        <div className="Form__link">
                            <p>Do have an account yet?</p>
                            <Link href="/sign">
                                <a><p>Sing up</p></a>
                            </Link>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        </Index>
    )
}

export default Login
