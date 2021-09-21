import React from 'react'
import { Dashboard, Adwords, CountryStat, Feedback, 
            CRMShort, Stock, CRMTable } from '../../components'
import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'

const CRM : NextPage = () => {

    React.useEffect(() => {
        store.dispatch({ 
            type: CHANGE_NAV_NUMBER,
            payload: 0
        })
    })

    return (
         <Dashboard classname={"CRM"} id={"CRM"} title={'Deepor | CRM'} index={0}> 
            <CRMShort/> 
            <section className="CRM__chart">
                <div className="CRM__chart-top-items"> 
                    <Adwords/>
                    <Stock/>
                </div>
                <div className="CRM__chart-bottom-tems">
                    <CountryStat/>
                    <Feedback/>
                </div>
            </section>
            <CRMTable/>
         </Dashboard>
    )
}

export default CRM