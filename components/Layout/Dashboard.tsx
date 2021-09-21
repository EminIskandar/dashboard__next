 
import Head from 'next/head' 
import {DashboardLayout } from './../../interfaces';

//component
import Header from './../Header/Header'
import Footer from './../Footer/Footer'

const Layout = ({ children, title,id, classname, index } : DashboardLayout) => { 

  return (
    <> 
      <Head>
        <title>{title}</title> 
      </Head>
      <Header/>
      <main id={id} className={classname}>{children}</main> 
      { index === 3 || index === 4 || index === 5 ? '': <Footer/> }
    </>
  )
} 

export default Layout