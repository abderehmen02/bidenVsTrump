// import { connectDB } from "@/db/connect";
// import { NextRequest } from "next/server";


// const errorMessage = (err : unknown) : string =>{
//     return JSON.stringify({
//         error: err
//     })
// }

// export  async  function asyncWrapperApi(
//     fn: ( req :  NextRequest)=>Promise<Response>
//   ): Promise<(req: NextRequest) => Promise<Response | undefined >> {
//     return async function (req: NextRequest) {
//       try {
//         console.log("connecting::::")        
//         await connectDB()
//         const result = await fn(req);
//         return result;
//       } catch (error) {
//         console.error( "error thrown :" ,  error)

//         return new Response(errorMessage(JSON.stringify(error)) , {status : 500})
//       }
//     };
//   }





// export   function asyncWrapperLoger(fn : Function) {
//     return async (...args :any  ) => {
//         try {
//             return await fn(...args);
//         } catch (error) {
//             console.error("An error occurred:", error);
//             return null;
//         }
//     };
// }