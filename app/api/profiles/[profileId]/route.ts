import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { profileId: string } }
){
  try{
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userProfile=await db.profile.findFirst({
      where:{
        id:params.profileId,
      }
    })

    if(!userProfile){
      return new NextResponse("No Profile Found", { status: 400 });
    }

    return NextResponse.json(userProfile);
  }
  catch(error){
    console.log("[Profile_ID_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}