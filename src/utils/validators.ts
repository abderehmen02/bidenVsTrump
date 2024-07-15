import { Candidates } from "@/app/api/addVote/route"
import {z} from "zod"




export const addVoteValidator = z.object({
    candidate : z.nativeEnum(Candidates) ,
    countrySymbol : z.string() ,
})