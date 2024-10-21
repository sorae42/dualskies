import type { Metadata } from "next";
import "./globals.css";
import NavBar from "~/components/navbar";

export const metadata: Metadata = {
    title: "DualSkies",
    description: "BlueSky Basic HTML Web App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body>
                {children}
                <NavBar />
            </body>
        </html>
    );
}
