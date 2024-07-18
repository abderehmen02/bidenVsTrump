import {create} from "zustand"


interface MyVotesStore {
    trump : number ,
    biden : number ,
    increaseTrump : ()=>void ,
    increaseBiden : ()=>void ,
    setTrumAndBiden : (data  : {trump : number  , biden : number})=>void
}


export const useMyVotesStore = create<MyVotesStore>((set)=>({
biden : 0 ,
trump : 0 ,
increaseBiden : ()=>set((data)=>({...data , biden : data.biden + 1})) ,
increaseTrump : ()=>set((data)=>({...data , trump : data.trump + 1})) , 
setTrumAndBiden : (data)=>set({...data})
}))



