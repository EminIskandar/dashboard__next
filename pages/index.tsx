import React from 'react'
import type { NextPage } from 'next'
import { Index } from './../components';

//component
import Login from './login'; 

const Home: NextPage = () => {
    return (
        <Index title={'Deepor - Login'}> 
            <Login/>
        </Index>
    )
}

export default Home