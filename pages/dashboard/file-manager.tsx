import React from 'react'
import { Dashboard } from '../../components'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowLeft, faEllipsisH, faFileDownload, faFileUpload, faFolder, faLink, faSearch } from "@fortawesome/free-solid-svg-icons";
import {CHANGE_NAV_NUMBER } from '../../store/actionTypes'
import store from '../../store/store'
import type { NextPage } from 'next'


//img
import img1 from './../../assets/img/gallery/img1.jpg'
import img2 from './../../assets/img/gallery/img2.jpg'
import img3 from './../../assets/img/gallery/img3.jpg'
import img4 from './../../assets/img/gallery/img4.jpg'
import img5 from './../../assets/img/gallery/img5.jpg'
import img6 from './../../assets/img/gallery/img6.jpg'

const FileManager : NextPage = () => {

    const  menu = React.useRef<HTMLElement>(null)
    const fileList = React.useRef<HTMLElement>(null)
    const table = React.useRef<HTMLTableElement>(null)

    React.useEffect(() => {
        store.dispatch({ 
            type: CHANGE_NAV_NUMBER,
            payload: 6
        })
    })

    React.useEffect(() => {

        window.addEventListener("resize", resize);
    
        return () => {
            window.removeEventListener("resize", resize);
        }
    })

    const openClose = ()=>{ 

        var width = window.innerWidth; 
        if(menu.current !== null && fileList.current !== null && table.current !== null){
            if ( menu.current.style.width === '200px') {
                if (width < 966) {
                    menu.current.style.width = "0px";
                    fileList.current.style.width = "996px";
                    table.current.style.width = "996px";
                } else {
                    menu.current.style.width = "0px";
                    fileList.current.style.width = "100vw";
                    table.current.style.width = "100vw";
                } 
            } else { 
                menu.current.style.width = "width: 200px";
                fileList.current.setAttribute('style', '')
                table.current.setAttribute('style', '')
            }
        }
    }
    const Close = ()=>{ 
        if(menu.current !== null){
            menu.current.setAttribute('style', '')
        }
    }
    const resize = ()=>{ 
        if(menu.current !== null && fileList.current !== null && table.current !== null){
            var width = window.innerWidth;
            if (width < 996) {
                menu.current.style.width = "0px";
                fileList.current.style.width  = "996px";
                table.current.style.width  = "996px";
            } else {
                menu.current.style.width  = "0px";
                fileList.current.style.width  = "100vw";
                table.current.style.width  = "100vw";
            }
        }
    }


    return (
        <Dashboard classname={"File-manager__content"} id={'file-manage'}title={'Deepor | File Manager'} index={6}>
            <section className="File-manager__menu" style={{width : '200px'}} ref={menu}>
                <ul>
                    <li className="close" onClick={Close}>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    </li>
                    <li>All Files</li>
                    <li>Recent Files</li>
                    <li>Folders</li>
                    <li>Audio</li>
                    <li>Video</li>
                    <li>Deletd Files</li>
                </ul>
            <div className="upload-btnu">
            <button>File Upload</button>
            </div>
            <div className="new-folder-btn">
            <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
            <button type="button">New Folder</button>
            </div>
        </section>
            <section className="File-manager__files"  ref={fileList}>
            <div className="Files__header">
            <div className="Files__menu-and-search-btn">
                <div className="menu-btn" onClick={openClose}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>
                <div className="search-btn">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </div>
            </div>
            <div className="Files__title">
                <h3>File Manager</h3>
            </div>
            <div className="Files__upload-and-view">
                <div className="Files__upload-btn">
                <FontAwesomeIcon icon={faFileUpload}></FontAwesomeIcon>
                </div>
                <div className="Files__change-view">
                <div className="column">
                    <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                </div>
                <div className="row">
                    <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="Files__items">
            <table style={{width: '100vw'}} ref={table}>
                <thead>
                <tr className="tr">
                    <td>Name</td>
                    <td>Modified</td>
                    <td>Size</td>
                    <td>Type</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <div className="Files__images">
                        <div className="Files__images-item">
                        <Image  src={img1} alt="" />
                        </div>
                        <p>landscape_2015_011</p>
                    </div>
                    </td>
                    <td>20/11/2015 08:32</td>
                    <td>24,555 KB</td>
                    <td>JPG File</td>
                    <td>
                    <ul className="Files__buttons">
                        <li><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="Files__images">
                        <div className="Files__images-item">
                        <Image  src={img2} alt="" />
                        </div>
                        <p>Flower_485654.jpg</p>
                    </div>
                    </td>
                    <td>20/11/2015 10:11</td>
                    <td>20,147 KB</td>
                    <td>JPG File</td>
                    <td>
                    <ul className="Files__buttons">
                        <li><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="Files__images">
                        <div className="Files__images-item">
                        <Image  src={img3} alt="" />
                        </div>
                        <p>landscape_4887.jpg</p>
                    </div>
                    </td>
                    <td>20/11/2015 10:11</td>
                    <td>15,781 KB</td>
                    <td>JPG File</td>
                    <td>
                    <ul className="Files__buttons">
                        <li><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="Files__images">
                        <div className="Files__images-item">
                        <Image  src={img4} alt="" />
                        </div>
                        <p>Flower_488589.jpg</p>
                    </div>
                    </td>
                    <td>02/12/2015 12:01</td>
                    <td>17,014 KB</td>
                    <td>JPG File</td>
                    <td>
                    <ul className="Files__buttons">
                        <li><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="Files__images">
                        <div className="Files__images-item">
                        <Image  src={img5} alt="" />
                        </div>
                        <p>Girl_img_4.jpg</p>
                    </div>
                    </td>
                    <td>10/11/2017 19:11</td>
                    <td>19,425 KB</td>
                    <td>JPG File</td>
                    <td>
                    <ul className="Files__buttons">
                        <li><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="Files__images">
                        <div className="Files__images-item">
                        <Image  src={img6} alt="" />
                        </div>
                        <p>landscape_2.jpg</p>
                    </div>
                    </td>
                    <td>10/11/2017 19:11</td>
                    <td>10,189 KB</td>
                    <td>JPG File</td>
                    <td>
                    <ul className="Files__buttons">
                        <li><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></li>
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </section>
        </Dashboard>
    )
}

export default FileManager