import { Candidates } from "@/hooks/useVotes"
import {z} from "zod"




export const addVoteValidator = z.object({
    candidate : z.string() ,
    countrySymbol : z.string() ,
})