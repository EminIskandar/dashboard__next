 

import Image from 'next/image'
import Head from 'next/head'
import {IndexLayout } from './../../interfaces';


//img
import logo from './../../assets/img/logo.png'

export default function Layout({ children,title } : IndexLayout ) {
  return (
    <> 
      <Head>
        <title>{title}</title> 
      </Head>
        <header id="Index">
            <div className="Header__logo" >
                <div className="Header__img"> 
                <Image src={logo} /> 
                </div>
                <h1>Deepor</h1> 
            </div>
            <nav className="Header__nav">
                <a href="/"> Help</a>
                <a href="/"> About Us</a>
            </nav>
        </header>
      <main>{children}</main> 
    </>
  )
} 