import React from 'react'

export default function CRM_short_chart() {
    return (
        <section className="CRM__short-stat">
            <div className="CRM__short-stat-items">
            <div className="CRM__short-stat-item">
                <div className="Short-stat-item__header">
                <h3>Users</h3>
                <span className="status--good">+10%</span>
                </div>
                <div className="Short-stat-item__value">
                <h2>36.1K</h2>
                <span>172,458 Target Users</span>
                </div>
            </div>
            <div className="CRM__short-stat-item">
                <div className="Short-stat-item__header">
                <h3>Campaign Leads</h3>
                <span className="status--good">+12.5%</span>
                </div>
                <div className="Short-stat-item__value">
                <h2>168,856</h2>
                <span>472,458 Targeted</span>
                </div>
            </div>
            <div className="CRM__short-stat-item">
                <div className="Short-stat-item__header">
                <h3>New Contacts</h3>
                <span className="status--normal">-2.8%</span>
                </div>
                <div className="Short-stat-item__value">
                <h2>73</h2>
                <span>100 Targeted</span>
                </div>
            </div>
            <div className="CRM__short-stat-item">
                <div className="Short-stat-item__header">
                <h3>Win/Loss Ratio</h3>
                <span className="status--bad">-75%</span>
                </div>
                <div className="Short-stat-item__value">
                <h2>48:65</h2>
                <span>42:32 Targeted</span>
                </div>
            </div>
            </div>
        </section>
    )
}
