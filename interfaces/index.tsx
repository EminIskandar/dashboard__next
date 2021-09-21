export interface Store {
    activeNumb : number
}

export interface DashboardLayout{
    children :  any
    title: string
    id : string
    classname : string
    index: number
}

export interface IndexLayout {
    children :  any
    title: string
}

export interface line {
    [key : string ] : number
}
export interface CordinatValues {
    x : number,
    y : number
} 
  