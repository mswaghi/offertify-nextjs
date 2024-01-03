import { NextResponse } from "next/server";



const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  

  export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
  }


export const POST = async (req:Request)=>{


try {

    const body = await req.json()
    return NextResponse.json({body},{status:200})
    
} catch (error) {
    console.log(error)
    return NextResponse.json({error:'internal error'},{status:500}) 
}


    

    
}
