'use client';

import { usePathname } from "next/navigation";
import Image from "next/image";

import AppIcon from "../assets/bsky.svg";
import HomeIcon from "../assets/home.svg";
import SearchIcon from "../assets/search.svg";
import BellIcon from "../assets/bell.svg";
import UserIcon from "../assets/user.svg";

export default function NavBar() {
    const router = usePathname();

    if (router !== "/auth") {
        return (
            <div className="w-full h-8 fixed bottom-0 text-center bg-inherit border-t">
                <nav className="container mx-auto relative">
                    <ul className="relative">
                        <li className="absolute left-4 top-0.5">
                            <a href="/home">
                                <Image src={HomeIcon} alt="home" />
                            </a>
                        </li>
                        <li className="absolute left-1/4 top-0.5">
                            <a href="/search">
                                <Image src={SearchIcon} alt="search" />
                            </a>
                        </li>
                        <li className="relative inline-block mx-auto text-center top-1">
                            <Image src={AppIcon} alt="blue sky icon" />
                        </li>
                        <li className="absolute right-1/4 top-0.5">
                            <a href="/notification">
                                <Image src={BellIcon} alt="notification" />
                            </a>
                        </li>
                        <li className="absolute right-4 top-0.5">
                            <a href="/me">
                                <Image src={UserIcon} alt="profile" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

    return;
}
