import React, { useEffect, useState } from "react";
import { Logo } from "components/util/Logo";
import classNames from "classnames";
import burgerIcon from "assets/hamburger.svg";
import cloudIcon from "assets/cloud.svg";
import sunIcon from "assets/sun.svg";
import { HeaderItem } from "components/Header/HeaderItem";
import { routes } from "utils/constants";

export const Header = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const [isSidebarOpen, toggleSidebarOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollPosition(window.scrollY);
        });
    }, []);

    return (
        <header
            className={classNames(
                "w-screen fixed flex items-center z-50 text-xl transition duration-200",
                "justify-end md:justify-center",
                "h-[75px] md:h-[100px]",
                { "bg-white shadow-md": scrollPosition !== 0 },
            )}
        >
            <Logo className={classNames("absolute top-5 left-6", "h-24 lg:h-36")} />
            <div className="relative flex justify-center items-center gap-5">
                <div className={classNames("items-center", "hidden md:flex", "gap-8 xl:gap-20")}>
                    {routes.map(({ name, link }, index) => (
                        <HeaderItem
                            key={index}
                            link={link}
                            title={name}
                        />
                    ))}
                </div>
                <img
                    src={burgerIcon}
                    alt="="
                    className="block md:hidden h-5 mr-10 relative z-50 cursor-pointer"
                    onClick={() => {
                        toggleSidebarOpen(isOpen => !isOpen);
                    }}
                />
            </div>

            {/* Sidebar */}
            <div
                className={classNames(
                    "absolute w-[300px] flex flex-col gap-5 transition-all bg-white top-0 pt-20 p-10 h-screen shadow-2xl z-40",
                    { "right-[-300px]": !isSidebarOpen },
                    { "right-0": isSidebarOpen },
                )}
            >
                {routes.map(({ name, link }, index) => (
                    <HeaderItem
                        key={index}
                        link={link}
                        title={name}
                        onClick={() => toggleSidebarOpen(false)}
                    />
                ))}
            </div>

            {/* Sidebar backdrop */}
            <div
                onClick={() => toggleSidebarOpen(false)}
                className={classNames(
                    "fixed h-screen w-screen bg-blue-300 left-0 top-0 z-10 transition-opacity",
                    { "opacity-0 pointer-events-none": !isSidebarOpen },
                    { "opacity-70": isSidebarOpen },
                )}
            ></div>
            <img
                src={cloudIcon}
                alt="clouds"
                className={classNames("fixed top-0 left-0 h-[200px] z-20 scale-0", {
                    "animate-cloud-popup-1": isSidebarOpen,
                })}
            />
            <img
                src={cloudIcon}
                alt="clouds"
                className={classNames("fixed top-0 right-1/3 h-[200px] z-20 scale-0", {
                    "animate-cloud-popup-2": isSidebarOpen,
                })}
            />
            <img
                src={cloudIcon}
                alt="clouds"
                className={classNames("fixed top-8 left-24 h-[200px] z-20 sm:z-40 scale-0", {
                    "animate-cloud-popup-3": isSidebarOpen,
                })}
            />
            <img
                src={sunIcon}
                alt="clouds"
                className={classNames("fixed top-0 left-20 h-[150px] z-30 scale-0", {
                    "animate-sun-popup": isSidebarOpen,
                })}
            />
            {/* Sidebar backdrop */}
        </header>
    );
};
