import { cookies } from "next/headers";

export default async function ListCookies() {
    const cookieStore = await cookies();

    return (
        <div>
            <h1>Cookies (Server)</h1>
            <p>These cookies are retrived using next/headers cookies.</p>
            <br />
            <ul>
                {cookieStore.getAll().map((cookie) => (
                    <li key={cookie.name}>
                        <strong>{cookie.name}:</strong> {cookie.value}
                    </li>
                ))}
            </ul>
        </div>
    );
}
