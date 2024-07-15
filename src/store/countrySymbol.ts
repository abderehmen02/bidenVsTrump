import { create } from "zustand"

interface CountrySymbolStore {
countrySymbol : string  | undefined,
setCountrySymbol : (symbol : string)=>void
}



export const useCountrySymbolStore = create<CountrySymbolStore>((set)=>{
return ({
    countrySymbol : undefined ,
    setCountrySymbol : (symbol)=>set({countrySymbol : symbol})
})
})





