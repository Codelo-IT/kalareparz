import wheatIcon from "assets/wheat.svg";

type Props = {
	label: string
	title: string
	description: string
}

export const WhyUsTab = ({
	label,
	title,
	description,
}: Props) =>
	<div className="flex flex-col">
		<div className="text-darkGreen text-sm">
			{ label }
		</div>
		<div className="text-black font-title text-3xl">
			{ title }
		</div>
		<img
			src={ wheatIcon }
			alt="wheatIcon"
			className="w-5"
		/>
		<div className="text-gray-500 font-light text-base mt-10">
			{ description }
		</div>
	</div>