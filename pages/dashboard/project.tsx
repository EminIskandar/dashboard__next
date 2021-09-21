import React from 'react'
import { Dashboard, LeadStat, Marketing, Risk, 
         SheetStat, ProjectShort, StockAnalysis, 
         ProjectTable } from '../../components'
import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'

const Project: NextPage = () => {

    React.useEffect(() => {
        store.dispatch({ 
            type: CHANGE_NAV_NUMBER,
            payload: 1
        })
    })


    return (
        <Dashboard classname={"Project"} id={"Project"} title={'Deepor | Project'} index={1}>
            <ProjectShort/>
            <section className="Project__chart">
                <div className="Project__chart-top-items">
                    <StockAnalysis/>
                    <LeadStat/>
                </div>
                <div className="Project__chart-bottom-items">
                    <SheetStat/>
                    <Risk/>
                    <Marketing/>
                </div>
            </section>
            <ProjectTable/>
        </Dashboard>
    )
}

export default Project