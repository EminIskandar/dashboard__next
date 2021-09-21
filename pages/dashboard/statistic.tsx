import React from 'react'
import { Dashboard, Audience, Device, DeviceStat, 
         Info, Sales, StatisticTable } from '../../components'

import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'

const Statistic : NextPage = () => {

    React.useEffect(() => {
        store.dispatch({ 
            type: CHANGE_NAV_NUMBER,
            payload: 2
        })
    })

    
    return (
        <Dashboard classname={"Statistic"} id={"Statistic"} title={'Deepor | Statistic'} index={2}>
            <section className="Statistic__chart">
                <div className="Statistic__chart-left-items">
                    <Info/>
                    <div className="Chart__device-type-and-sales">
                        <Device/>
                        <Sales/>
                    </div>
                </div>
                <div className="Statistic__chart-right-items">
                    <Audience/>
                    <DeviceStat/>
                </div> 
            </section>
            <StatisticTable/>
        </Dashboard>
    )
}

export default Statistic