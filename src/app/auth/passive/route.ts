import AtpAgent from "@atproto/api";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { useEffect } from "react";

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(request: NextRequest) {
    const formData = await request.formData();

    const service = formData.get("service") as string;
    const identifier = formData.get("username") as string;
    const password = formData.get("password") as string;

    const agent = new AtpAgent({
        service: service as string,
    });

    const cookieStore = await cookies();

    try {
        await agent.login({
            identifier: identifier as string,
            password: password as string,
        });

        cookieStore.set("atp-accessJwt", agent.session?.accessJwt as string, {
            secure: true,
        });
        cookieStore.set("atp-refreshJwt", agent.session?.refreshJwt as string, {
            secure: true,
        });
        cookieStore.set("atp-handle", agent.session?.handle as string, {
            secure: true,
        });
        cookieStore.set("atp-did", agent.session?.did as string, {
            secure: true,
        });
        cookieStore.set("atp-service", service as string, {
            secure: true,
        });
    } catch (e: any) {
        console.log(e);
        return NextResponse.redirect(
            new URL(`/auth?code=${e.status}`, request.url)
        );
    }

    return NextResponse.redirect(new URL("/", request.url));
}
