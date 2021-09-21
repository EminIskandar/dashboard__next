 
import {CHANGE_NAV_NUMBER } from './actionTypes' 
import { Store } from '../interfaces';
 
const INITIAL_STATE : Store = { 
    activeNumb: 7
}

 export default function reducer (state = INITIAL_STATE ,action : any){
    switch (action.type) {   
        case  CHANGE_NAV_NUMBER:
            return { 
                ...state,
                activeNumb: action.payload 
            } 
         default: return state;
    }
 } 
 