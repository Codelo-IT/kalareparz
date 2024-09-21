import React from "react";
import classNames from "classnames";

type Props = {
    link: string;
    title: string;
    onClick?: () => void;
};

export const HeaderItem = ({ link, title, onClick }: Props) => (
    <a
        href={link}
        onClick={onClick}
        className={classNames(
            "text-black cursor-pointer transition hover:text-green tracking-wide max-w-max",
            "text-lg xl:text-xl",
        )}
    >
        {title}
    </a>
);
