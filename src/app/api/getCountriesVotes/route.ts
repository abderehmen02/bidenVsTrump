import { NextRequest } from 'next/server';
import connectDbPromise from './pathToYourDbConnection';
import CountryModel from './pathToYourCountryModel';

export const GET = async (req: NextRequest) => {
  try {
    await connectDbPromise;
    const countriesVotes = await CountryModel.find();
    
    const response = new Response(JSON.stringify(countriesVotes), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
    
    return response;
  } catch (err) {
    console.log(err);
    return new Response('Internal Server Error', { status: 500 });
  }
};