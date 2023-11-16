import wheatIcon from "assets/wheat.svg";
import classNames from "classnames";

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
		<div className={ classNames(
			"text-darkGreen",
			"text-xs md:text-sm"
		) }>
			{ label }
		</div>
		<div className={ classNames(
			"text-black uppercase font-title",
			"text-2xl xl:text-3xl"
		) }>
			{ title }
		</div>
		<img
			src={ wheatIcon }
			alt="wheatIcon"
			className="w-5"
		/>
		<div className={ classNames(
			"text-gray-500 font-light mt-10",
			"w-2/3 sm:w-1/2 md:w-full",
			"my-10 md:mt-10 md:mb-0",
			"pr-10 md:pr-0",
			"text-sm sm:text-base md:text-lg"
		) }>
			{ description }
		</div>
	</div>