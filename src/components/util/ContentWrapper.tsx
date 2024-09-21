import { PropsWithChildren } from "react";
import classNames from "classnames";

type Props = {
    className?: string;
};

export const ContentWrapper = ({ children, className }: PropsWithChildren<Props>) => (
    <div className={classNames("max-w-[1440px] mx-auto px-8", className)}>{children}</div>
);
