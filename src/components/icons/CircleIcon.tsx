import classNames from "classnames";
import { CSSProperties } from "react";

type Props = {
    className?: string;
    style?: CSSProperties;
};

export const CircleIcon = ({ className, style }: Props) => (
    <svg
        className={classNames(
            "min-h-[30px] h-[50px] xl:min-h-[50px] xl:h-[50px]",
            "min-w-[30px] w-[30px] xl:min-w-[50x] xl:w-[50px]",
            className,
        )}
        style={style}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="25"
            cy="25"
            r="25"
            fill="currentColor"
        />
    </svg>
);
