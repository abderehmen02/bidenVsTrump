
import { CountryInfoDb } from "@/db/modals/countryDb"
import {create} from "zustand"


interface CountriesStore {
    countriesVotes : CountryInfoDb[] ,
    setCountriesVotes : (countriesVotes : CountryInfoDb[])=>void
}

export const useCountriesVotesStore = create<CountriesStore>((set)=>({
    countriesVotes : [] ,
    setCountriesVotes : (cVotes)=>set({countriesVotes : cVotes})
}))




