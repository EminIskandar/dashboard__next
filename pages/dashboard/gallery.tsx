import React from 'react'
import { Dashboard } from '../../components'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowLeft, faArrowRight, faCopy, faExpand, faFileDownload, faLayerGroup, faPlayCircle, faSearchMinus, faSearchPlus, faShareAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
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
import img7 from './../../assets/img/gallery/img7.jpg'
import img8 from './../../assets/img/gallery/img8.jpg'
import img9 from './../../assets/img/gallery/img9.jpg'

const Gallery : NextPage = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
    const numberOfImage = React.useRef<HTMLSpanElement>(null)
    const root = React.useRef<HTMLDivElement>(null)
    const loading = React.useRef<HTMLDivElement>(null)
    const downloadBtn = React.useRef<HTMLAnchorElement>(null)
    const gallery = React.useRef<HTMLAnchorElement>(null)
    
    
    const [src, setSrc] = React.useState<any>(img1); 
    const [zoom, setZoom] = React.useState<number>(1); 
    const [index, setIndex] = React.useState<number>(1);
    const [state, setState] = React.useState<string | null>(null);   
    const [interval, setinterval] = React.useState<NodeJS.Timeout>( setInterval(() => {}));   
    let myAttr = {'state': 'play'}
 
    React.useEffect(() => {
        store.dispatch({ 
            type: CHANGE_NAV_NUMBER,
            payload: 9
        })
    })

    React.useEffect(() => {  
          const imageItem = (document.querySelector('.Image__item') as HTMLDivElement )
          imageItem.setAttribute( 'style' , `transform: scale(${zoom});`);  
    }, [zoom])

    React.useEffect(() => {
      if(numberOfImage.current !== null){
        numberOfImage.current.innerHTML = (index + 1).toString();
        setSrc(images[index])
      }
    }, [index])

    React.useEffect(() => {  
      var timer = 0,
          i = index;  

       if(state === 'play'){ 
          setinterval(
            setInterval(()=>{ 
              timer++; 
              if(loading.current !== null){
                loading.current.style.width = timer + "vw";
              }

              if(timer > 100){
                 timer = 0; 
                 i++
                 setIndex(c=> c + 1)
                 if(loading.current !== null){
                  loading.current.style.width = "0vw"; 
                 }
                 if(i >= 8){ 
                  setState('pause')
                 }
              } 
            }, 40 )
          )
       }else{
          clearInterval(interval) 
       } 
    }, [state])


    const openImage = (index : number)=>{  
      if(gallery.current !== null && numberOfImage.current !== null && downloadBtn.current !== null && root.current !== null){
        numberOfImage.current.innerHTML = (index + 1).toString();
        root.current.style.display = "block"; 
        downloadBtn.current.href = (images[index]).src
        downloadBtn.current.download = `img${index}.jpg`;
        setIndex(index) 
        setSrc(images[index])
      }
    }
    const Close = ()=>{  
      if(root.current !== null && loading.current !== null){
        root.current.style.display = "none";
        loading.current.style.width = "0vw"; 
        setState('pause') 
      }
    }
    const zoomOut = ()=>{
        if (zoom === 1){
            setZoom(1)
        }else{
            setZoom(c => c - 1 )
        } 
    }
    const zoomIn = ()=>{  
        if (zoom === 3){
            setZoom(3)
        }else{
            setZoom(c => c + 1 )
        }  
    }
    const left = ()=>{
        if (index === 0) {
          setIndex(0)
        } else {
            setIndex(c => c - 1)
        }
    }
    const right = ()=>{
        if (index === 8 ) {
            setIndex(8)
        } else {
            setIndex(c => c + 1)
        }
    }
    const fullScreen = ()=>{
        document.body.requestFullscreen();
    }
    const startStop = (e: React.MouseEvent<HTMLLIElement, MouseEvent> & { currentTarget : HTMLLIElement })=>{

        let element = e.currentTarget;
        e.currentTarget.innerHTML = ''

        if(element.attributes[0].value === 'play'){
            element.setAttribute('state','pause')
            e.currentTarget.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause-circle" class="svg-inline--fa fa-pause-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path></svg>`
            setState('play')
        }else if(e.currentTarget.attributes[0].value === 'pause'){
            element.setAttribute('state','play')
            e.currentTarget.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>`
            setState('pause') 
        } 
    }
 
    return (
        <Dashboard classname={"Gallery"} id={"Gallery"} title={'Deepor | Gallery'} index={9}> 
        <section className="Look-at-the-image" ref={root}>
          <div className="Loading" ref={loading}></div>
          <div className="Buttons">
            <div className="Buttons__number-of-image">
              <p><span ref={numberOfImage} >1</span> / <span>9</span></p>
            </div>
            <div className="Buttons__items">
              <ul>
                <li><FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon></li>
                <li><FontAwesomeIcon icon={faCopy}></FontAwesomeIcon></li>
                <li onClick={zoomOut
                }><FontAwesomeIcon icon={faSearchMinus}></FontAwesomeIcon></li>
                <li onClick={zoomIn}><FontAwesomeIcon icon={faSearchPlus}></FontAwesomeIcon></li>
                <li onClick={fullScreen}><FontAwesomeIcon icon={faExpand}></FontAwesomeIcon></li>
                <li onClick={(e)=>{startStop(e)}} {...myAttr} ><FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon></li>
                <li>
                  <a href="/" download="" ref={downloadBtn}> <FontAwesomeIcon icon={faFileDownload} ></FontAwesomeIcon></a>
                </li>
                <li onClick={Close}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></li>
              </ul>
            </div>
          </div>
          <div className="Arrow-btn">
            <div className="Arrow-btn__left"> 
              <FontAwesomeIcon icon={faArrowLeft} onClick={left}></FontAwesomeIcon>
            </div>
            <div className="Arrow-btn__right"> 
              <FontAwesomeIcon icon={faArrowRight} onClick={right}></FontAwesomeIcon>
            </div>
          </div>
          <div className="Image">
            <div className="Image__item">
              <Image src={src} alt="image-item"/>
            </div>
          </div>
        </section>
        <section className="Gallery__content" ref={gallery}>
          <div className="Gallery__header">
          <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
            <h1>Gallery</h1>
          </div>
          <div className="Gallery__items">
            <div className="Gallery__nav">
              <ul>
                <li>Library</li>
                <li>Photos</li>
                <li>Video</li>
                <li>Album</li>
              </ul>
            </div>
            <div className="Gallery__image">
              <div className="Gallery__image-group" >
                <div className="Gallery__image-group-title">
                  <h4> 22 October </h4>
                </div>
                <div className="Gallery__image-group-items" >
                  <div className="Gallery__image-group-item"  onClick={()=>{openImage(0)}} >
                    <Image  src={img1} alt="galery-image" />
                  </div>
                  <div className="Gallery__image-group-item"  onClick={()=>{openImage(1)}} >
                    <Image  src={img2} alt="galery-image" />
                  </div>
                  <div className="Gallery__image-group-item"  onClick={()=>{openImage(2)}} >
                    <Image  src={img3} alt="galery-image" />
                  </div>
                  <div className="Gallery__image-group-item"  onClick={()=>{openImage(3)}} >
                    <Image  src={img4} alt="galery-image" />
                  </div>
                </div>
              </div>
              <div className="Gallery__image-group" >
                <div className="Gallery__image-group-title">
                  <h4> 19 January </h4>
                </div>
                <div className="Gallery__image-group-items">
                  <div className="Gallery__image-group-item"  onClick={()=>{openImage(4)}} >
                    <Image  src={img5} alt="galery-image" />
                  </div>
                  <div className="Gallery__image-group-item"  onClick={()=>{openImage(5)}} >
                    <Image  src={img6} alt="galery-image" />
                  </div>
                  <div className="Gallery__image-group-item"  onClick={()=>{openImage(6)}} >
                    <Image  src={img7} alt="galery-image" />
                  </div>
                  <div className="Gallery__image-group-item"  onClick={()=>{openImage(7)}} >
                    <Image  src={img8} alt="galery-image" />
                  </div>
                </div>
              </div>
              <div className="Gallery__image-group" >
                <div className="Gallery__image-group-title">
                  <h4>  7 February  </h4>
                </div>
                <div className="Gallery__image-group-items">
                  <div className="Gallery__image-group-item"  onClick={()=>{openImage(8)}} >
                    <Image  src={img9} alt="galery-image" />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </section>
      </Dashboard>
    )
}

export default Gallery