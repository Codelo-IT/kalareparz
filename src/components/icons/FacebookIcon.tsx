type Props = {
    className?: string;
};
export const FacebookIcon = ({ className }: Props) => {
    return (
        <svg
            className={className}
            width="512"
            height="512"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_4_26)">
                <path
                    d="M512 256C512 114.6 397.4 0 256 0C114.6 0 0 114.6 0 256C0 397.4 114.6 512 256 512C257.5 512 259 512 260.5 511.9V312.7H205.5V248.6H260.5V201.4C260.5 146.7 293.9 116.9 342.7 116.9C366.1 116.9 386.2 118.6 392 119.4V176.6H358.4C331.9 176.6 326.7 189.2 326.7 207.7V248.5H390.2L381.9 312.6H326.7V502.1C433.7 471.4 512 372.9 512 256Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_4_26">
                    <rect
                        width="512"
                        height="512"
                        fill="white"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
