import { AtpAgent, AtpSessionData } from "@atproto/api";
import { cookies } from "next/headers";

async function login(
    service: string = "https://bsky.social",
    identifier: string,
    password: string
) {
    const cookieStore = await cookies();
    const agent = new AtpAgent({
        service: service,
    });

    try {
        await agent.login({ identifier: identifier, password: password });

        // doing everything manually to ensure compatibility
        cookieStore.set("atpSession-accessJwt", agent.session?.accessJwt as string);
        cookieStore.set("atpSession-refreshJwt", agent.session?.refreshJwt as string);

    } catch (e) {
        // TODO: show error message to the user
        console.error("Error logging in:", e);
        throw e;
    }
}
