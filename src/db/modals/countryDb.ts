import mongoose , {model , mongo, ObjectId, Schema} from "mongoose";









export type  CountryInfoDb = {
    _id : ObjectId ,
    countrySymbol : string ,
    bidenVotes : number ,
    trumpVotes : number
}


const CountrySchema = new mongoose.Schema<CountryInfoDb>({
    countrySymbol : {type : String  , required : true} ,
    bidenVotes : {type : Number  , default : 0} ,
    trumpVotes : {type : Number  , default : 0} ,
   });
  
export const CountryModal  = ()=>{
    return mongoose.models?.countries || model<CountryInfoDb>("countries", CountrySchema)
}




