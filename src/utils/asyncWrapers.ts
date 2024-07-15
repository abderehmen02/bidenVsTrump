import { connectDbPromise } from "@/db/connect";
import { NextRequest } from "next/server";


const errorMessage = (err : unknown) : string =>{
    return JSON.stringify({
        error: err
    })
}

export function asyncWrapperApi(
    fn: ( req :  NextRequest)=>Promise<Response>
  ): (req: NextRequest) => Promise<Response | undefined > {
    return async function (req: NextRequest) {
      try {
        await connectDbPromise
        const result = await fn(req);
        return result;
      } catch (error) {
        console.error( "error thrown :" ,  error)

        return new Response(errorMessage(JSON.stringify(error)) , {status : 500})
      }
    };
  }
