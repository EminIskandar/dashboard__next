import React from 'react'
import { Dashboard } from '../../components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowLeft, faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'

const Calendar : NextPage = () => {
       
    React.useEffect(() => {
        store.dispatch({ 
            type: CHANGE_NAV_NUMBER,
            payload: 4
        })
    })
    return (
        <Dashboard classname={"Calendar"} id={"Calendar"} title={'Deepor | Calendar'} index={4}>
            <section>
                <div className="Calendar__header">
                    <div className="Calendar__note-list">
                    <div className="close-btn"  >
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    </div>
                    <ul>
                        <li>
                        <h5>Envy Meet</h5>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </li>
                        <li>
                        <h5>Ted Talk</h5>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </li>
                        <li>
                        <h5>Uk Conference</h5>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </li>
                        <li>
                        <h5>Team Lunch</h5>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </li>
                        <li>
                        <h5>UX Meetup</h5>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </li>
                    </ul>
                    <div className="remove-btn">
                        <input type="checkbox" />
                        <span>Remove after drop</span>
                    </div>
                    <div className="add-btn">
                        <button type="button">Add Event</button>
                    </div>
                </div>
                    <div className="Calendar__buttons">
                    <div className="Menu-btn" >
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                    <div className="Today-btn">
                    <button type="button" >
                        Today
                    </button>
                    </div>
                </div>
                    <div className="Calendar__date">
                    <div className="Arrow-btn">
                    <button type="button"  >
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                    </button>
                    </div>
                    <div className="Date_content">
                    <h1>December</h1>
                    <span>2020</span>
                    </div>
                    <div className="Arrow-btn">
                    <button type="button"  >
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                    </button>
                    </div>
                </div>
                    <div className="Calendar__filter-btn">
                    <div className="Filter__month-btn">
                    <button type="button" className="active"   >
                        Month
                    </button>
                    </div>
                    <div className="Filter__week-btn">
                    <button type="button"    >
                        Week
                    </button>
                    </div>
                    <div className="Filter__day-btn">
                    <button type="button"    >
                        Day
                    </button>
                    </div>
                    <div className="Filter__list-btn">
                    <button type="button"  >
                        List
                    </button>
                    </div>
                </div>
                </div>
                <div className="Calendar__content">                  
                    <table className="month">
                        <thead>
                            <tr>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                            <td>Sun</td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                        </tr>
                            <tr>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                        </tr>
                            <tr>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                        </tr>
                            <tr>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                        </tr>
                            <tr>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                        </tr>
                            <tr>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                            <td><p>1</p></td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="week" style={{display: 'none'}}>
                    <thead>
                        <tr>
                        <td></td>
                        <td>Mon 11/30</td>
                        <td>Tue 12/1</td>
                        <td>Wed 12/2</td>
                        <td>Thu 12/3</td>
                        <td>Fri 12/4</td>
                        <td>Sat 12/5</td>
                        <td>Sun 11/29</td>
                    </tr>
                        <tr>
                        <td>all-days</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>12am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>1am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>2am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>3am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>4am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>5am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>6am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>7am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>8am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>9am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>10am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>11am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>12pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>1pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>2pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>3pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>4pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>5pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>6pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>7pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>8pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>9pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>10pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>11pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                    <table className="day"  style={{display: 'none'}}>
                    <thead>
                        <tr>
                        <td></td>
                        <td>Sunday</td>
                    </tr>
                        <tr>
                        <td>all-days</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>12am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>1am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>2am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>3am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>4am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>5am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>6am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>7am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>8am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>9am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>10am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>11am</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>12pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>1pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>2pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>3pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>4pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>5pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>6pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>7pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>8pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>9pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>10pm</td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>11pm</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                    <table className="list" style={{display: 'none'}}>
                        <thead className="list-item">
                            <tr>
                                <td> <p>No events to display </p></td> 
                            </tr>
                        </thead>
                    </table>
                </div>

            </section>
        </Dashboard>
    )
}

export default Calendar