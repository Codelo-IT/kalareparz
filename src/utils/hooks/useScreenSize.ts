import { useEffect, useState } from "react";

export const useScreenSize = () => {

	const getCurrentDimension = () => ({
		width: window.innerWidth,
		height: window.innerHeight
	})

	const [ screenSize, setScreenSize ] = useState(getCurrentDimension())

	useEffect(() => {
		const updateDimension = () => {
			setScreenSize(getCurrentDimension())
		}
		window.addEventListener('resize', updateDimension);

		return(() => {
			window.removeEventListener('resize', updateDimension);
		})
	}, [screenSize])

	return {
		width: screenSize.width,
		height: screenSize.height
	}
}