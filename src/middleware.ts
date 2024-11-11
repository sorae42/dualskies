import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const cookieStore = await cookies();

    if (req.nextUrl.pathname === "/") {
        if (
            !cookieStore.get("atp-accessJwt")?.value ||
            !cookieStore.get("atp-refreshJwt")?.value ||
            !cookieStore.get("atp-did")?.value ||
            !cookieStore.get("atp-handle")?.value
        ) {
            return NextResponse.redirect(new URL("/auth", req.url));
        } else {
            return NextResponse.redirect(new URL("/home", req.url));
        }
    }
}
