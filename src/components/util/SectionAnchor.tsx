type Props = {
    id: string;
};

export const SectionAnchor = ({ id }: Props) => (
    <div
        id={id}
        className="absolute top-[-150px]"
    ></div>
);
