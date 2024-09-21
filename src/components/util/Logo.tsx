import logo from "assets/logo.png";
import classNames from "classnames";

type Props = {
    className: string;
};

export const Logo = ({ className }: Props) => {
    const onClick = () => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <a href="/#">
            <img
                src={logo}
                alt="Logo"
                onClick={onClick}
                className={classNames("cursor-pointer", className)}
            />
        </a>
    );
};
