import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
    request:Request
){
    try{
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const {
            name,
            image
        } = body;
        if(!currentUser?.id){
            return new NextResponse('Unathorized',{ status: 401});

        }

        const updateUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                image: image,
                name: name
            }
        });
        return NextResponse.json(updateUser);

    } catch(error: any){
        console.log(error, 'error_setting')
        return new NextResponse('Internal Error', {status: 500});
        
    }
}