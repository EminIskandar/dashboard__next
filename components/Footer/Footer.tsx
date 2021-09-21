import React from 'react'
import type { NextPage } from 'next'

const Footer : NextPage = () => {
    return (
        <footer id="Footer">
            <div className="Footer__items">
                <div className="Footer__left-side">
                    <h1>Deepor © 2019</h1>
                </div>
                <div className="Footer__right-side">
                    <h1>Follow us</h1>
                    <ul>
                    <li><i className="fab fa-facebook-f" aria-hidden="true"></i></li>
                    <li><i className="fab fa-twitter" aria-hidden="true"></i></li>
                    <li><i className="fab fa-instagram" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer