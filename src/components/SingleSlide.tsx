
type Props = {
	title: string
	image: string
}

export const SingleSlide = ({
	title,
	image,
}: Props) => {

	return (
		<div className="w-full h-full relative">
			<div className="absolute top-0 left-0 bg-gradient-to-r from-black opacity-90 to-transparent z-30 h-full w-full"></div>
			<img
				src={ image }
				alt="single-slide"
				className="absolute h-full w-full top-0 left-0 z-10 backdrop-filter object-cover"
			/>
			<div
				className="z-40 flex flex-col absolute top-1/3 left-24"
				style={ {  } }
			>
				<div className="text-6xl text-white max-w-2xl font-extralight">
					{ title }
				</div>
			</div>
		</div>
	)
}