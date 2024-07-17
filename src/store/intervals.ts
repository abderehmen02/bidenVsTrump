import {create} from "zustand"


interface Intervals {
    updatingCountriesVotesInterval : NodeJS.Timeout | null,
    setUpdatingCountriesVotesInterval : (timeout : NodeJS.Timeout)=>void ,
    getCountriesTimeout : NodeJS.Timeout | null ,
    setGetCountriesTimeout : (timeout : NodeJS.Timeout)=>void ,
    addingVote : boolean ,
    setAddingVote : (val : boolean)=>void
}


export const useTimeoutStores = create<Intervals>((set)=>{
return ({
    addingVote : false ,
    setAddingVote : (val)=>set({addingVote : val}) ,
    getCountriesTimeout : null ,
    setGetCountriesTimeout : (timeout)=>set({getCountriesTimeout : timeout}) ,
    updatingCountriesVotesInterval : null ,
    setUpdatingCountriesVotesInterval : (interval)=>set({updatingCountriesVotesInterval : interval})
})
})







