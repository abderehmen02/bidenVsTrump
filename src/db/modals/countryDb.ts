import mongoose , {model , mongo, ObjectId, Schema} from "mongoose";









export  type  CountryInfoDb = {
    _id : ObjectId ,
    countrySymbol : string ,
    biden : number ,
    trump : number
}


const CountrySchema = new mongoose.Schema<CountryInfoDb>({
    countrySymbol : {type : String  , required : true , unique : true} ,
    biden : {type : Number  , default : 0} ,
    trump : {type : Number  , default : 0} ,
   });
  
export const CountryModal  = ()=>{
    return mongoose.models?.countries || model<CountryInfoDb>("countries", CountrySchema)
}




