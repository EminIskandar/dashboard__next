
import Link from 'next/link'
import {Index} from '../components';
import type { NextPage } from 'next'

const SingUp : NextPage = () => {
     
    return (
        <Index title={'Deepor | Sign up'}>
            <section className="SingUp">
                <div className="Video-info">
                <div className="Video-info__content">
                    <div className="Video-info__item">
                    <div className="Video-info__text">
                        <h1>Enjoy unlimited beautiful display content area</h1>
                        <p>
                        The passage experienced a surge in popularity during the 1960s
                        when Letraset used it on their dry-transfer sheets, and again
                        during the 90s as desktop publishers bundled the text with their
                        software.
                        </p>
                        <div className="Play-btn">
                        <button className="btn">
                            <img src="../assets/img/play-button.png" alt=""/>
                        </button>
                        <p>How it works ?</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="Form">
                <div className="Form__content">
                    <form action="" className="Form__items">
                    <div className="Form__title">
                        <h1>Sign up for free</h1>
                        <h6>Create your account and start your free trial today</h6>
                    </div>
                    <div className="Form__elements">
                        <div className="Name">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        </div>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <div className="Form__radio">
                        <input type="checkbox" />
                        <span
                            >I have read and agree to the<span>term and conditions</span>
                        </span>
                        </div>
                        <button type="button">Register</button>
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
                        <p>Already have an account?</p>
                        <Link href="/login">
                            <a><p>Login</p></a>
                        </Link>
                    </div>
                    </form>
                </div>
                </div>
            </section>
        </Index>
    )
}
export default SingUp

